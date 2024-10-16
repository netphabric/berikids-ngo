<script lang="ts">
	import Hero from "$lib/hero/hero.svelte"
	import HomeSection1 from "$lib/homeSection1/homeSection1.svelte"
	import HomeSection2 from "$lib/homeSection2/homeSection2.svelte"
	import styles from "./page.module.scss"
</script>

<main class={styles.homeRoot}>
	<Hero />
	<HomeSection1 />
	<HomeSection2 />
</main>
