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
						<span class="material-symbols-sharp">share_location</span>
						<span>{partner.location}</span>
					</partner>
				</article>
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	.partners {
		padding: 32px;
	}

	.partners-wrapper {
		max-width: 1440px;
		margin-inline: auto;
		display: flex;
		flex-direction: column;
		gap: 32px;

		.partner-cards {
			display: grid;
			margin-block-start: 32px;
			grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
			gap: 32px;

			.partner-card {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				border-radius: 16px;
				padding: 20px;
				gap: 16px;
				color: white;
				background-color: #2b4f81;
				box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

				.verified {
					font-size: 52px;
					color: #ffd966;
				}

				.title {
					font-size: 18px;
					font-weight: 500;
					line-height: 32px;
					text-transform: uppercase;
				}

				.text {
					font-size: 16px;
					font-weight: 400;
					line-height: 24px;
					opacity: 0.6;
					display: flex;
					align-items: center;
					gap: 8px;
				}
			}
		}
	}
</style>
