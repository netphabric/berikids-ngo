<script lang="ts">
	import style from "./button.module.scss"
	export let primary = false
</script>

<button class={`${primary && style.primary}`}>
	<slot />
</button>
