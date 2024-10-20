<script lang="ts">
	import Hero from "$lib/components/hero/hero.svelte"
	import HomeSection1 from "$lib/components/homeSection1/homeSection1.svelte"
	import HomeSection2 from "$lib/components/homeSection2/homeSection2.svelte"
	import HomeSection3 from "$lib/components/homeSection3/homeSection3.svelte"
	import HomeSection4 from "$lib/components/homeSection4/homeSection4.svelte"
	import Testimonials from "$lib/components/testimonials/testimonials.svelte"
	import Faq from "$lib/components/faq/faq.svelte"
	import styles from "./page.module.scss"
</script>

<main class={styles.homeRoot}>
	<Hero />
	<HomeSection1 />
	<HomeSection2 />
	<HomeSection3 />
	<Testimonials />
	<HomeSection4 />
	<Faq />
</main>
