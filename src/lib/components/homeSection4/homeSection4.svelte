<script lang="ts">
	import Button from "../button/button.svelte"
	import SectionWrapper from "../sectionWrapper/sectionWrapper.svelte"
	import styles from "./homeSection4.module.scss"
</script>

<section class={styles.homeSection4}>
	<SectionWrapper className={styles.sectionWrapper}>
		<h2 class={styles.contentTitle}>
			<span class={styles.highlight}>join us</span>
			in making a difference
		</h2>

		<div class={styles.sectionContent}>
			<p class={styles.contentDesc}>
				your support can transform the lives of orphans and vulnerable communities in cameroon.
				whether through donations, volunteering, or partnerships, every effort count towards
				creating a brighter futur.
			</p>

			<div class={styles.ctaBtns}>
				<Button>
					<span>donate</span>
					<span class="material-symbols-sharp">compost</span>
				</Button>

				<Button primary>
					<span>volunteer</span>
					<span class="material-symbols-sharp">cheer</span>
				</Button>
			</div>
		</div>
	</SectionWrapper>
</section>
