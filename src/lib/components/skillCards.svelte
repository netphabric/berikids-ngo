<script lang="ts">
	import { skills } from "$lib/stores/skills"
	import Chip from "./chip.svelte"
</script>

<section class="skill-cards">
	<div class="section-wrapper">
		<Chip chipText="our skills" chipIcon="verified" chipColor="yellow" />

		<div class="cards-wrapper">
			{#each $skills as skill}
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

				@include minWidth("desktop") {
					grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
					gap: rem(64);
				}

				.skill-card {
					display: flex;
					flex-direction: column;
					align-items: center;
					gap: 16px;
					border-radius: 16px;
					padding: 20px;
					box-shadow: $shadow-soft;

					$colors: greenShade, blueShade, redShade, yellowShade;

					// prettier-ignore
					@for $i from 1 through 100 {
						$group: ceil($i / 4);
						$position: $i % 4;
						@if $position == 0 { $position: 4 }
						$color-index: if($group % 2 == 0, 5 - $position, $position);

						&:nth-child(#{$i}) {
							@if $color-index == 1 { @include greenShade;
							} @else if $color-index == 2 { @include blueShade;
							} @else if $color-index == 3 { @include redShade;
							} @else if $color-index == 4 { @include yellowShade }
						}
					}

					.material-symbols-sharp {
						font-size: $h1;
						font-weight: $medium;
					}

					.title {
						font-size: $h6;
						font-weight: $medium;
						text-align: center;

						@include minWidth("tablet") {
							font-size: $h5;
						}
					}
				}
			}
		}
	}
</style>
