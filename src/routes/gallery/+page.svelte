<script lang="ts">
	import styles from "./page.module.scss"
</script>

<section class={styles.root}>
	{#each Array.from({ length: 28 }, (_, i) => i + 1) as i}
		<div class={styles.masonItem}>
			<img src="/gallery/gi{i}.jpg" alt="memo" />
		</div>
	{/each}
</section>
