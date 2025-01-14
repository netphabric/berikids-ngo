<script lang="ts">
	import { homeFaqs } from "$lib/stores/faqStore"
	import ContentBlock from "$lib/components/ContentBlock.svelte"
	import Testimonials from "$lib/components/testimonials/testimonials.svelte"
	import ContactDetails from "$lib/components/contactDetails.svelte"
	import Faq from "$lib/components/faq/faq.svelte"
</script>

<main>
	<ContentBlock
		contentChipText="compassionate"
		contentChipIcon="/icons/sign_language_30dp_434343_FILL0_wght300_GRAD0_opsz24.svg"
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
