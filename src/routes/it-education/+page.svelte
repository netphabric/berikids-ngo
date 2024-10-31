<script lang="ts">
	import ContactDetails from "$lib/components/contactDetails/contactDetails.svelte"
	import Faq from "$lib/components/faq/faq.svelte"
	import HeroLayoutleft from "$lib/components/heroLayoutLeft/heroLayoutleft.svelte"
	import PageSection from "$lib/components/pageSection/pageSection.svelte"
	import { trainingFaqs } from "$lib/stores/faqStore"
	import styles from "./page.module.scss"
</script>

<main class={styles.root}>
	<HeroLayoutleft
		titleHighlight="Foundations"
		title="Building Digital Foundations for a Brighter Future"
		desc=" The IT Education Initiative is a cornerstone of our mission to uplift communities in Cameroon. By advancing technology education, we empower orphans and vulnerable groups with essential skills for a brighter future. "
		sectionImage="vt1.webp"
	/>

	<PageSection
		isTitleMain
		chip="skills"
		chipIcon="satellite_alt"
		desc=" Our IT Education Initiative aims to enhance the skills and opportunities for orphans and vulnerable children in Cameroon. By leveraging technology, we empower them to build a brighter future and contribute to their communities."
		title="transforming lives through technology advacements"
		titleHighlight="technology advacements"
	/>

	<PageSection
		chip="experience"
		chipIcon="workspaces"
		desc="Our IT education programs are designed to equip orphans and vulnerable children with essential digital skills. From coding classes to computer literacy training, we provide a comprehensive learning experience. "
		title="Empowering communitites through IT Education"
		titleHighlight="it education"
		hasSubContainer
		items={[
			{
				title: "Coding Classes",
				desc: "Learn the fundamentals of programming and develop problem-solving skills for future opportunities."
			},
			{
				title: "Digital Skills",
				desc: "Gain proficiency in essential software and online tools to thrive in today’s world."
			}
		]}
		sectionImage="it2.webp"
		sectionImageAlt="berkids"
	/>

	<PageSection
		chip="transform"
		chipIcon="cognition"
		desc=" Our IT Education Initiative has empowered countless individuals, providing them with essential tech skills. These success stories highlight the profound impact of education on their lives and communities. "
		title="Success stories from out it education initiative"
		titleHighlight="education initiative"
		sectionImage="it1.webp"
		sectionImageAlt="berkids"
	/>

	<PageSection
		isBlockLayout
		chip="empower"
		chipIcon="crowdsource"
		desc="Our IT Education Initiative aims to bridge the digital divide in Cameroon. By providing essential resources and training, we empower communities to thrive in a technology-driven world."
		title="Transforming Education Through Technology Access"
		titleHighlight="transforming education"
		blockListItems={[
			{
				icon: "document_scanner",
				title: "building strong partnerships with local schools",
				desc: "We collaborate with local schools to enhance educational outcomes."
			},
			{
				icon: "mouse",
				title: "Providing Essential IT Equipment for Learning",
				desc: "Our initiative supplies schools with necessary IT tools."
			},
			{
				icon: "stream",
				title: "Training Educators for Effective Technology Integration",
				desc: "We equip educators with the skills to teach technology effectively."
			}
		]}
	/>

	<PageSection
		isBlockLayout
		chip="empower"
		chipIcon="crowdsource"
		desc="Join us in transforming lives by supporting our IT Education Initiative for orphans in Cameroon."
		title="Empower Change Through IT Education"
		titleHighlight="change"
		blockHeaderCta={[
			{
				text: "donate",
				icon: "compost"
			},
			{
				text: "volunteer",
				icon: "volunteer_activism"
			}
		]}
	/>

	<ContactDetails />

	<Faq
		desc="Find answers to your questions about our training programs and how to get involved."
		faqs={$trainingFaqs}
	/>
</main>
