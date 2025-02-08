<script lang="ts">
	import PageBlock from "$lib/components/pageBlock.svelte"
	import { homeMetaData, homeData } from "$lib/stores/pages/home"
</script>

<PageBlock pageMetaData={$homeMetaData} pageData={$homeData} />
