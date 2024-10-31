<script lang="ts">
	import { scrollReveal } from "$lib/actions/scrollReveal"
	import styles from "./page.module.scss"

	const masonData = [
		"https://i.pinimg.com/736x/b6/69/9a/b6699a7327839e77adab9e6df1950f22.jpg",
		"https://i.pinimg.com/564x/d8/84/0a/d8840a15183567e30a32f58178a9585e.jpg",
		"https://i.pinimg.com/736x/63/06/8d/63068d2745d2935562f6cea91a274b1e.jpg",
		"https://i.pinimg.com/564x/15/58/07/155807df345967ef250d9af54119324e.jpg",
		"https://i.pinimg.com/564x/11/db/ff/11dbff5cf4a8df881d5b58c70f62419f.jpg",
		"https://i.pinimg.com/564x/7f/ef/b0/7fefb094ae9af1b304bb2acbf2c64967.jpg",
		"https://i.pinimg.com/564x/99/f4/85/99f4856cbf237f0b36d105d0be075914.jpg",
		"https://i.pinimg.com/564x/e9/05/38/e905387606ae9889e7cd1f6c46f227ea.jpg",
		"https://i.pinimg.com/564x/d8/84/0a/d8840a15183567e30a32f58178a9585e.jpg",
		"https://i.pinimg.com/736x/63/06/8d/63068d2745d2935562f6cea91a274b1e.jpg",
		"https://i.pinimg.com/564x/11/db/ff/11dbff5cf4a8df881d5b58c70f62419f.jpg",
		"https://i.pinimg.com/564x/7f/ef/b0/7fefb094ae9af1b304bb2acbf2c64967.jpg",
		"https://i.pinimg.com/564x/e9/05/38/e905387606ae9889e7cd1f6c46f227ea.jpg"
	]
</script>

<section class={styles.root}>
	<p>gallery sample</p>
	{#each masonData as img}
		<div class={styles.masonItem} class:reveal={true} use:scrollReveal>
			<img src={img} alt="mason img" />
		</div>
	{/each}
</section>
