import { writable } from "svelte/store"

export const aboutMetaData = writable({
	title: "About Berikids",
	description:
		"this is all about who we are, what we do and how we do it. especially the people behind us"
})

export const aboutData = writable([
	{
		type: "contentBlock",
		props: {
			heroBlock: true,
			contentChipColor: "yellow",
			contentChipText: "berikids",
			contentChipIcon: "child_care",
			contentMedia: "/images/about-hero.webp",
			contentTitleHighlight: "vision",
			contentTitle: "Our Goals, Vision and Mission.",
			contentDescription:
				"We are a Cameroonian NGO founded in 2004, we focus on improving the lives of underprivileged children, orphans, empowering women and helping the drug-hardened individuals through our rehabilitation centers. We're currently prioritizing interventions to address the challenges of the ongoing armed conflict there, providing critical assistance and contributing to long-term positive change."
		}
	},
	{
		type: "team"
	},
	{
		type: "contentBlock",
		props: {
			contentChipColor: "green",
			contentChipText: "Inline with our values",
			contentChipIcon: "church",
			contentMedia: "/images/christianConnection.webp",
			contentTitleHighlight: "rooted",
			contentTitle: "we establish lasting and rooted Christian connections",
			contentDescription:
				"Our NGO is deeply connected to the Christian faith, providing moral and spiritual support to the children and families we serve, as well as ourselves."
		}
	},
	{
		type: "contentBlock",
		props: {
			flexReverse: true,
			contentChipColor: "blue",
			contentChipText: "what we do",
			contentChipIcon: "potted_plant",
			contentMedia: "/images/Hs1-img.webp",
			contentTitleHighlight: "sustainability",
			contentTitle: "supporting vulnerable communities via sustainability programs.",
			contentDescription:
				"Founded with a vision to uplift the socio-economic conditions of orphans in Cameroon, our NGO has grown significantly since its inception. Key milestones include the launch of vocational training programs and successful partnerships with local and international organizations to enhance community development."
		}
	},
	{
		type: "partners"
	}
])
