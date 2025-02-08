<script lang="ts">
	import ContactDetails from "./contactDetails.svelte"
	import ContentBlock from "./contentBlock.svelte"
	import Testimonials from "./testimonials.svelte"
	import Faq from "./faq.svelte"
	import Team from "./team.svelte"
	import Partners from "./partners.svelte"

	export let pageData
	export let pageMetaData
</script>

<svelte:head>
	<title>{pageMetaData.title}</title>
	<meta name="description" content={pageMetaData.description} />
</svelte:head>

<!-- prettier-ignore -->
<main>
	{#each pageData as section}
		{#if section.type === "contentBlock"} <ContentBlock {...section.props} />
		{:else if section.type === "faq"} <Faq {...section.props} />
		{:else if section.type === "contactDetails"} <ContactDetails />
		{:else if section.type === "testimonials"} <Testimonials />
		{:else if section.type === "partners"} <Partners />
		{:else if section.type === "team"} <Team />
		{/if}
	{/each}
</main>
