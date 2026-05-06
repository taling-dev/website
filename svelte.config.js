import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      fallback: '404.html'
    }),
    prerender: {
      handleHttpError: ({ path, message }) => {
        // Ignore 404s for static assets and placeholder pages not yet built
        if (/\.(svg|ico|png|jpg|webp)$/.test(path) || ['/privacy', '/terms', '/portfolio'].includes(path)) {
          return;
        }
        throw new Error(message);
      },
      handleMissingId: 'warn'
    }
  }
};

export default config;
