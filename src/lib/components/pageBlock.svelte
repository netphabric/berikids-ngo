<script lang="ts">
	import ContactDetails from "./contactDetails.svelte"
	import ContentBlock from "./contentBlock.svelte"
	import Testimonials from "./testimonials.svelte"
	import Faq from "./faq.svelte"

	export let pageData
</script>

<!-- prettier-ignore -->
<main>
	{#each pageData as section}
		{#if section.type === "contentBlock"} <ContentBlock {...section.props} />
		{:else if section.type === "faq"} <Faq {...section.props} />
		{:else if section.type === "contactDetails"} <ContactDetails />
		{:else if section.type === "testimonials"} <Testimonials />
		{/if}
	{/each}
</main>
