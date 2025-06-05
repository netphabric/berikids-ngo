<script lang="ts">
	import ContactDetails from "./contactDetails.svelte"
	import ContentBlock from "./contentBlock.svelte"
	import Testimonials from "./testimonials.svelte"
	import Faq from "./faq.svelte"
	import Team from "./team.svelte"
	import Partners from "./partners.svelte"
	import SkillCards from "./skillCards.svelte"

	type PageMetaProps = {
		title: string
		description: string
	}

	export let pageData: any
	export let pageMetaData: PageMetaProps
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
		{:else if section.type === "testimonials"} <Testimonials {...section.props} />
		{:else if section.type === "contactDetails"} <ContactDetails />
		{:else if section.type === "skillCards"} <SkillCards />
		{:else if section.type === "partners"} <Partners />
		{:else if section.type === "team"} <Team />
		{/if}
	{/each}
</main>
