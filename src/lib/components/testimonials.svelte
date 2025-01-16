<!-- prettier-ignore -->
<script lang="ts">
	import Chip from "./chip.svelte"

	export let authorName = "Valery Ayuni"
	export let authorAvatar = "/images/testimony-dp.webp"
	export let testimonial = "I'm one of the first orphans to be educated and empowered by Berikids International and its partners. I'm grateful for their support and guidance."
	export let authorTitle = "Chief of post @berikids intl mental health unit Nkapa Souza Douala Cameroon."
</script>

<section class="testimonialsSection">
	<div class="testimony-wrapper">
		<Chip chipText="Testimony" chipIcon="mic" chipColor="red" />

		<article class="testimony-card">
			<h2 class="testimony">{testimonial}</h2>

			<div class="avatar">
				<div class="avatar-border"></div>
				<img src={authorAvatar} alt="avatar" />
			</div>

			<h4 class="author-name">{authorName}</h4>
			<p class="author-title">{authorTitle}</p>
		</article>
	</div>
</section>

<style lang="scss">
	.testimonialsSection {
		padding: 32px 20px;

		.testimony-wrapper {
			max-width: 1440px;
			margin-inline: auto;

			.testimony-card {
				display: flex;
				flex-direction: column;
				align-items: center;
				margin-block-start: 32px;
				padding-block: 32px;
				gap: 16px;

				.testimony {
					margin-inline: auto;
					text-align: center;
					font-size: 24px;
					font-weight: 400;
					line-height: 32px;
					opacity: 0.8;
					padding: 20px;
					border-radius: 16px;

					@media (min-width: 768px) {
						max-width: 60%;
					}
				}

				.avatar {
					width: 150px;
					height: 150px;
					border-radius: 50%;
					position: relative;
					display: grid;
					place-items: center;

					@media (min-width: 768px) {
						width: 200px;
						height: 200px;
					}

					img {
						width: 100%;
						height: 100%;
						border-radius: inherit;
						object-fit: cover;
					}

					.avatar-border {
						position: absolute;
						width: 110%;
						height: 110%;
						border-radius: 50%;
						border: 4px dashed #6faf64;
						animation: rotate 100s linear infinite;

						@media (min-width: 768px) {
							border: 8px dashed #6faf64;
						}

						@keyframes rotate {
							from {
								transform: rotate(0deg);
							}
							to {
								transform: rotate(360deg);
							}
						}
					}
				}

				.author-name {
					font-size: 24px;
					font-weight: 600;
					line-height: 32px;
				}

				.author-title {
					font-size: 18px;
					line-height: 24px;
					text-align: center;
					opacity: 0.5;

					@media (min-width: 768px) {
						max-width: 40%;
					}
				}
			}
		}
	}
</style>
