import { writable } from "svelte/store"
import { homeFaqs } from "../faqs"

export const homeMetaData = writable({
	title: "Berikids NGO",
	description:
		"Empowering Orphans and Vulnerable Children through Rehabilitation, Education, and Spiritual Guidance"
})

export const homeData = writable([
	{
		type: "contentBlock",
		props: {
			heroBlock: true,
			contentChipColor: "blue",
			contentChipText: "misson",
			contentChipIcon: "sign_language",
			contentMedia: "/images/heroImg.webp",
			contentTitleHighlight: "sustainable development",
			contentTitle: "empowering lives through sustainable development initiatives",
			contentDescription:
				"Our mission is to uplift orphans and vulnerable communities in Cameroon by enhancing their socio-economic conditions and providing essential resources. We focus on rehabilitation, education and spiritual guidance to foster holistic development."
		}
	},
	{ type: "contactDetails" },
	{
		type: "contentBlock",
		props: {
			flexReverse: true,
			contentChipColor: "green",
			contentChipText: "at the core",
			contentChipIcon: "digital_wellbeing",
			contentMedia: "/images/as2.webp",
			contentTitleHighlight: "rehabilitation center",
			contentTitle: "Social and economic empowerment through our rehabilitation center",
			ctaButtons: [
				{
					url: "/vocation",
					label: "learn more",
					icon: "arrow_right_alt"
				}
			],
			contentDescription:
				"Our rehabilitation centers are at the heart of our mission, where we help individuals recover from trauma and empower them to lead fulfilling lives. by upskilling them through vocational training programs. we encourage them to take control of their lives, by boosting their socio-economic well-being."
		}
	},
	{ type: "testimonials" },
	{
		type: "contentBlock",
		props: {
			contentChipColor: "yellow",
			contentChipText: "gender development",
			contentChipIcon: "female",
			contentMedia: "/images/womenEmpowerment.webp",
			contentTitleHighlight: "women empowerment",
			contentTitle: "women empowerment and poverty alleviation",
			contentDescription:
				"we are dedicated to empowering women through gender development initiatives. by equipping them with the skills and resources they need to navigate life's challenges and contribute to the socio-economic development of their communities."
		}
	},
	{
		type: "faq",
		props: {
			faqs: homeFaqs,
			desc: "discover how our NGO is making a difference and how you can help"
		}
	}
])
