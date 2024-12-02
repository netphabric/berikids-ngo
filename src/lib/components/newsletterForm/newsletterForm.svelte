<script lang="ts">
	import Button from "$lib/components/button/button.svelte"
	import { highlightText } from "utils/textHightlight"
	import styles from "./newsletterForm.module.scss"

	export let title = ""
	export let titleHighlight = ""
	export let desc = ""
	export let noticeText = ""
	export let btnText = ""

	export let largeTitle = false
</script>

<form class={styles.newsLetterForm} id="newsletter">
	{#if largeTitle}
		<h2 class={styles.title}>
			{#each highlightText(title, titleHighlight) as word}
				{#if word.isHighlighted}
					<span class={styles.highlight}>{word.text}</span>{" "}
				{:else}
					{word.text}{" "}
				{/if}
			{/each}
		</h2>
	{:else}
		<h6>{title}</h6>
	{/if}
	<p>{desc}</p>

	<div class={styles.inputContainer}>
		<input placeholder="Your Email Here" />
		<Button secondary onWhite>{btnText}</Button>
	</div>

	<span>{noticeText}</span>
</form>
