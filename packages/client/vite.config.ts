import { reactRouter } from "@react-router/dev/vite"
import { cloudflare } from "@cloudflare/vite-plugin"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "vite"

export default defineConfig({
    plugins: [
        cloudflare({ viteEnvironment: { name: "ssr" } }),
        tailwindcss(),
        reactRouter(),
    ],
    resolve: {
        tsconfigPaths: true,
    },
    server: {
        proxy: {
            "/api": {
                target: process.env.API_URL || "http://127.0.0.1:3000",
                changeOrigin: true,
            },
        },
        host: "0.0.0.0", // Ensure Vite listens on all network interfaces for Docker
    },
})
