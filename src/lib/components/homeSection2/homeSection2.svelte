<script lang="ts">
	import styles from "./homeSection2.module.scss"

	const options = [
		{
			icon: "lightbulb_2",
			title: "innovative solutions for sustanable development in cameroon",
			description:
				"We focus on enhancing the socio-economic conditions of orphans through targeted initiatives."
		},
		{
			icon: "school",
			title: "Transforming Lives Through Education and Technology",
			description: "Our IT education programs equip orphans with essential skills for the future."
		},

		{
			icon: "water_bottle",
			title: "Providing Clean Water for Healthier Communities",
			description: "We implement potable water projects to ensure access to clean drinking water."
		}
	]
</script>

<section class={styles.homeSection2}>
	<div class={styles.sectionWrapper}>
		<h2 class={styles.contentTitle}>
			empowering
			<span class={styles.highlight}>orphans</span> and vulnerable communities for a
			<span class={styles.highlight}>brighter future</span>
		</h2>

		<div class={styles.sectionContent}>
			{#each options as { icon, title, description }}
				<article>
					<span class="material-symbols-sharp">{icon}</span>
					<h4>{title}</h4>
					<p>{description}</p>
				</article>
			{/each}
		</div>
	</div>
</section>
