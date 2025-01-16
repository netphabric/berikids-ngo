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
		padding: 32px;

		.team-wrapper {
			max-width: 1440px;
			margin-inline: auto;
			display: flex;
			flex-direction: column;
			gap: 32px;

			.header {
				display: flex;
				margin-block: 32px;
				flex-direction: column;
				gap: 16px;

				.title {
					font-size: 52px;
					font-weight: 500;
					line-height: 40px;
				}

				.desc {
					font-size: 18px;
					font-weight: 400;
					line-height: 32px;
					opacity: 0.6;
				}
			}

			.teams {
				display: grid;
				grid-template-columns: repeat(4, 1fr);
				gap: 32px;

				.member-card {
					padding: 20px;
					display: flex;
					flex-direction: column;
					border-radius: 16px;
					gap: 16px;
					box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

					.imageContainer {
						width: 100%;
						height: 300px;
						overflow: hidden;
						border-radius: 16px;

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
							gap: 8px;

							.title {
								font-size: 24px;
								font-weight: 500;
							}

							.sub-title {
								font-size: 18px;
								font-weight: 400;
								opacity: 0.6;
							}
						}
					}
				}
			}
		}
	}
</style>
