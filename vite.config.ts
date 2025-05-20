import gltf from '@todde.tv/gltf-type-toolkit/vite'
import { templateCompilerOptions } from '@tresjs/core'
import { defineConfig } from 'vite'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  plugins: [
    svgLoader(),
    gltf(),
  ],
  slidev: {
    // markdown: {
    //   markdownItSetup(md) {
    //   },
    // },
    vue: {
      ...templateCompilerOptions,
    },
  },
})
