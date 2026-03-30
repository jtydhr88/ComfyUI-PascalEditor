<template>
  <Dialog
    v-model:visible="visible"
    header="Pascal Editor"
    :style="{ width: '90vw', height: '90vh' }"
    :maximizable="true"
    :modal="true"
    :closable="true"
    :draggable="false"
    content-class="h-full"
  >
    <App ref="appRef" />
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import App from './App.vue'

const visible = ref(false)
const appRef = ref<InstanceType<typeof App> | null>(null)

const open = () => {
  visible.value = true
}

const close = () => {
  visible.value = false
}

defineExpose({ open, close })
</script>

<style>
.p-dialog-content {
  flex: 1;
  overflow: hidden;
  padding: 0 !important;
}
</style>
