import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import solid from 'solid-start/vite'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
    return {
        plugins: [solid(), vanillaExtractPlugin({ identifiers: mode === 'development' ? 'debug' : 'short' })]
    }
})
