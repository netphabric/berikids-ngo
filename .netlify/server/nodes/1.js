export const index = 1
let component_cache
export const component = async () =>
	(component_cache ??= (await import("../entries/pages/_error.svelte.js")).default)
export const imports = [
	"_app/immutable/nodes/1.CIdGe41b.js",
	"_app/immutable/chunks/scheduler.BCRSdwSa.js",
	"_app/immutable/chunks/index.B_5LbzzS.js",
	"_app/immutable/chunks/entry.DYsEiu9u.js"
]
export const stylesheets = ["_app/immutable/assets/1.BX_FSPUp.css"]
export const fonts = []
