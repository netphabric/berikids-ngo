<script lang="ts">
	import Button from "$lib/components/button/button.svelte"
	import SectionWrapper from "$lib/components/sectionWrapper/sectionWrapper.svelte"
	import { projectTypes } from "./store"
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

	<section class={styles.projectSection}>
		<div class={styles.projectHeader}>
			<h4 class={styles.chip}>
				<span class="material-symbols-sharp">tools_phillips</span>
				<span>Projects</span>
			</h4>

			<h2 class={styles.title}>
				Transforming Lives Through Our
				<span class={styles.highlight}>Diverse Projects</span>
			</h2>

			<p class={styles.desc}>
				Our projects are designed to uplift communities by addressing critical needs. We focus on
				socio-economic improvement, education, and essential resources.
			</p>
		</div>

		<div class={styles.projects}>
			{#each $projectTypes as project}
				<article class={styles.projectCard}>
					<span class="material-symbols-sharp">{project.icon}</span>

					<div class={styles.content}>
						<h3 class={styles.title}>{project.title}</h3>
						<p class={styles.text}>{project.desc}</p>
					</div>
				</article>
			{/each}
		</div>

		<div class={styles.ctaBtns}>
			<Button onWhite>
				<span>support us</span>
				<span class="material-symbols-sharp">partner_exchange</span>
			</Button>
		</div>
	</section>
</main>
