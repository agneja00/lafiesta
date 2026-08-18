import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const variablesPath = path.resolve(__dirname, "src/styles/variables").replace(/\\/g, "/")

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "${variablesPath}" as *;`,
      },
    },
  },
})
