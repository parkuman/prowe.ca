import { sveltekit } from '@sveltejs/kit/vite';
import path from "path";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  resolve: {
    alias: {
      '$components': path.resolve('src/components'),
      '$styles': path.resolve('src/styles'),
      '$data': path.resolve('data'),
      '$types': path.resolve('src/types'),
    }
  }
};

export default config;