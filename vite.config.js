// ===========================================================================
/// <summary>
/// vite.config.js
/// project
/// created by Mehrdad Soleimanimajd on 06.06.2023
/// </summary>
/// <created>ʆϒʅ, 06.06.2023</created>
/// <changed>ʆϒʅ, 21.11.2023</changed>
// ===========================================================================

import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
});
