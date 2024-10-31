<script lang="ts">
	import { scrollReveal } from "$lib/actions/scrollReveal"
	import styles from "./sectionWrapper.module.scss"

	export let className = ""
	export let isFlipped = false
</script>

<section
	class:reveal={true}
	use:scrollReveal
	class={`${className && className}
    ${styles.sectionWrapper}
    ${isFlipped && styles.isFlipped}`}
>
	<slot />
</section>
