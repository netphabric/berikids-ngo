<script lang="ts">
	export let primary = false
	export let secondary = false
	export let onWhite = false
	export let onClick = () => {}
	export let props = {}
</script>

<button class:primary class:secondary class:onWhite {...props} on:click={onClick}>
	<slot />
</button>

<style lang="scss">
	button {
		min-width: fit-content;
		border: 1px solid transparent;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: rem(8);
		padding: rem(8) rem(16);
		gap: rem(8);

		color: $white;
		cursor: pointer;
		font-size: $small;
		font-weight: $semiBold;
		text-transform: capitalize;
		transition: all 0.3s ease-in-out;
		background-color: $accent;
		box-shadow: $shadow-outset;

		&:active {
			box-shadow: $shadow-inset;
		}

		&:hover {
			color: $accent;
			background-color: transparent;
		}

		&.secondary {
			color: $accent;
			background-color: transparent;
			border: 1px solid $accent;
		}

		&.onWhite {
			color: $primary;
			background-color: $white;
		}

		@include minWidth("tablet") {
			font-size: $regular;
		}

		@include minWidth("desktop") {
			font-size: $large;
		}
	}
</style>
