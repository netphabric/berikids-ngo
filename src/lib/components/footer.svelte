<footer>
	<div class="footer-wrapper">
		<a
			target="_blank"
			href="https://www.linkedin.com/in/abanseka-sylvester/"
			rel="noopener noreferrer"
		>
			<span class="material-symbols-sharp">fingerprint</span>
			built by abanseka</a
		>

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
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			align-items: center;
			gap: rem(32);

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
