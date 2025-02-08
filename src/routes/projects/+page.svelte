<script lang="ts">
	import PageBlock from "$lib/components/pageBlock.svelte"
	import { projectsMetaData, projectsData } from "$lib/stores/pages/projects"
</script>

<PageBlock pageMetaData={$projectsMetaData} pageData={$projectsData} />
