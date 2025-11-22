import { writable } from "svelte/store"
import { homeFaqs } from "../faqs"

export const homeMetaData = writable({
	title: "Cameroon Orphan Support | Education & Rehabilitation | BeriKids",
	description:
		"BeriKids empowers orphans in Cameroon through education, rehabilitation, and community support. Learn how you can help create lasting change."
})

export const homeData = writable([
	{
		type: "contentBlock",
		props: {
			heroBlock: true,
			blockLayout: true,
			contentChipColor: "blue",
			contentChipText: "misson",
			contentChipIcon: "sign_language",
			contentMedia: "/images/heroImg.webp",
			contentTitleHighlight: "Empowering",
			contentTitle: "Empowering Cameroon's Vulnerable community",
			contentDescription:
				"Through quality education, trauma recovery programs, and community outreach, we foster sustainable socioeconomic development and spiritual growth. for orphans, mentally ill and at-risk children in Cameroon. "
		}
	},
	{
		type: "contentBlock",
		props: {
			flexReverse: true,
			contentChipColor: "green",
			contentChipText: "at the core",
			contentChipIcon: "digital_wellbeing",
			contentMedia: "/images/as2.webp",
			contentTitleHighlight: "Building",
			contentTitle: "Building Sustainable Futures in Cameroon",
			ctaButtons: [
				{
					url: "/vocation",
					label: "learn more",
					icon: "arrow_right_alt"
				}
			],
			contentDescription:
				"Our rehabilitation programs provide essential addiction recovery and trauma counseling to vulnerable individuals. Through targeted vocational skills training, we empower them to achieve financial independence and contribute to the local economy."
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
			contentTitleHighlight: "Opportunity",
			contentTitle: "Gender Equality And Economic Opportunity For Women In Cameroon",
			contentDescription:
				"We are committed to fostering gender equality and women's economic empowerment through targeted initiatives. By providing skills training and access to resources, we enable women to overcome poverty and become leaders in their communities."
		}
	},
	{
		type: "faq",
		props: {
			faqs: homeFaqs,
			desc: "Learn how our charitable organization is transforming lives in Cameroon. Find answers about our orphan support programs, rehabilitation services, and how you can make a donation."
		}
	}
])
