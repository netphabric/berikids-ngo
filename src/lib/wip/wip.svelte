<script lang="ts">
	import { page } from "$app/stores"
	import styles from "./wip.module.scss"

	const pathname = $page.url.pathname
	$: matchesNavlinks = ["/about-us", "/get-involved", "/our-impact", "/gallery"].includes(pathname)
</script>

<section class={styles.wipRoot}>
	<div class={styles.contentWrapper}>
		{#if matchesNavlinks}
			<span class="material-symbols-sharp">fire_truck</span>
			<h1>pending construction...</h1>
		{:else}
			<span class="material-symbols-sharp" style="color:salmon">front_hand</span>
			<h1>nothing here...</h1>
		{/if}

		<a href="/">
			<span class="material-symbols-sharp">arrow_left_alt</span>
			<span>go back home</span>
		</a>
	</div>
</section>
