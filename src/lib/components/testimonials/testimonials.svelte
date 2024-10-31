<script lang="ts">
	import styles from "./testimonials.module.scss"
	export let dp = 11
</script>

<section class={styles.testimonialsSection} id="testimony">
	<h2 class={styles.testimony}>
		"This organization has transformed my life and the lives of many others. Their support has given
		us hope and a brighter future."
	</h2>

	<article class={styles.testimonyAuthor}>
		<div class={styles.authorDP}>
			<div class={styles.circle}></div>
			<img src="https://i.pravatar.cc/300?img={dp}" alt="testimonial avatar" />
		</div>

		<h4 class={styles.authorsName}>John Doe</h4>
		<p class={styles.authorsRole}>volunteer, NGO partner</p>
	</article>
</section>
