<script lang="ts">
	import { toasts } from "$lib/stores/toasts"
	import { fade } from "svelte/transition"

	const removeToast = (id: number) => {
		$toasts = $toasts.filter((toast) => toast.id !== id)
	}

	// prettier-ignore
	const renderIcon = (type: string) => {
		switch (type) {
			case "success": return "check_circle"
			case "error": return "error"
      case "warning": return "warning"
			case "info": return "info"
		}
	}

	$: {
		$toasts.forEach(({ id, duration }) => {
			setTimeout(() => {
				removeToast(id)
			}, duration)
		})
	}
</script>

<div class="toast-container" transition:fade={{ duration: 500, delay: 300 }}>
	{#each $toasts as toast}
		<button
			class="toast"
			class:success={toast.type === "success"}
			class:error={toast.type === "error"}
			class:warning={toast.type === "warning"}
			class:info={toast.type === "info"}
			on:click={() => removeToast(toast.id)}
		>
			<span class="material-symbols-sharp">{renderIcon(toast.type)}</span>
			<span>{toast.message}</span>
		</button>
	{/each}
</div>

<style lang="scss">
	.toast-container {
		display: flex;
		flex-direction: column;
		gap: rem(16);
		z-index: 1000;
		position: fixed;
		bottom: rem(32);
		left: rem(32);
		margin-inline: auto;
		transition: all 0.3s ease-in-out;

		.toast {
			min-height: rem(50);
			width: max-content;
			display: flex;
			align-items: center;
			gap: rem(8);
			padding: rem(8) rem(16);
			border-radius: rem(8);
			cursor: pointer;
			border: none;
			font-size: $small;
			text-transform: capitalize;
			transition: all 0.3s ease-in-out;

			@include minWidth("tablet") {
				font-size: $regular;
			}

			&.info {
				@include blueShade;
			}

			&.success {
				@include greenShade;
			}

			&.error {
				@include redShade;
			}
		}
	}
</style>
