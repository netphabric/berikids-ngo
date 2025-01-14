<script lang="ts">
	export let chipText: string
	export let chipIcon: string
	export let chipColor: "red" | "blue" | "green"
</script>

<h4
	class="content-chip"
	class:bgGreen={chipColor === "green"}
	class:bgBlue={chipColor === "blue"}
	class:bgRed={chipColor === "red"}
>
	<span class="material-symbols-sharp"> {chipIcon} </span>
	<span class="chip-text">{chipText}</span>
</h4>

<style lang="scss">
	@use "sass:color";

	.content-chip {
		width: max-content;
		display: flex;
		align-items: center;
		padding: 8px 16px;
		border-radius: 16px;
		gap: 8px;

		&.bgGreen {
			color: green;
			background-color: color.adjust(green, $lightness: 65);
		}

		&.bgBlue {
			color: deepskyblue;
			background-color: color.adjust(lightblue, $lightness: 5);
		}

		&.bgRed {
			color: orangered;
			background-color: color.adjust(orangered, $lightness: 40);
		}

		img {
			width: 20px;
			height: 20px;
		}
	}
</style>
