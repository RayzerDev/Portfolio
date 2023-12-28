import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/portfolioDark.css', 'resources/js/app.js', 'resources/css/portfolio.css'],
            refresh: true,
        }),
    ],
});
