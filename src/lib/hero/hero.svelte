<script>
	import Button from "$lib/button/button.svelte"
	import heroImg from "assets/photos/heroImg.webp"
	import styles from "./hero.module.scss"
</script>

<section class={styles.heroSection}>
	<h1 class={styles.heroTitle}>
		<span>empowering lives</span>
		<span>through <span class={styles.highlight}>sustainable</span></span>
		<span><span class={styles.highlight}>development</span> initiatives</span>
	</h1>

	<p class={styles.heroDescription}>
		Our mission is to uplift orphans and vulnerable communities in Cameroon by enhancing their
		socio-economic conditions and providing essential resources. We focus on education, access to
		clean water, and spiritual guidance to foster holistic development.
	</p>

	<div class={styles.ctaBtns}>
		<Button primary onWhite>
			<span>learn more</span>
			<span class="material-symbols-sharp">video_chat</span>
		</Button>

		<Button onWhite>
			<span>get involved</span>
			<span class="material-symbols-sharp">agriculture</span>
		</Button>
	</div>

	<div class={styles.heroImageContainer}>
		<img src={heroImg} alt="berikids" class={styles.heroImg} />
	</div>
</section>
