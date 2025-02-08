<script>
	import PageBlock from "$lib/components/pageBlock.svelte"
	import { aboutMetaData, aboutData } from "$lib/stores/pages/about"
</script>

<svelte:head>
	<title>{$aboutMetaData.title}</title>
	<meta name="description" content={$aboutMetaData.description} />
</svelte:head>

<PageBlock pageData={$aboutData} />
