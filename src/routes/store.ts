import { writable } from "svelte/store"

export const communityOpts = writable([
	{
		icon: "lightbulb_2",
		title: "innovative solutions for sustanable development in cameroon",
		description:
			"We focus on enhancing the socio-economic conditions of orphans through targeted initiatives."
	},
	{
		icon: "school",
		title: "Transforming Lives Through Education and Technology",
		description: "Our IT education programs equip orphans with essential skills for the future."
	},
	{
		icon: "water_bottle",
		title: "Providing Clean Water for Healthier Communities",
		description: "We implement potable water projects to ensure access to clean drinking water."
	}
])
