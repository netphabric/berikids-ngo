import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"
import adapter from "@sveltejs/adapter-cloudflare"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			routes: {
				include: ["/*"],
				exclude: ["<all>"]
			}
		}),
		alias: {
			"styles/*": "./src/styles/*",
			"utils/*": "./src/utils/*",
			"assets/*": "./src/assets/*"
		}
	}
}

export default config
