<script lang="ts">
	import { highlightText } from "utils/textHightlight"
	import SectionWrapper from "../sectionWrapper/sectionWrapper.svelte"
	import styles from "./pageSection.module.scss"
	import Button from "../button/button.svelte"

	export let chip = ""
	export let chipIcon = ""
	export let title = ""
	export let titleHighlight = ""
	export let desc = ""
	export let sectionImage = ""
	export let sectionImageAlt = ""
	export let items: { title: string; icon?: string; desc: string }[] = []

	export let blockListItems: { title: string; desc: string; icon?: string; img?: string }[] = []
	export let blockListCta: { text: string; icon?: string }[] = []
	export let blockHeaderCta: { text: string; icon?: string }[] = []

	export let isBlockLayout = false
	export let isTitleMain = false
	export let hasSubContainer = false
</script>

<SectionWrapper className={styles.section}>
	{#if isTitleMain}
		<div class={styles.sectionContent}>
			<h4 class={styles.chip}>
				<span class="material-symbols-sharp">{chipIcon}</span>
				<span>{chip}</span>
			</h4>

			<h2 class={styles.title}>
				{#each highlightText(title, titleHighlight) as word}
					{#if word.isHighlighted}
						<span class={styles.highlight}>{word.text}</span>{" "}
					{:else}
						{word.text}{" "}
					{/if}
				{/each}
			</h2>
		</div>

		<div class={styles.sectionContent}>
			<p class={styles.desc}>{desc}</p>
		</div>
	{/if}

	{#if sectionImage}
		<div class={styles.sectionContent}>
			<h4 class={styles.chip}>
				<span class="material-symbols-sharp">{chipIcon}</span>
				<span>{chip}</span>
			</h4>

			<h2 class={styles.title}>
				{#each highlightText(title, titleHighlight) as word}
					{#if word.isHighlighted}
						<span class={styles.highlight}>{word.text}</span>{" "}
					{:else}
						{word.text}{" "}
					{/if}
				{/each}
			</h2>

			<p class={styles.desc}>{desc}</p>

			{#if hasSubContainer}
				<div class={styles.subContainer}>
					{#each items as { title, icon, desc }}
						<article class={styles.itemCard}>
							<h3 class={styles.title}>
								{#if icon}
									<span class="material-symbols-sharp">{icon}</span>
								{/if}
								{title}
							</h3>

							<p class={styles.text}>
								{desc}
							</p>
						</article>
					{/each}
				</div>
			{/if}
		</div>

		<div class={styles.sectionImage}>
			<img src="/images/{sectionImage}" alt={sectionImageAlt} />
		</div>
	{/if}

	{#if isBlockLayout}
		<section class={styles.block}>
			<div class={styles.blockHeader}>
				<h4 class={styles.chip}>
					<span class="material-symbols-sharp">{chipIcon}</span>
					<span>{chip}</span>
				</h4>

				<h2 class={styles.title}>
					{#each highlightText(title, titleHighlight) as word}
						{#if word.isHighlighted}
							<span class={styles.highlight}>{word.text}</span>{" "}
						{:else}
							{word.text}{" "}
						{/if}
					{/each}
				</h2>

				<p class={styles.desc}>{desc}</p>

				{#if blockHeaderCta}
					<div class={styles.ctaBtns}>
						{#each blockHeaderCta as cta, i}
							<Button secondary={i === 0} onWhite>
								<span>{cta.text}</span>
								<span class="material-symbols-sharp">{cta.icon}</span>
							</Button>
						{/each}
					</div>
				{/if}
			</div>

			<div class={styles.blockList}>
				{#each blockListItems as item}
					<article class={styles.listItem}>
						{#if item.icon}
							<span class="material-symbols-sharp">{item.icon}</span>
						{/if}

						{#if item.img}
							<div class={styles.imageContainer}>
								<img src={item.img} alt="sector" />
							</div>
						{/if}

						<div class={styles.content}>
							<h3 class={`${styles.title} ${styles.largeTitles}`}>{item.title}</h3>
							<p class={styles.text}>{item.desc}</p>
						</div>
					</article>
				{/each}
			</div>

			{#if blockListCta}
				<div class={styles.ctaBtns}>
					{#each blockListCta as cta}
						<Button onWhite>
							<span>{cta.text}</span>
							<span class="material-symbols-sharp">{cta.icon}</span>
						</Button>
					{/each}
				</div>
			{/if}
		</section>
	{/if}
</SectionWrapper>
