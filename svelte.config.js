import adapter from "@sveltejs/adapter-netlify"
import { sveltePreprocess } from "svelte-preprocess"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess({
		scss: {
			prependData: `
      @use "sass:math";
      @use "sass:color";
      @use "./src/styles/functions.module" as *;
      @use "./src/styles/variables.module" as *;
      @use "./src/styles/mixins.module" as *;
      `
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
