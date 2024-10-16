<script lang="ts">
	import styles from "./button.module.scss"

	export let primary = false
	export let onWhite = false
</script>

<button class={`${primary && styles.primary} ${onWhite && styles.onWhite}`}>
	<slot />
</button>
