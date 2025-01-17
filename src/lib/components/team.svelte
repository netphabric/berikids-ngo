<script>
	import { teams } from "$lib/stores/about"
	import Chip from "./chip.svelte"
</script>

<section class="our-team">
	<div class="team-wrapper">
		<Chip chipText="the people behind" chipIcon="group" chipColor="red" />

		<div class="header">
			<h2 class="title">our team</h2>
			<p class="desc">dedicated professionals committed to making a difference.</p>
		</div>

		<div class="teams">
			{#each $teams as team}
				<article class="member-card">
					<div class="imageContainer">
						<img src={team.profile} alt="profile" />
					</div>

					<div class="content">
						<div class="member-details">
							<h3 class="title">{team.name}</h3>
							<p class="sub-title">{team.role}</p>
						</div>

						<div class="member-socials"></div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	.our-team {
		padding: rem(32) rem(20);

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
					opacity: 0.6;

					@include minWidth("tablet") {
						font-size: $medium;
						line-height: rem(24);
					}

					@include minWidth("desktop") {
						font-size: $large;
						line-height: rem(32);
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

				.member-card {
					padding: rem(5);
					display: flex;
					flex-direction: column;
					border-radius: rem(8);
					box-shadow: $shadow-soft;
					gap: rem(16);

					@include minWidth("tablet") {
						padding: rem(16);
					}

					.imageContainer {
						width: 100%;
						height: rem(150);
						overflow: hidden;
						border-radius: rem(8);

						@include minWidth("tablet") {
							height: rem(250);
						}

						img {
							width: 100%;
							height: 100%;
							object-fit: cover;
						}
					}

					.content {
						.member-details {
							display: flex;
							flex-direction: column;

							.title {
								font-size: $small;
								font-weight: $semiBold;

								@include minWidth("tablet") {
									font-size: $regular;
								}

								@include minWidth("desktop") {
									font-size: $medium;
								}
							}

							.sub-title {
								font-size: $tiny;
								font-weight: $normal;
								opacity: 0.6;

								@include minWidth("tablet") {
									font-size: $small;
								}

								@include minWidth("desktop") {
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
