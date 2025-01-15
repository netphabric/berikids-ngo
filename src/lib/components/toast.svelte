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
	@use "sass:color";

	$green: #6faf64;
	$blue: #2b4f81;
	$yellow: #ffd966;
	$red: #f44336;

	.toast-container {
		position: fixed;
		bottom: 32px;
		left: 32px;
		margin-inline: auto;
		display: flex;
		flex-direction: column;
		z-index: 1000;
		gap: 16px;
		transition: all 0.3s ease-in-out;

		.toast {
			min-height: 50px;
			width: max-content;
			display: flex;
			align-items: center;
			gap: 0.5rem;
			padding: 8px 16px;
			border-radius: 16px;
			cursor: pointer;
			border: none;
			font-size: 24px;
			text-transform: capitalize;
			transition: all 0.3s ease-in-out;

			.material-symbols-sharp {
				font-size: 24px;
			}

			&.info {
				color: color.adjust($blue, $lightness: -5%);
				background-color: color.adjust($blue, $lightness: 55%);
			}

			&.success {
				color: color.adjust($green, $lightness: -20%);
				background-color: color.adjust($green, $lightness: 35%);
			}

			&.error {
				color: color.adjust($red, $lightness: -20%);
				background-color: color.adjust($red, $lightness: 35%);
			}

			span {
				font-size: 0.9rem;
			}
		}
	}
</style>
