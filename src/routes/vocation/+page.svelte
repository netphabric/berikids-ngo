<script>
	import { trainingFaqs } from "$lib/stores/faqs"
	import ContentBlock from "$lib/components/contentBlock.svelte"
	import SkillCards from "$lib/components/skillCards.svelte"
	import Faq from "$lib/components/faq.svelte"
</script>

<svelte:head>
	<title>Vocation</title>
</svelte:head>

<main>
	<ContentBlock
		heroBlock
		contentChipColor="red"
		contentChipText="enabling self-sufficiency"
		contentChipIcon="garden_cart"
		contentMedia="/images/vocation-hero.webp"
		contentTitleHighlight="skills"
		contentTitle=" Practical Skills for Independence and Growth "
		contentDescription="
      Our vocational training programs are designed to equip orphans, women
      and vulnerable individuals (those recovering through our rehabilitation program)
      with essential skills. By focusing on practical education, we aim to enhance their
      socio-economic conditions and foster independence.
    "
	/>

	<SkillCards />

	<ContentBlock
		blockLayout
		contentChipColor="green"
		contentChipText="Our Process"
		contentChipIcon="garden_cart"
		contentMedia=""
		contentTitleHighlight="programs structure"
		contentTitle="How are our vocational training programs structured?"
		contentDescription="
      first we begin by identifying the needs and goals of the individuals we serve.
      after rehabilitation, we identify their skills and interests.
      We then develop training plans together with some of our partners like the 'International talent outreach'
      that addresses their specific needs and goals.
    "
		ctaButtons={[
			{ label: "Volunteer", icon: "handshake", url: "/contact" },
			{ label: "Partnership", icon: "verified", url: "/contact" }
		]}
	/>

	<Faq
		faqs={$trainingFaqs}
		desc="Find answers to your questions about our training programs and how to get involved."
	/>
</main>
