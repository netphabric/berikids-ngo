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
		padding: rem(32) rem(20);
		background-color: $secondary;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23cea93b' fill-opacity='0.49'%3E%3Cpath fill-rule='evenodd' d='M11 0l5 20H6l5-20zm42 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM0 72h40v4H0v-4zm0-8h31v4H0v-4zm20-16h20v4H20v-4zM0 56h40v4H0v-4zm63-25a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM53 41a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-30 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-28-8a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zM56 5a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zm-3 46a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 0l5 20H16l5-20zm43 64v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zM36 13h4v4h-4v-4zm4 4h4v4h-4v-4zm-4 4h4v4h-4v-4zm8-8h4v4h-4v-4z'/%3E%3C/g%3E%3C/svg%3E");

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
