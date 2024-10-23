import adapter from "@sveltejs/adapter-netlify"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			edge: false,
			split: false
		}),
		alias: {
			"styles/*": "./src/styles/*",
			"utils/*": "./src/utils/*",
			"stores/*": "./src/stores/*"
		}
	}
}

export default config
