import { writable } from "svelte/store"
import { trainingFaqs } from "../faqs"

export const vocationsMetaData = writable({
	title: "Vocations",
	description:
		"Learn about our vocational training programs. Discover practical skills for independence and growth. how we drive change through proffessional training"
})

export const vocationsData = writable([
	{
		type: "contentBlock",
		props: {
			heroBlock: true,
			contentChipColor: "red",
			contentChipText: "enabling self-sufficiency",
			contentChipIcon: "garden_cart",
			contentMedia: "/images/vocation-hero.webp",
			contentTitleHighlight: "skills",
			contentTitle: "Practical Skills for Independence and Growth",
			contentDescription:
				"Our vocational training programs are designed to equip orphans, women, and vulnerable individuals (those recovering through our rehabilitation program) with essential skills. By focusing on practical education, we aim to enhance their socio-economic conditions and foster independence."
		}
	},
	{
		type: "skillCards"
	},
	{
		type: "contentBlock",
		props: {
			blockLayout: true,
			contentChipColor: "green",
			contentChipText: "Our Process",
			contentChipIcon: "garden_cart",
			contentMedia: "",
			contentTitleHighlight: "training programs",
			contentTitle: "How are our vocational training programs structured?",
			contentDescription:
				"First, we begin by identifying the needs and goals of the individuals we serve. After rehabilitation, we identify their skills and interests. We then develop training plans together with some of our partners like the 'International Talent Outreach' that address their specific needs and goals.",
			ctaButtons: [
				{ label: "Volunteer", icon: "handshake", url: "/contact" },
				{ label: "Partnership", icon: "verified", url: "/contact" }
			]
		}
	},
	{
		type: "faq",
		props: {
			faqs: trainingFaqs,
			desc: "Find answers to your questions about our training programs and how to get involved."
		}
	}
])
