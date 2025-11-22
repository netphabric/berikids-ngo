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
		border-radius: rem(4);
		box-shadow: $shadow-hard;
		border: rem(1) solid $gray;
		gap: rem(8);

		.chip-text {
			font-size: $tiny;
			font-weight: $normal;

			@include minWidth("tablet") {
				font-size: $small;
			}
		}
	}
</style>
