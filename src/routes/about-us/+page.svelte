<script>
	import Button from "$lib/components/button/button.svelte"
	import styles from "./page.module.scss"
</script>

<main class={styles.aboutRoot}>
	<section class={styles.hero}>
		<h4 class={styles.chip}>
			<span>empowerment</span>
			<span class="material-symbols-sharp">person_raised_hand</span>
		</h4>
		<h1 class={styles.title}>
			<span class={styles.highlight}>transforming</span>
			lives together
		</h1>
		<p class={styles.desc}>
			dedicated to uplifting orphans and vulnerable communites throught education, support and
			sustainable development
		</p>

		<div class={styles.ctaBtns}>
			<Button onWhite primary>
				<span>learn more</span>
				<span class="material-symbols-sharp">expand_content</span>
			</Button>

			<Button onWhite>
				<span>join us</span>
				<span class="material-symbols-sharp">handshake</span>
			</Button>
		</div>
	</section>
</main>
