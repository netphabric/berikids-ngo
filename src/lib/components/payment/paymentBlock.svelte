<script lang="ts">
	import Chip from "$lib/components/chip.svelte"

	export let chipIcon = "help"
	export let statusIcon = "barefoot"
	export let chipText = "help support our cause"
	export let chipColor: "red" | "green" | "blue" | "yellow" = "blue"
	export let statusColor: "red" | "green" = "green"
	export let statusMessage = ""
</script>

<main class="donate-root">
	<div class="donations-wrapper">
		<div class="banner-left">
			<Chip {chipIcon} {chipColor} {chipText} />

			<span
				class="material-symbols-sharp org-icon"
				class:statusCheck={statusColor === "green"}
				class:statusError={statusColor === "red"}>{statusIcon}</span
			>
			<p
				class="status-message"
				class:success={statusColor === "green"}
				class:error={statusColor === "red"}
			>
				{statusMessage}
			</p>
		</div>

		<slot />
	</div>
</main>

<style lang="scss">
	.donate-root {
		min-height: calc(100vh - rem(260));
		padding-inline: rem(20);

		.donations-wrapper {
			flex-grow: 1;
			max-width: $max-width;
			display: flex;
			flex-direction: column;
			padding-block: rem(20);

			@include minWidth("tablet") {
				margin-inline: auto;
				padding-block: 0;
				flex-direction: row;
				align-items: center;
				justify-content: center;
				gap: rem(32);
			}

			.banner-left {
				width: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;
				grid-area: banner-left;

				@include minWidth("tablet") {
					gap: rem(32);
					padding: rem(20);
					width: 40%;
				}

				.org-icon {
					width: 100%;
					font-weight: 100;
					font-size: rem(200);
					display: grid;
					place-content: center;
					color: $accent;

					&.statusCheck {
						color: $accent;
					}

					&.statusError {
						color: $error;
					}

					@include minWidth("tablet") {
						font-size: rem(400);
					}
				}

				.status-message {
					font-size: $large;
					font-family: $logo-font;
					text-align: center;

					&.error {
						color: $error;
					}
					&.success {
						color: $accent;
					}

					@include minWidth("tablet") {
						font-size: $h4;
					}
					@include minWidth("desktop") {
						font-size: $h3;
					}
				}
			}
		}
	}
</style>
