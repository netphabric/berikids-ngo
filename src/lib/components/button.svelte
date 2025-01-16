<script lang="ts">
	export let primary = false
	export let secondary = false
	export let onWhite = false
</script>

<button class:primary class:secondary class:onWhite>
	<slot />
</button>

<style lang="scss">
	$black: #4e2c14;
	$white: #f2f2f2;
	$accent: #6faf64;
	$primary: #2b4f81;
	$secondary: #ffd966;

	button {
		min-width: fit-content;
		border: 1px solid transparent;
		display: flex;
		align-items: center;
		border-radius: 8px;
		padding: 8px 16px;
		gap: 8px;

		color: $white;
		cursor: pointer;
		font-weight: 600;
		text-transform: capitalize;
		font-family: "Montserrat", sans-serif;
		transition: all 0.3s ease-in-out;
		transition: all 0.3s;
		background-color: $accent;
		box-shadow:
			6px 6px 12px #c5c5c5,
			-6px -6px 12px #ffffff;

		&:active {
			box-shadow:
				inset 4px 4px 12px #c5c5c5,
				inset -4px -4px 12px #ffffff;
		}

		&:hover {
			color: $accent;
			background-color: transparent;
		}
	}
</style>
