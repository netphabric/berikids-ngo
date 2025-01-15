<script lang="ts">
	import { toasts } from "$lib/stores/toasts"
	import { fade } from "svelte/transition"
	import styles from "./toast.module.scss"

	const removeToast = (id: number) => {
		$toasts = $toasts.filter((toast) => toast.id !== id)
	}

	const renderIcon = (type: string) => {
		switch (type) {
			case "success":
				return "check_circle"

			case "error":
				return "error"

			case "warning":
				return "warning"

			case "info":
				return "info"
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

<div class={styles.toastContainer} transition:fade={{ duration: 500, delay: 300 }}>
	{#each $toasts as toast}
		<button class={`${styles.toast} ${styles[toast.type]}`} on:click={() => removeToast(toast.id)}>
			<span class="material-symbols-sharp"> {renderIcon(toast.type)}</span>
			{toast.message}
		</button>
	{/each}
</div>
