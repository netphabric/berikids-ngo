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
		background-color: $secondary;
		border: 1px solid $secondary;
		display: flex;
		align-items: center;
		border-radius: 8px;
		padding: 8px 16px;
		gap: 8px;

		color: $black;
		cursor: pointer;
		font-weight: 600;
		text-transform: capitalize;
		font-family: "Montserrat", sans-serif;
		transition: all 0.3s ease-in-out;

		&.primary {
			border: 1px solid $black;
			background-color: transparent;
		}

		&.secondary {
			color: $white;
			border: 1px solid $accent;
			background-color: $accent;
		}

		&.onWhite {
			&:hover {
				color: $accent;
				background-color: transparent;
				border: 1px solid $accent;
			}

			&:active {
				color: $secondary;
				border: 1px solid $secondary;
			}
		}

		&:hover {
			color: $secondary;
			background-color: transparent;
			border: 1px solid $secondary;
		}
	}
</style>
