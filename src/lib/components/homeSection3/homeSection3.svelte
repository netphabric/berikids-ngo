<script type="ts">
	import Button from "../button/button.svelte"
	import SectionWrapper from "../sectionWrapper/sectionWrapper.svelte"
	import styles from "./homeSection3.module.scss"
</script>

<SectionWrapper className={styles.homeSection3}>
	<div class={styles.sectionContent}>
		<h4 class={styles.contentChip}>
			<span class="material-symbols-sharp">mountain_flag</span>
			<span>impact</span>
		</h4>

		<h2 class={styles.contentTitle}>
			transforming lives through
			<span class={styles.highlight}>community support</span>
		</h2>

		<p class={styles.contentDesc}>
			Our NGO has positively impacted over 1,000 orphans and vulnerable children. We have
			successfully implemented 50 community projects across the North West Province
		</p>

		<div class={styles.statsContainer}>
			<article class={styles.statItem}>
				<h3 class={styles.statPercent}>75%</h3>
				<p class={styles.statDesc}>
					of assisted children have improved their educational outcomes.
				</p>
			</article>

			<article class={styles.statItem}>
				<h3 class={styles.statPercent}>80%</h3>
				<p class={styles.statDesc}>of communities now have access to clean water.</p>
			</article>
		</div>

		<div class={styles.ctaBtns}>
			<Button primary onWhite>
				<span>join</span>
				<span class="material-symbols-sharp">handshake</span>
			</Button>

			<Button onWhite>
				<span>donate</span>
				<span class="material-symbols-sharp">compost</span>
			</Button>
		</div>
	</div>

	<div class={styles.sectionMediaContainer}>
		<video muted playsinline disablepictureinpicture controls>
			<source src="/video.mp4" type="video/mp4" />
		</video>
	</div>
</SectionWrapper>
