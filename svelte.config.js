import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import path from "path";
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess(),
		mdsvex({
			extensions: ['.md']
		})
	],

	extensions: ['.svelte', '.md'],

	kit: {
		adapter: adapter(),

		vite: {
			resolve: {
				alias: {
					'$components': path.resolve('src/components'),
					'$styles': path.resolve('src/styles'),
				}
			}
		}
	},
};

export default config;
