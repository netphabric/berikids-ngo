<!-- prettier-ignore -->
<script lang="ts">
	import Chip from "./chip.svelte"

	export let authorName = "Valery Ayuni"
	export let authorAvatar = "/images/testimony-dp.webp"
	export let testimonial = " one of the first orphans educated and empowered by Berikids International and its partners. I currently work as the chief of the Berikids International mental health unit in Nkapa Souza, Douala, Cameroon. I am grateful to Berikids International and its partners, "
	export let authorTitle = "Chief of post @berikids international mental health unit Nkapa Souza Douala Cameroon."
</script>

<section class="testimonialsSection">
	<div class="testimony-wrapper">
		<Chip chipText="Testimony" chipIcon="mic" chipColor="red" />

		<article class="testimony-card">
			<div class="avatar">
				<div class="avatar-border"></div>
				<img src={authorAvatar} alt="avatar" />
			</div>

			<h4 class="author-name">{authorName}</h4>
			<p class="author-title">{authorTitle}</p>
			<h2 class="testimony">{testimonial}</h2>
		</article>
	</div>
</section>

<style lang="scss">
	.testimonialsSection {
		padding-block: 32px;

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
					max-width: 70%;
					margin-inline: auto;
					text-align: center;
					font-size: 24px;
					font-weight: 400;
					line-height: 32px;
					opacity: 0.8;
					padding: 20px;
					border-radius: 16px;
					box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
				}

				.avatar {
					width: 200px;
					height: 200px;
					border-radius: 50%;
					position: relative;
					display: grid;
					place-items: center;

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
						border: 8px dashed #6faf64;
						animation: rotate 100s linear infinite;

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
					font-weight: 500;
					line-height: 24px;
					opacity: 0.8;
				}
			}
		}
	}
</style>
