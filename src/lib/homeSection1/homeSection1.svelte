<script lang="ts">
	import Button from "$lib/button/button.svelte"
	import SectionWrapper from "$lib/sectionWrapper/sectionWrapper.svelte"
	import Hs1Img from "assets/photos/Hs1-img.webp"
	import styles from "./homeSection1.module.scss"
</script>

<SectionWrapper className={styles.homeSection1}>
	<div class={styles.sectionContent}>
		<h4 class={styles.contentChip}>
			<span class="material-symbols-sharp">altitude</span>
			<span>empower</span>
		</h4>

		<h3 class={styles.contentTitle}>transforming lives through compassionate action</h3>

		<div class={styles.contentDesc}>
			Our NGO is dedicated to uplifting orphans and vulnerable children in Cameroon by enhancing
			their socio-economic conditions and educational opportunities. Through initiatives like
			vocational training and access to clean water, we strive to create sustainable change in
			communities.
		</div>

		<div class={styles.ctaBtns}>
			<Button onWhite>
				<span>donate</span>
				<span class="material-symbols-sharp">compost</span>
			</Button>

			<Button onWhite primary>
				<span>get involved</span>
				<span class="material-symbols-sharp">thread_unread</span>
			</Button>
		</div>
	</div>

	<div class={styles.sectionImage}>
		<img src={Hs1Img} alt="berkids" />
	</div>
</SectionWrapper>
