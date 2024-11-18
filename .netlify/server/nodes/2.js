export const index = 2
let component_cache
export const component = async () =>
	(component_cache ??= (await import("../entries/pages/_page.svelte.js")).default)
export const imports = [
	"_app/immutable/nodes/2.DYwZjSZf.js",
	"_app/immutable/chunks/scheduler.BCRSdwSa.js",
	"_app/immutable/chunks/index.B_5LbzzS.js",
	"_app/immutable/chunks/button.DJ9VMChY.js"
]
export const stylesheets = [
	"_app/immutable/assets/2.Dap6uGjt.css",
	"_app/immutable/assets/button.BYX6iF6A.css"
]
export const fonts = []
