<script>
	import PageBlock from "$lib/components/pageBlock.svelte"
	import { aboutMetaData, aboutData } from "$lib/stores/pages/about"
</script>

<PageBlock pageMetaData={$aboutMetaData} pageData={$aboutData} />
