<script>
	import Faq from "$lib/components/faq.svelte"
	import PageSection from "$lib/components/pageSection/pageSection.svelte"
	import { trainingFaqs } from "$lib/stores/faqs"
	import styles from "./page.module.scss"
</script>

<main class={styles.root}>
	<PageSection
		isBlockLayout
		chip="experience"
		chipIcon="workspaces"
		desc="Our vocational training programs are designed to equip orphans and vulnerable individuals with essential skills. By focusing on practical education, we aim to enhance their socio-economic conditions and foster independence."
		title="Practical Skills for Independence and Growth"
		titleHighlight="independence"
		hasSubContainer
		blockListItems={[
			{
				icon: "dry_cleaning",
				title: "Tailoring: Crafting Skills for a Bright Future",
				desc: "Our tailoring program teaches participants the art of sewing, enabling them to create garments and generate income."
			},
			{
				icon: "carpenter",
				title: "Carpentry: Building Skills for Sustainable Livelihoods",
				desc: "In our carpentry program, participants learn woodworking techniques to produce furniture and other products."
			},
			{
				icon: "grocery",
				title: "Agriculture: Cultivating Knowledge for Food Security",
				desc: "Our agriculture training empowers individuals to grow crops and improve food availability in their communities."
			}
		]}
	/>

	<PageSection
		chip="pathways"
		chipIcon="add_business"
		desc="Our vocational training programs have successfully empowered over 1,000 participants. With a remarkable 75% employment rate post-training, we are making a significant impact in our communities."
		title="Pathways to Independence through Vocational Training"
		titleHighlight="pathways"
		hasSubContainer
		items={[
			{
				title: "75%",
				desc: "Participants have gained valuable job skills."
			},
			{
				title: "80%",
				desc: "Success stories inspire hope and change."
			}
		]}
		sectionImage="vt2.webp"
		sectionImageAlt="berkids"
	/>

	<PageSection
		isBlockLayout
		chip="empower"
		chipIcon="crowdsource"
		desc="Join us in transforming lives by supporting our vocational training programs for vulnerable communities."
		title="Empower Change Through training"
		titleHighlight="change"
	/>

	<Faq
		desc="Find answers to your questions about our training programs and how to get involved."
		faqs={$trainingFaqs}
	/>
</main>
