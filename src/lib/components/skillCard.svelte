<script lang="ts">
	import Chip from "./chip.svelte"

	const skillCards = [
		{
			title: "Agriculture",
			icon: "grocery",
			desc: "Our agriculture training empowers individuals to grow crops and improve food availability in their communities."
		},
		{
			title: "Carpentry",
			icon: "handyman",
			desc: "In our carpentry program, participants learn woodworking techniques to produce furniture and other products."
		},
		{
			title: "Tailoring",
			icon: "conveyor_belt",
			desc: "Our tailoring program teaches participants the art of sewing, enabling them to create garments and generate income."
		}
	]
</script>

<section class="skill-cards">
	<div class="section-wrapper">
		<Chip chipText="our skills" chipIcon="verified" chipColor="yellow" />

		<div class="cards-wrapper">
			{#each skillCards as skill}
				<article class="skill-card">
					<span class="material-symbols-sharp">{skill.icon}</span>
					<h4 class="title">{skill.title}</h4>
					<p class="text">{skill.desc}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	@use "sass:color";

	$green: #6faf64;
	$blue: #2b4f81;
	$red: #f44336;

	.skill-cards {
		padding: 32px;

		.section-wrapper {
			max-width: 1440px;
			margin-inline: auto;

			.cards-wrapper {
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				margin-block-start: 64px;
				gap: 32px;

				.skill-card {
					display: flex;
					flex-direction: column;
					align-items: center;
					gap: 16px;
					border-radius: 16px;
					padding: 20px;
					box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

					&:nth-child(1) {
						color: color.adjust($green, $lightness: -20%);
						background-color: color.adjust($green, $lightness: 35%);
					}

					&:nth-child(2) {
						color: color.adjust($blue, $lightness: -5%);
						background-color: color.adjust($blue, $lightness: 50%);
					}

					&:nth-child(3) {
						color: color.adjust($red, $lightness: -20%);
						background-color: color.adjust($red, $lightness: 35%);
					}

					.material-symbols-sharp {
						font-size: 64px;
						font-weight: 500;
					}

					.title {
						font-size: 32px;
						font-weight: 500;
						line-height: 64px;
					}

					.text {
						font-size: 18px;
						font-weight: 300;
						line-height: 32px;
						text-align: center;
						opacity: 0.8;
					}
				}
			}
		}
	}
</style>
