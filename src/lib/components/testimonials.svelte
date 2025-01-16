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
		background-size: 30px 30px;
		background-image: linear-gradient(to right, #6faf6420 1px, transparent 1px);

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
					text-align: center;
					font-size: 16px;
					font-weight: 500;
					opacity: 0.8;
					color: #2b4f81;
					position: relative;

					&::before,
					&::after {
						position: absolute;
						font-size: 50px;
						font-weight: 600;
						line-height: 40px;
						opacity: 0.2;
					}

					&::before {
						content: "“";
						top: 0;
						left: 0;
					}

					&::after {
						content: "”";
						bottom: 0;
						right: 0;
					}

					@media (min-width: 768px) {
						max-width: 60%;
						margin-inline: auto;
						font-size: 20px;
						line-height: 32px;

						&::before,
						&::after {
							font-size: 70px;
						}
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
					font-size: 16px;
					font-weight: 600;
					line-height: 32px;

					@media (min-width: 768px) {
						font-size: 18px;
					}
				}

				.author-title {
					font-size: 14px;
					line-height: 24px;
					text-align: center;
					opacity: 0.5;

					@media (min-width: 768px) {
						max-width: 40%;
						font-size: 16px;
					}
				}
			}
		}
	}
</style>
