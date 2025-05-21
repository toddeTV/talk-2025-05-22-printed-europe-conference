<script setup lang="ts">
import { useNav } from '@slidev/client'
import { computed } from 'vue'
import SvgElementFilter from '../SvgElementFilter.vue'
import mySvgContent from '/assets/excalidraw-drawings/client-side-and-server-side_light.svg?raw'

const { clicks } = useNav()

const elementsToShow = computed<number[] | 'all'>(() => {
  if (clicks.value >= 7) {
    return 'all'
  }

  let res: number[] = []
  if (clicks.value >= 1) { // container backend
    res = [...res, 0, 1, 2, 3, 6, 8, 10, 22]
  }
  if (clicks.value >= 2) { // container frontend
    res = [...res, 4, 5, 9]
  }
  if (clicks.value >= 3) { // frontend to backend connection
    res = [...res, 7]
  }
  if (clicks.value >= 4) { // content backend
    res = [...res, 11, 12, 13, 14, 15, 16, 17, 18, 19]
  }
  if (clicks.value >= 5) { // content frontend
    res = [...res, 20, 21, 23, 24, 25, 26, 27, 28, 29]
  }
  if (clicks.value >= 6) { // APIs
    res = [...res, 30]
  }
  if (clicks.value >= 7) { // note
    res = [...res, 31, 32, 33]
  }
  return res
})
</script>

<template>
  <SvgElementFilter
    :display-indices="elementsToShow"
    svg-class="w-full"
    :svg-content="mySvgContent"
  />
</template>
