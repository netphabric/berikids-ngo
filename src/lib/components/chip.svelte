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
	@use "sass:color";

	$green: #6faf64;
	$blue: #2b4f81;
	$yellow: #ffd966;
	$red: #f44336;

	.content-chip {
		width: max-content;
		display: flex;
		align-items: center;
		padding: 8px 16px;
		border-radius: 16px;
		gap: 8px;

		&.bgGreen {
			color: color.adjust($green, $lightness: -20%);
			background-color: color.adjust($green, $lightness: 35%);
		}

		&.bgBlue {
			color: color.adjust($blue, $lightness: -5%);
			background-color: color.adjust($blue, $lightness: 55%);
		}

		&.bgRed {
			color: color.adjust($red, $lightness: -20%);
			background-color: color.adjust($red, $lightness: 35%);
		}

		&.bgYellow {
			color: color.adjust($yellow, $lightness: -40%);
			background-color: color.adjust($yellow, $lightness: 20%);
		}
	}
</style>
