<script lang="ts">
	import PageBlock from "$lib/components/pageBlock.svelte"
	import { homeMetaData, homeData } from "$lib/stores/pages/home"
</script>

<svelte:head>
	<title>{$homeMetaData.title}</title>
	<meta name="description" content={$homeMetaData.description} />
</svelte:head>

<PageBlock pageData={$homeData} />
