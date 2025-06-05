<script lang="ts">
	import PageBlock from "$lib/components/pageBlock.svelte"
	import { vocationsData, vocationsMetaData } from "$lib/stores/pages/vocations"
</script>

<PageBlock pageMetaData={$vocationsMetaData} pageData={$vocationsData} />
