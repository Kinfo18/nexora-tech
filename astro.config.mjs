// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    site: 'https://nexora.tech.com',
    vite: {
        // @ts-ignore - A veces necesario si los tipos de Tailwind v4 y Vite 6 no sincronizan perfecto
        plugins: [tailwindcss()],
    },
});