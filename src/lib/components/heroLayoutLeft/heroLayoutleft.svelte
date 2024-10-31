<script lang="ts">
	import { highlightText } from "utils/textHightlight"
	import styles from "./heroLayoutleft.module.scss"

	export let title = ""
	export let titleHighlight = ""
	export let sectionImage = "as1.webp"
	export let desc = ""

	export let bgVideo = ""
</script>

<section
	class={`${styles.hero} ${bgVideo && styles.bgVideo}`}
	style="background-image:linear-gradient(rgba(0, 0, 0, 0.88), rgba(0, 0, 0, 0.88)), url(/images/{sectionImage})"
>
	{#if bgVideo}
		<video muted autoplay loop disablepictureinpicture>
			<source src="/{bgVideo}" type="video/mp4" />
		</video>
	{/if}

	<div class={styles.sectionContent}>
		<h1 class={styles.title}>
			{#each highlightText(title, titleHighlight) as word}
				{#if word.isHighlighted}
					<span class={styles.highlight}>{word.text}</span>{" "}
				{:else}
					{word.text}{" "}
				{/if}
			{/each}
		</h1>

		<p class={styles.desc}>{desc}</p>
	</div>
</section>
