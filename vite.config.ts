// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import packageJson from './package.json'

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ui-kit-snapmoment',
      // the proper extensions will be added
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react-jsx-runtime', ...Object.keys(packageJson.dependencies), ...Object.keys(packageJson.devDependencies) ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
      },
    },
    target: 'esnext',
    sourcemap: true
  },
})