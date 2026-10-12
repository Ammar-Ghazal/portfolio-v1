import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    // Relative asset paths, so the build works under any GitHub Pages repo name.
    base: './',
    plugins: [react()],
});
