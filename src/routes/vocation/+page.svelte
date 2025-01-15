<script>
	import { trainingFaqs } from "$lib/stores/faqs"
	import ContentBlock from "$lib/components/contentBlock.svelte"
	import SkillCard from "$lib/components/skillCard.svelte"
	import Faq from "$lib/components/faq.svelte"
</script>

<main>
	<ContentBlock
		contentChipColor="red"
		contentChipText="enabling self-sufficiency"
		contentChipIcon="garden_cart"
		contentTitle=" Practical Skills for Independence and Growth "
		contentTitleHighlight="skills"
		contentMedia="/images/vocation-hero.webp"
		contentDescription="Our vocational training programs are designed to equip orphans and vulnerable individuals with essential skills. By focusing on practical education, we aim to enhance their socio-economic conditions and foster independence. "
	/>

	<SkillCard />

	<Faq
		faqs={$trainingFaqs}
		desc="Find answers to your questions about our training programs and how to get involved."
	/>
</main>
