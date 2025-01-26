<script>
	import { partners } from "$lib/stores/about"
	import Chip from "./chip.svelte"
</script>

<section class="partners">
	<div class="partners-wrapper">
		<Chip chipText="our partners" chipIcon="verified" chipColor="red" />

		<div class="partner-cards">
			{#each $partners as partner}
				<article class="partner-card">
					<span class="material-symbols-sharp verified">verified</span>
					<h4 class="title">{partner.name}</h4>

					<partner class="text">
						<span class="material-symbols-sharp location-icon">globe</span>
						<span>{partner.location}</span>
					</partner>
				</article>
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	.partners {
		padding: rem(32) rem(20);
	}

	.partners-wrapper {
		max-width: $max-width;
		margin-inline: auto;
		display: flex;
		flex-direction: column;
		gap: rem(32);

		.partner-cards {
			display: grid;
			margin-block-start: rem(32);
			grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
			gap: rem(32);

			@include minWidth("tablet") {
				grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
			}

			.partner-card {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				border-radius: rem(16);
				padding: rem(16);
				gap: rem(16);
				color: $white;
				background-color: $primary;
				box-shadow: $shadow-hard;
				position: relative;
				overflow: hidden;
				z-index: 0;

				.verified {
					font-size: $h3;
					color: $secondary;
				}

				.title {
					font-size: $small;
					font-weight: $semiBold;
					text-transform: uppercase;
					line-height: rem(24);

					@include minWidth("tablet") {
						font-size: $regular;
						line-height: rem(32);
					}
				}

				.text {
					width: 100%;
					font-size: $small;
					font-weight: $normal;
					line-height: rem(24);
					opacity: 0.8;
					display: flex;
					gap: 8px;

					.location-icon {
						color: $secondary;
						position: absolute;
						font-size: rem(250);
						line-height: 0;
						z-index: 1;
						opacity: 0.1;
						left: 60%;
						top: 50%;
					}

					@include minWidth("tablet") {
						font-size: $regular;
					}
				}
			}
		}
	}
</style>
