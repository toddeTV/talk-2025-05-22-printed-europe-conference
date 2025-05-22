<script setup lang="ts">
import { useNav } from '@slidev/client'
import { computed } from 'vue'
import SvgElementFilter from '../SvgElementFilter.vue'
import mySvgContent from '/assets/excalidraw-drawings/Web-Mindmap_light.svg?raw'

const prop = defineProps<{
  scale?: number
}>()

const { clicks } = useNav()

const elementsToShow = computed<number[] | 'all'>(() => {
  if (clicks.value === 0) {
    return [0, 1, 2, 3, 4, 17]
  }
  return 'all'
})
</script>

<template>
  <SvgElementFilter
    :display-indices="elementsToShow"
    :scale="prop.scale"
    :svg-content="mySvgContent"
  />
</template>
