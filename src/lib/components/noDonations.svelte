<div class="no-donations-root">
	<h1 class="no-donations">
		<span class="material-symbols-sharp no-donations-icon">volunteer_activism</span>
		<span> Sorry, we're not accepting donations at the moment. </span>
	</h1>

	<p class="no-donations-message">
		We truly appreciate your generosity. If you'd like to support us in other ways or have any
		questions, feel free to reach out through our <a href="/contact">contact page.</a>
	</p>
</div>

<style lang="scss">
	.no-donations-root {
		display: flex;
		flex-direction: column;
		justify-content: center;
		border-radius: rem(16);
		align-items: center;
		padding: rem(20);
		gap: rem(16);
		@include greenShade();

		@include minWidth("tablet") {
			min-height: 75vh;
		}

		.no-donations {
			text-align: center;
			font-family: $logo-font;
			font-size: $h6;

			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: rem(16);

			@include minWidth("tablet") {
				font-size: $h4;
			}

			@include minWidth("desktop") {
				font-size: $h3;
			}

			.no-donations-icon {
				font-size: rem(48);
				@include minWidth("tablet") {
					font-size: rem(64);
				}
			}
		}

		.no-donations-message {
			max-width: 600px;
			text-align: center;
			font-size: $small;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;

			@include minWidth("tablet") {
				font-size: $regular;
			}

			a {
				font-weight: $semiBold;
				text-decoration: underline;
			}
		}
	}
</style>
