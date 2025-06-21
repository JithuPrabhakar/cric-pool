import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"
import { VitePWA } from "vite-plugin-pwa"

const manifestForPlugin = {
  registerType: "prompt",
  includeAssets: [
    "favicon.ico",
    "apple-touc-icon.png",
    "icon-512x512.png",
    "icon-192x192.png",
  ],
  manifest: {
    name: "Cric War",
    short_name: "Cric War",
    description: "An app for cricket match biddings",
    icons: [
      {
        src: "./icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "./icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "favicon",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "apple touch icon",
      },
      {
        src: "./icon-192x192.png",
        sizes: "144x144",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "./icon-192x192.png",
        sizes: "256x256",
        type: "image/png",
        purpose: "icon",
      },
      {
        src: "./icon-512x512.png",
        sizes: "384x384",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
    theme_color: "#35004a",
    background_color: "#e4cde8",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
  },
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    define: {
      "import.meta.env.VITE_API_BASE_URL": JSON.stringify(
        env.VITE_API_BASE_URL
      ),
    },
    server: {
      proxy: {
        "/APIProfile": {
          target: "http://test.cricketwar.com",
          changeOrigin: true,
          secure: false,
          rewrite: (path) =>
            path.replace(/^\/APIProfile/, "/APIProfile"),
        },
        "/APIMatches": {
          target: "http://test.cricketwar.com",
          changeOrigin: true,
          secure: false,
          rewrite: (path) =>
            path.replace(/^\/APIMatches/, "/APIMatches"),
        },
        "/APIFantasy": {
          target: "http://test.cricketwar.com",
          changeOrigin: true,
          secure: false,
          rewrite: (path) =>
            path.replace(/^\/APIFantasy/, "/APIFantasy"),
        },
      },
    },
    plugins: [react(), VitePWA(manifestForPlugin)],
  }
})
