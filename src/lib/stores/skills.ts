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
	{ title: "global health and development", icon: "medical_mask" },
	{ title: "sanitary assistants", icon: "sanitizer" },
	{ title: "office automation secretaryship", icon: "print" },
	{ title: "vocational nurse assistants", icon: "medical_services" },
	{ title: "moto mechanics", icon: "build" },
	{ title: "home management", icon: "home" },
	{ title: "masonry", icon: "construction" },
	{ title: "glass cutting", icon: "format_ink_highlighter" },
	{ title: "painting and tiling", icon: "imagesearch_roller" },
	{ title: "plumbing", icon: "valve" },
	{ title: "hotel management", icon: "hotel" },
	{ title: "hospitality management", icon: "restaurant" },
	{ title: "travel and tourism management", icon: "flight" }
])
