<script lang="ts">
	import Chip from "./chip.svelte"

	const skillCards = [
		{ title: "Agriculture", icon: "grocery" },
		{ title: "Carpentry", icon: "handyman" },
		{ title: "Tailoring", icon: "conveyor_belt" },
		{ title: "IT Literacy", icon: "devices" }
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
				</article>
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	.skill-cards {
		padding: rem(32) rem(20);

		.section-wrapper {
			max-width: $max-width;
			margin-inline: auto;

			.cards-wrapper {
				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
				margin-block-start: rem(32);
				gap: rem(16);

				@include minWidth("tablet") {
					margin-block-start: rem(64);
					grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
					gap: rem(32);
				}

				.skill-card {
					display: flex;
					flex-direction: column;
					align-items: center;
					gap: 16px;
					border-radius: 16px;
					padding: 20px;
					box-shadow: $shadow-soft;

					&:nth-child(1) {
						@include greenShade;
					}

					&:nth-child(2) {
						@include blueShade;
					}

					&:nth-child(3) {
						@include redShade;
					}

					&:nth-child(4) {
						@include yellowShade;
					}

					.material-symbols-sharp {
						font-size: $h1;
						font-weight: $medium;
					}

					.title {
						font-size: $h5;
						font-weight: $medium;

						@include minWidth("tablet") {
							font-size: $h4;
							line-height: rem(64);
						}
					}
				}
			}
		}
	}
</style>
