import { writable } from "svelte/store"

export const skills = writable([
	{ title: "Agriculture", icon: "grocery" },
	{ title: "Carpentry", icon: "handyman" },
	{ title: "IT Literacy", icon: "devices" },
	{ title: "Tailoring", icon: "conveyor_belt" },
	{ title: "Metal works", icon: "square_foot" },
	{ title: "Artistry", icon: "palette" },
	{ title: "Music", icon: "music_note" },
	{ title: "Shoemaking", icon: "steps" },
	{ title: "hairdressing", icon: "self_care" },
	{ title: "global health", icon: "medical_mask" },
	{ title: "sanitary assistants", icon: "sanitizer" },
	{ title: "office automation", icon: "print" },
	{ title: "vocational nurse", icon: "medical_services" },
	{ title: "moto mechanics", icon: "build" },
	{ title: "home mgt", icon: "home" },
	{ title: "masonry", icon: "construction" },
	{ title: "glass cutting", icon: "format_ink_highlighter" },
	{ title: "painting & tiling", icon: "imagesearch_roller" },
	{ title: "plumbing", icon: "valve" },
	{ title: "hotel mgt", icon: "hotel" },
	{ title: "hospitality mgt", icon: "restaurant" },
	{ title: "travel & tourism mgt", icon: "flight" }
])
