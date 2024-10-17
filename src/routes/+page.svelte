<script lang="ts">
	import Hero from "$lib/hero/hero.svelte"
	import HomeSection1 from "$lib/homeSection1/homeSection1.svelte"
	import HomeSection2 from "$lib/homeSection2/homeSection2.svelte"
	import HomeSection3 from "$lib/homeSection3/homeSection3.svelte"
	import HomeSection4 from "$lib/homeSection4/homeSection4.svelte"
	import Testimonials from "$lib/testimonials/testimonials.svelte"
	import styles from "./page.module.scss"
</script>

<main class={styles.homeRoot}>
	<Hero />
	<HomeSection1 />
	<HomeSection2 />
	<HomeSection3 />
	<Testimonials />
	<HomeSection4 />
</main>
