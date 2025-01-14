import { writable } from "svelte/store"

export const projectTypes = writable([
	{
		icon: "nest_eco_leaf",
		title: "Socio-Economic Improvement Initiatives",
		desc: "We implement programs that enhance the living conditions of orphans and vulnerable groups."
	},
	{
		icon: "touchpad_mouse",
		title: "Advancing IT Education for All",
		desc: "Our IT education initiatives equip individuals with essential digital skills."
	},
	{
		icon: "water_full",
		title: "Providing Access to Potable Water",
		desc: "We ensure that communities have access to clean drinking water."
	}
])
