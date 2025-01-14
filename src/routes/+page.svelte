<script lang="ts">
	import { homeFaqs } from "$lib/stores/faqStore"
	import Faq from "$lib/components/faq/faq.svelte"
	import Testimonials from "$lib/components/testimonials.svelte"
	import ContactDetails from "$lib/components/contactDetails.svelte"
	import ContentBlock from "$lib/components/contentBlock.svelte"
</script>

<main>
	<ContentBlock
		contentChipColor="green"
		contentChipText="misson"
		contentChipIcon="sign_language"
		contentTitle="empowering lives through sustainable development initiatives"
		contentTitleHighlight="sustainable development"
		contentDescription="Our mission is to uplift orphans and vulnerable communities in Cameroon by enhancing their
		socio-economic conditions and providing essential resources. We focus on education, access to
		clean water, and spiritual guidance to foster holistic development.
  "
		contentMedia="/images/heroImg.webp"
	/>

	<ContactDetails />
	<Testimonials />

	<!-- prettier-ignore -->
	<Faq
    faqs={$homeFaqs}
    desc="discover how our NGO is making a difference and how you can help" 
  />
</main>
