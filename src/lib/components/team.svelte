<script>
	import { teams } from "$lib/stores/about"
	import Chip from "./chip.svelte"
</script>

<section class="our-team">
	<div class="team-wrapper">
		<Chip chipText="the people behind" chipIcon="group" chipColor="red" />

		<div class="header">
			<h2 class="title">our team</h2>

			<!-- prettier-ignore -->
			<p class="desc">
				in&nbsp<img src="/images/icons/cm.svg" alt="cm" /> cameroon and &nbsp<img src="/images/icons/de.svg" alt="dutch" />
        germany The dedicated professionals behind Fördervereins Stiftung Berikids e.V
			</p>
		</div>

		<div class="teams">
			{#each $teams as team}
				<article class="member-card">
					<div class="imageContainer">
						<img src={team.profile} alt="profile" />
					</div>

					<div class="content">
						<img src={`/images/icons/${team?.location}.svg`} alt="cm" />

						<div class="member-details">
							<h3 class="title">{team.name}</h3>
							<p class="sub-title">{team.role}</p>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	.our-team {
		padding: rem(32) rem(20);
		border-bottom: 1px solid $gray;

		.team-wrapper {
			max-width: $max-width;
			margin-inline: auto;
			display: flex;
			flex-direction: column;
			gap: rem(16);

			@include minWidth("tablet") {
				gap: rem(32);
			}

			.header {
				display: flex;
				margin-block: rem(32);
				flex-direction: column;
				gap: rem(16);

				.title {
					font-size: $h4;
					font-weight: 500;

					@include minWidth("tablet") {
						font-size: $h3;
						line-height: rem(40);
					}

					@include minWidth("desktop") {
						font-size: $h2;
					}
				}

				.desc {
					font-size: $regular;
					font-weight: $normal;
					display: flex;
					flex-wrap: wrap;
					align-items: center;
					opacity: 0.6;

					@include minWidth("tablet") {
						font-size: $medium;
						line-height: rem(24);
					}

					@include minWidth("desktop") {
						font-size: $large;
						line-height: rem(32);
					}

					img {
						width: rem(24);
						height: rem(20);
						display: inline-block;
					}
				}
			}

			.teams {
				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(rem(150), 1fr));
				gap: rem(16);

				@include minWidth("tablet") {
					grid-template-columns: repeat(auto-fit, minmax(rem(250), 1fr));
					gap: rem(32);
				}

				@include minWidth("desktop") {
					grid-template-columns: repeat(auto-fit, minmax(rem(300), 1fr));
					gap: rem(64);
				}

				.member-card {
					position: relative;
					display: grid;
					place-items: center;
					border-radius: rem(8);
					box-shadow: $shadow-soft;
					overflow: hidden;

					.imageContainer {
						width: 100%;
						height: rem(250);
						overflow: hidden;
						border-radius: rem(8);

						@include minWidth("tablet") {
							height: rem(350);
						}

						@include minWidth("desktop") {
							height: rem(400);
						}

						img {
							width: 100%;
							height: 100%;
							object-fit: cover;
						}
					}

					.content {
						position: absolute;
						padding: rem(16);
						color: $white;
						bottom: 0;
						left: 0;
						right: 0;
						background: $bottomFade;

						.member-details {
							display: flex;
							flex-direction: column;

							.title {
								font-size: $small;
								font-weight: $semiBold;

								@include minWidth("tablet") {
									font-size: $large;
								}
							}

							.sub-title {
								color: $secondary;
								font-size: $small;
								font-weight: $semiBold;

								@include minWidth("tablet") {
									font-size: $regular;
								}
							}
						}
					}
				}
			}
		}
	}
</style>
