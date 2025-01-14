<script lang="ts">
	import styles from "./testimonials.module.scss"
	export let scrollToID = "vacation-testimony"
</script>

<section class={styles.testimonialsSection} id={scrollToID}>
	<h2 class={styles.testimony}>
		I am one of the first orphans educated and empowered by Berikids International and its partners.
		I currently work as the chief of the Berikids International mental health unit in Nkapa Souza,
		Douala, Cameroon. I am grateful to Berikids International and its partners, especially Friends
		of Cameroon.
	</h2>

	<article class={styles.testimonyAuthor}>
		<div class={styles.authorDP}>
			<div class={styles.circle}></div>
			<img src="/images/homeTestimonyDP.jpeg" alt="testimonial avatar" />
		</div>

		<h4 class={styles.authorsName}>Valery Ayuni</h4>
		<p class={styles.authorsRole}>
			Nurse, Chief of post @berikids international mental health unit Nkapa Souza Douala Cameroon.
		</p>
	</article>
</section>
