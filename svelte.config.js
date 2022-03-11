import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import path from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess()
	],

	kit: {
		adapter: adapter(),

		vite: {
			resolve: {
				alias: {
					'$components': path.resolve('src/components'),
					'$styles': path.resolve('src/styles'),
					'$data': path.resolve('data'),
					'$types': path.resolve('src/types'),
				}
			}
		}
	},
};

export default config;
