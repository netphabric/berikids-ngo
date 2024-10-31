<script>
	import Faq from "$lib/components/faq/faq.svelte"
	import { trainingFaqs } from "$lib/stores/faqStore"
</script>

<Faq
	desc="Find answers to your questions about our training programs and how to get involved."
	faqs={$trainingFaqs}
/>
