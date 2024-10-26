<script lang="ts">
	import Button from "$lib/components/button/button.svelte"
	import SectionWrapper from "$lib/components/sectionWrapper/sectionWrapper.svelte"
	import styles from "./page.module.scss"
</script>

<main class={styles.root}>
	<SectionWrapper className={styles.hero}>
		<h2 class={styles.title}>
			<span class={styles.highlight}>transforming</span> lives together
		</h2>

		<div class={`${styles.sectionContent} ${styles.heroRight}`}>
			<p class={styles.desc}>
				Our projects are designed to uplift the most vulnerable members of our society, focusing on
				orphans and those in need. Through education, vocational training, and essential resources,
				we are making a lasting impact in Cameroon.
			</p>

			<div class={styles.ctaBtns}>
				<Button primary onWhite>
					<span>learn more</span>
					<span class="material-symbols-sharp">tools_installation_kit</span>
				</Button>

				<Button onWhite>
					<span>get involved</span>
					<span class="material-symbols-sharp">tools_power_drill</span>
				</Button>
			</div>
		</div>
	</SectionWrapper>
</main>
