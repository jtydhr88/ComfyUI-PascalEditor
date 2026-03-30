import { createApp, type App as VueApp } from 'vue'
import { app } from "../../../scripts/app.js"
import { api } from "../../../scripts/api.js"
import PrimeVue from 'primevue/config'
import Root from "@/Root.vue"
import './style.css'

const { ComfyButton } = window.comfyAPI.button

let vueApp: VueApp | null = null
let mountContainer: HTMLElement | null = null
let rootInstance: InstanceType<typeof Root> | null = null

function ensurePascalEditorInstance(): InstanceType<typeof Root> {
    if (mountContainer && rootInstance) {
        return rootInstance
    }

    mountContainer = document.createElement('div')
    mountContainer.id = 'pascal-editor-root'
    document.body.appendChild(mountContainer)

    vueApp = createApp(Root)
    vueApp.use(PrimeVue, { theme: 'none' })
    rootInstance = vueApp.mount(mountContainer) as InstanceType<typeof Root>

    return rootInstance
}

function openPascalEditor() {
    const instance = ensurePascalEditorInstance()
    instance.open()
}

function sendToIframe(iframe: HTMLIFrameElement, message: Record<string, unknown>) {
    iframe.contentWindow?.postMessage(message, '*')
}

function handleLoadBuild(iframe: HTMLIFrameElement) {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'application/json'
    input.addEventListener('change', () => {
        const file = input.files?.[0]
        if (!file) return
        const reader = new FileReader()
        reader.onload = (e) => {
            const data = e.target?.result as string
            sendToIframe(iframe, { type: 'pascal-editor:load', data })
        }
        reader.readAsText(file)
    })
    input.click()
}

function captureFromIframe(iframe: HTMLIFrameElement): Promise<string> {
    return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            window.removeEventListener('message', handler)
            reject(new Error('Pascal Editor capture timeout'))
        }, 15000)

        const handler = (event: MessageEvent) => {
            if (event.data?.type === 'pascal-editor:capture-result') {
                clearTimeout(timeout)
                window.removeEventListener('message', handler)
                resolve(event.data.data as string)
            }
        }

        window.addEventListener('message', handler)
        iframe.contentWindow?.postMessage({ type: 'pascal-editor:capture' }, '*')
    })
}

async function uploadTempImage(dataUrl: string, prefix: string = 'scene'): Promise<{ name: string }> {
    const blob = await fetch(dataUrl).then(r => r.blob())
    const name = `${prefix}_${Date.now()}.png`
    const file = new File([blob], name, { type: 'image/png' })

    const body = new FormData()
    body.append('image', file)
    body.append('subfolder', 'pascal_editor')
    body.append('type', 'temp')

    const resp = await api.fetchApi('/upload/image', {
        method: 'POST',
        body,
    })

    if (resp.status !== 200) {
        throw new Error(`Upload failed: ${resp.status}`)
    }

    return await resp.json()
}

function createPascalEditorWidget(node: any) {
    const container = document.createElement('div')
    container.style.cssText = 'width:100%;height:100%;position:relative;overflow:hidden;'

    const iframe = document.createElement('iframe')
    iframe.src = '/pascal-editor'
    iframe.style.cssText = 'width:100%;height:100%;border:none;display:block;'
    iframe.allow = 'cross-origin-isolated'
    container.appendChild(iframe)

    node._pascalEditorIframe = iframe

    const editorWidget = node.addDOMWidget(
        'pascal_editor_view',
        'pascal-editor',
        container,
        {
            getMinHeight: () => 450,
            hideOnZoom: false,
            serialize: false,
        }
    )

    const imageWidget = node.addWidget('text', 'image', '', () => {})
    imageWidget.type = 'hidden'
    imageWidget.serialize = true
    imageWidget.serializeValue = async () => {
        try {
            const dataUrl = await captureFromIframe(node._pascalEditorIframe)
            const result = await uploadTempImage(dataUrl)
            return `pascal_editor/${result.name} [temp]`
        } catch (err) {
            console.error('Pascal Editor capture failed:', err)
            return ''
        }
    }

    node.addWidget('button', 'Export GLB', 'export_glb', () => {
        sendToIframe(node._pascalEditorIframe, { type: 'pascal-editor:export', format: 'glb' })
    })
    node.addWidget('button', 'Export STL', 'export_stl', () => {
        sendToIframe(node._pascalEditorIframe, { type: 'pascal-editor:export', format: 'stl' })
    })
    node.addWidget('button', 'Export OBJ', 'export_obj', () => {
        sendToIframe(node._pascalEditorIframe, { type: 'pascal-editor:export', format: 'obj' })
    })
    node.addWidget('button', 'Save Build', 'save_build', () => {
        sendToIframe(node._pascalEditorIframe, { type: 'pascal-editor:save' })
    })
    node.addWidget('button', 'Load Build', 'load_build', () => {
        handleLoadBuild(node._pascalEditorIframe)
    })
    node.addWidget('button', 'Fullscreen', 'fullscreen', () => {
        openPascalEditor()
    })

    const [w, h] = node.size
    node.setSize([Math.max(w, 500), Math.max(h, 700)])
}

app.registerExtension({
    name: 'ComfyUI.PascalEditor',

    setup() {
        app.menu?.settingsGroup.append(
            new ComfyButton({
                icon: 'cube',
                tooltip: 'Pascal 3D Editor',
                content: 'Pascal Editor',
                action: openPascalEditor,
            }),
        )
    },

    nodeCreated(node: any) {
        if (node.constructor?.comfyClass === 'ComfyUIPascalEditor') {
            createPascalEditorWidget(node)
        }
    },
})
