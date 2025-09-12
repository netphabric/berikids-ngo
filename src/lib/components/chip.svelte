<script lang="ts">
	export let chipText: string
	export let chipIcon: string
	export let chipColor: "red" | "blue" | "green" | "yellow"
</script>

<h4
	class="content-chip"
	class:bgGreen={chipColor === "green"}
	class:bgBlue={chipColor === "blue"}
	class:bgRed={chipColor === "red"}
	class:bgYellow={chipColor === "yellow"}
>
	<span class="material-symbols-sharp"> {chipIcon} </span>
	<span class="chip-text">{chipText}</span>
</h4>

<style lang="scss">
	.content-chip {
		width: max-content;
		display: flex;
		align-items: center;
		padding: rem(8);
		border-radius: 0 rem(4) rem(4) 0;
		box-shadow: $shadow-hard;
		gap: rem(8);

		&.bgGreen {
			border: 1px solid $accent;
			@include greenShade;
		}

		&.bgBlue {
			border: 1px solid $primary;
			@include blueShade;
		}

		&.bgRed {
			border: 1px solid $error;
			@include redShade;
		}

		&.bgYellow {
			border: 1px solid $secondary;
			@include yellowShade;
		}

		.chip-text {
			font-size: $tiny;
			font-weight: $semiBold;

			@include minWidth("tablet") {
				font-size: $small;
			}

			@include minWidth("desktop") {
				font-size: $regular;
			}
		}
	}
</style>
