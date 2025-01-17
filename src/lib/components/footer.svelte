<footer>
	<div class="footer-wrapper">
		<p class="copyright">
			© {new Date().getFullYear()} berikids. All rights reserved.
		</p>
	</div>
</footer>

<style lang="scss">
	footer {
		padding: rem(64) rem(20);
		background-color: $secondary;

		.footer-wrapper {
			max-width: $max-width;
			margin-inline: auto;

			.copyright {
				text-align: center;
				font-size: $small;

				@include minWidth("tablet") {
					font-size: $regular;
				}
			}
		}
	}
</style>
