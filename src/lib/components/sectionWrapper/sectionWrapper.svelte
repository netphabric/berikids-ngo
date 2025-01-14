<script lang="ts">
	import styles from "./sectionWrapper.module.scss"

	export let className = ""
	export let isFlipped = false
</script>

<section
	class={`${className && className}
    ${styles.sectionWrapper}
    ${isFlipped && styles.isFlipped}`}
>
	<slot />
</section>
