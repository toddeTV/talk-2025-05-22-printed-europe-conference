<script setup lang="ts">
import { useNav } from '@slidev/client'
import { computed } from 'vue'
import SvgElementFilter from './SvgElementFilter.vue'
import mySvgContent from '/assets/excalidraw-drawings/internet-foundation_light.svg?raw'

const { clicks } = useNav()

const fonts = [0, 1, 2]
const _unknown = [15, 23, 25, 27, 39, 45, 47, 49, 51, 54, 67, 69, 71]
const networks = [3, 4, 5, 12, 16, 28, 29, 30]
const server1 = [6, 7, 11, 18]
const server2 = [13, 17]
const ipAddress = [19, 31, 32, 33, 34, 60, 62]
const routing = [20, 21, 22, 24, 26, 42, 14, 43, 44, 46, 66, 68, 70, 72]
const client1 = [8, 9, 10, 63]
const client2 = [59, 61, 64, 65]
const dns = [35, 36, 37, 38, 40, 41, 48, 50, 52, 54]
const applicationProtocols = [55, 56]
const transportProtocols = [57, 58]
const secure = [73, 74, 75, 76]

const elementsToShow = computed<number[] | 'all'>(() => {
  if (clicks.value >= 9) {
    return 'all'
  }

  let res: number[] = []
  if (clicks.value >= 0) {
    res = [...res, ...fonts]
  }
  if (clicks.value >= 1) {
    res = [...res, ...server1, ...client1]
  }
  if (clicks.value >= 2) {
    res = [...res, ...networks]
  }
  if (clicks.value >= 3) {
    res = [...res, ...server2, ...client2]
  }
  if (clicks.value >= 4) {
    res = [...res, ...routing]
  }
  if (clicks.value >= 5) {
    res = [...res, ...ipAddress]
  }
  if (clicks.value >= 6) {
    res = [...res, ...dns]
  }
  if (clicks.value >= 7) {
    res = [...res, ...transportProtocols]
  }
  if (clicks.value >= 8) {
    res = [...res, ...applicationProtocols]
  }
  if (clicks.value >= 9) {
    res = [...res, ...secure]
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
