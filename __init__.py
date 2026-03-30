from .ComfyUIPascalEditor import NODE_CLASS_MAPPINGS
import os
import nodes
from aiohttp import web
from pathlib import Path

js_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), "js")

nodes.EXTENSION_WEB_DIRS["ComfyUI-PascalEditor"] = js_dir

__all__ = ['NODE_CLASS_MAPPINGS']

from server import PromptServer

routes = PromptServer.instance.routes

EDITOR_UI_DIR = Path(__file__).parent / 'pascal-editor-ui'

ASSET_PREFIXES = ['icons', 'audios', 'items', 'demos']


@routes.get('/pascal-editor')
async def serve_pascal_editor_index(request):
    index_path = EDITOR_UI_DIR / 'index.html'
    if index_path.exists():
        return web.FileResponse(index_path)
    else:
        return web.Response(text="Pascal Editor UI not found", status=404)


@routes.get('/pascal-editor/{path:.*}')
async def serve_pascal_editor_static(request):
    path = request.match_info.get('path', '')

    if '..' in path or path.startswith('/'):
        return web.Response(text="Invalid path", status=400)

    editor_path = EDITOR_UI_DIR / path

    if editor_path.is_dir():
        index_path = editor_path / 'index.html'
        if index_path.exists():
            return web.FileResponse(index_path)

    if editor_path.exists() and editor_path.is_file():
        return web.FileResponse(editor_path)

    static_extensions = [
        '.js', '.css', '.png', '.jpg', '.jpeg', '.gif', '.ico',
        '.txt', '.map', '.woff', '.woff2', '.ttf', '.svg',
        '.json', '.webp', '.glb', '.gltf', '.hdr',
    ]

    is_route = not any(path.endswith(ext) for ext in static_extensions) and not path.endswith('.html')

    if is_route:
        index_path = EDITOR_UI_DIR / 'index.html'
        if index_path.exists():
            return web.FileResponse(index_path, headers={
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0'
            })

    return web.Response(text="File not found", status=404)

def _make_asset_handler(prefix):
    async def handler(request):
        path = request.match_info.get('path', '')
        if '..' in path or path.startswith('/'):
            return web.Response(text="Invalid path", status=400)
        file_path = EDITOR_UI_DIR / prefix / path
        if file_path.exists() and file_path.is_file():
            return web.FileResponse(file_path)
        return web.Response(text="File not found", status=404)
    return handler


for _prefix in ASSET_PREFIXES:
    routes.get(f'/{_prefix}/{{path:.*}}')(_make_asset_handler(_prefix))
