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
					<h4 class="title">
						<span class="material-symbols-sharp verified">verified</span>
						{partner.name}
					</h4>

					<div class="text">
						{#if partner.phone}
							<span class="phone">
								<span class="material-symbols-sharp location-icon">perm_phone_msg</span>
								{partner.phone}</span
							>
						{/if}

						{#if partner.email}
							<span class="email">
								<span class="material-symbols-sharp location-icon">alternate_email</span>
								{partner.email}</span
							>
						{/if}

						{#if partner.web}
							<span class="web">
								<span class="material-symbols-sharp location-icon">web_traffic</span>
								<a href={partner.web} target="_blank"
									>{partner.name.split(" ").slice(0, 2).join(" ")}'s website</a
								></span
							>
						{/if}

						<span class="location">
							<span class="material-symbols-sharp location-icon">signpost</span>
							{partner.location}</span
						>
					</div>
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
				grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
			}

			.partner-card {
				display: flex;
				flex-direction: column;
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
					line-height: rem(24);
					text-transform: none;
					display: flex;
					align-items: center;
					gap: rem(8);

					@include minWidth("tablet") {
						font-size: $regular;
						line-height: rem(32);
					}
				}

				.text {
					width: 100%;
					min-height: 50px;
					font-weight: $normal;
					font-family: $logo-font;
					letter-spacing: 1px;
					line-height: rem(24);
					opacity: 0.8;

					gap: rem(16);
					display: flex;
					flex-direction: column;

					@include minWidth("tablet") {
						font-size: $medium;
					}

					.web,
					.location,
					.email,
					.phone {
						display: flex;
						padding-inline-end: rem(16);
						gap: rem(8);
						border-bottom: 1px solid color.adjust($primary, $lightness: 10%);
					}

					.web {
						color: $secondary;
					}

					.location-icon {
						color: color.adjust($accent, $lightness: 10%);
					}
				}
			}
		}
	}
</style>
