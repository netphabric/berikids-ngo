import adapter from "@sveltejs/adapter-netlify"
import { sveltePreprocess } from "svelte-preprocess"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess({
		scss: {
			includePaths: ["src/styles"]
		}
	}),
	kit: {
		adapter: adapter({
			edge: false,
			split: false
		}),
		alias: {
			"styles/*": "./src/styles/*",
			"utils/*": "./src/utils/*",
			"stores/*": "./src/stores/*",
			"icons/*": "./static/icons/*"
		}
	}
}

export default config
