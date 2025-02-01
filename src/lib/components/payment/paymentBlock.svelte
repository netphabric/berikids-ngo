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
				class="success-message"
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
		padding-inline: rem(20);
		min-height: 85vh;

		.donations-wrapper {
			width: 100%;
			max-width: $max-width;
			margin-inline: auto;
			display: flex;
			flex-direction: column;
			padding-block: rem(20);
			gap: rem(32);

			@include minWidth("tablet") {
				padding-block: 0;
				flex-direction: row;
				align-items: flex-start;
				justify-content: center;
			}

			// prettier-ignore
			.banner-left {
				width: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;
				grid-area: banner-left;
				gap: rem(32);

				@include minWidth("tablet") {
					padding: rem(20);
					width: 40%;
				}

				.org-icon {
					font-size: rem(150);
					font-weight: 100;
					color: $accent;
					margin-block: auto;

					&.statusCheck { color: $accent; }
          &.statusError { color: $error; }

					@include minWidth("tablet") { font-size: rem(200) }
          @include minWidth("desktop") { font-size: rem(300) }
				}

				.success-message {
					font-size: $large;
					font-family: $logo-font;
					text-align: center;

          &.error { color: $error; }
          &.success { color: $accent; }

					@include minWidth("tablet") { font-size: $h4 }
          @include minWidth("desktop") { font-size: $h3 }
				}
			}
		}
	}
</style>
