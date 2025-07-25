<footer>
	<div class="footer-wrapper">
		<div>
			<p class="developers">
				<span> Developed by the folks at </span>
				<a
					target="_blank"
					href="https://www.linkedin.com/company/netphabric"
					rel="noopener noreferrer"
				>
					<img src="/images/icons/netphabric.png" alt="netphabric-logo" />
				</a>
			</p>
		</div>

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
			flex-direction: column-reverse;
			justify-content: space-between;
			align-items: center;
			gap: rem(16);

			@include minWidth("mobile") {
				flex-direction: unset;
			}

			.developers {
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				align-items: center;
				margin: 0;
				gap: rem(12);

				img {
					max-width: 150px;
				}

				@include minWidth("mobile") {
					justify-content: flex-start;
				}
			}

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
