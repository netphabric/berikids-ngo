<script lang="ts">
	import { homeFaqs } from "$lib/stores/faqs"
	import Faq from "$lib/components/faq.svelte"
	import Testimonials from "$lib/components/testimonials.svelte"
	import ContactDetails from "$lib/components/contactDetails.svelte"
	import ContentBlock from "$lib/components/contentBlock.svelte"
</script>

<main>
	<ContentBlock
		heroBlock
		contentChipColor="blue"
		contentChipText="misson"
		contentChipIcon="sign_language"
		contentMedia="/images/heroImg.webp"
		contentTitleHighlight="sustainable development"
		contentTitle="empowering lives through sustainable development initiatives"
		contentDescription="
      Our mission is to uplift orphans and vulnerable communities in Cameroon by enhancing their
      socio-economic conditions and providing essential resources. We focus on education, access to
      clean water, and spiritual guidance to foster holistic development.
    "
	/>

	<ContactDetails />
	<Testimonials />

	<!-- prettier-ignore -->
	<Faq
    faqs={$homeFaqs}
    desc="discover how our NGO is making a difference and how you can help" 
  />
</main>
