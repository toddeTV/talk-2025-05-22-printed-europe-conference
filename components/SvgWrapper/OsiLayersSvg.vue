<script setup lang="ts">
import SvgElementFilter from '../SvgElementFilter.vue'
import mySvgContent from '/assets/excalidraw-drawings/osi-layers_light.svg?raw'

const prop = defineProps<{
  scale?: number
}>()
</script>

<template>
  <SvgElementFilter
    display-indices="all"
    :scale="prop.scale"
    :svg-content="mySvgContent"
  />
</template>
