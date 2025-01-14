<script lang="ts">
	import Button from "$lib/components/button/button.svelte"
	import SectionWrapper from "$lib/components/sectionWrapper/sectionWrapper.svelte"
	import PageSection from "$lib/components/pageSection/pageSection.svelte"
	import styles from "./page.module.scss"
</script>

<main class={styles.root}>
	<SectionWrapper className={styles.hero}>
		<h2 class={styles.title}>
			<span class={styles.highlight}>transforming</span> lives together
		</h2>

		<div class={`${styles.sectionContent} ${styles.heroRight}`}>
			<p class={styles.desc}>
				Our projects are designed to uplift the most vulnerable members of our society, focusing on
				orphans and those in need. Through education, vocational training, and essential resources,
				we are making a lasting impact in Cameroon.
			</p>

			<div class={styles.ctaBtns}>
				<Button onWhite>
					<span>get involved</span>
					<span class="material-symbols-sharp">tools_power_drill</span>
				</Button>
			</div>
		</div>
	</SectionWrapper>

	<PageSection
		isBlockLayout
		chip="projects"
		chipIcon="tools_phillips"
		desc=" Our projects are designed to uplift communities by addressing critical needs. We focus on socio-economic improvement, education, and essential resources. "
		title="Transforming lives through our diverse projects"
		titleHighlight="diverse projects"
		blockListItems={[
			{
				icon: "nest_eco_leaf",
				title: "Socio-Economic Improvement Initiatives",
				desc: "We implement programs that enhance the living conditions of orphans and vulnerable groups."
			},
			{
				icon: "touchpad_mouse",
				title: "Advancing IT Education for All",
				desc: "Our IT education initiatives equip individuals with essential digital skills."
			},
			{
				icon: "water_full",
				title: "Providing Access to Potable Water",
				desc: "We ensure that communities have access to clean drinking water."
			}
		]}
	/>

	<PageSection
		chip="initiatives"
		chipIcon="person_apron"
		desc=" Our featured project focuses on enhancing the socio-economic conditions of orphans in Cameroon through targeted vocational training and support programs. By providing essential skills and resources, we aim to empower these vulnerable children to build sustainable futures. "
		title="Transforming lives through socio-economic development initiatives"
		titleHighlight="development initiatives"
		sectionImage="giS1.webp"
		sectionImageAlt="berikids"
	/>

	<PageSection
		chip="Tech"
		chipIcon="robot_2"
		desc=" Our featured project focuses on enhancing IT education to uplift communities in Cameroon. By integrating technology into learning, we aim to equip orphans and vulnerable children with essential skills for a brighter future. "
		title="Empowering Communites through Information Technology Education and Development Initiatives"
		titleHighlight="technology education"
		sectionImage="giS5.webp"
		sectionImageAlt="berikids"
		hasSubContainer
		items={[
			{
				title: "IT Education",
				desc: "Transforming lives through technology and education for sustainable community development."
			},
			{
				title: "Community Impact",
				desc: "Building a future where every child has access to technology and learning opportunities."
			}
		]}
	/>

	<PageSection
		chip="water"
		chipIcon="cleaning_bucket"
		desc=" Access to clean water is a fundamental human right. Our project aims to provide sustainable potable water solutions to underserved communities in the North West Province of Cameroon. "
		title=" Our Portable Water Project in North West of Cameroon"
		titleHighlight="portable water"
		sectionImage="giS2.webp"
		sectionImageAlt="berikids"
		hasSubContainer
		items={[
			{
				title: "Water Access",
				icon: "water_voc",
				desc: "bettering communities through clean water access."
			},
			{
				title: "Health and Safety",
				icon: "health_and_safety",
				desc: "Join us in making a difference today."
			}
		]}
	/>

	<PageSection
		chip="counseling"
		chipIcon="face_5"
		desc="Our Christian counseling and moral instruction campaigns aim to uplift and empower vulnerable communities. By integrating spiritual guidance with practical support, we foster holistic development."
		title="Empowering Lives Through Christian Counseling and Moral Instruction Initiatives"
		titleHighlight="Counseling and Moral Instruction"
		sectionImage="giS6.webp"
		sectionImageAlt="berikids"
		hasSubContainer
		items={[
			{
				title: "spiritual growth",
				icon: "water_voc",
				desc: "Nurturing faith while promoting socio-economic stability among orphans and marginalized groups."
			},
			{
				title: "Community Impact",
				icon: "health_and_safety",
				desc: "Transforming lives through education, support, and spiritual guidance in local communities."
			}
		]}
	/>

	<PageSection
		chip="capacity development"
		chipIcon="footprint"
		desc="Our capacity building projects are designed to uplift communities by enhancing skills and fostering volunteerism. We believe that empowering individuals leads to sustainable development and improved socio-economic conditions."
		title="Building Stronger Communities Through Capacity Development"
		titleHighlight="capacity development"
		sectionImage="giS4.webp"
		sectionImageAlt="berikids"
		hasSubContainer
		items={[
			{
				title: "skill development",
				desc: "We provide training programs that equip participants with essential life skills for success."
			},
			{
				title: "community engagement",
				desc: "Volunteering opportunities foster collaboration and strengthen community ties for collective growth."
			}
		]}
	/>

	<PageSection
		chip="collaborative research"
		chipIcon="footprint"
		desc="Our featured project focuses on conducting vital social, population, and Christian research to address the needs of vulnerable communities. By partnering with national and international organizations, we aim to gather insights that drive impactful change."
		title="Transforming Lives Through Collaborative Research"
		titleHighlight="collaborative research"
		sectionImage="giS3.webp"
		sectionImageAlt="berikids"
	/>

	<section class={styles.supportBlock}>
		<h2 class={styles.title}>
			support our <span class={styles.highlight}>life changing</span> projects
		</h2>
		<p class={styles.desc}>
			Join us in making a difference through donations, volunteering, or forming valuable
			partnerships.
		</p>

		<div class={styles.ctaBtns}>
			<Button onWhite secondary>
				<span>donate</span>
				<span class="material-symbols-sharp">monetization_on</span>
			</Button>

			<Button onWhite primary>
				<span>volunteer</span>
				<span class="material-symbols-sharp">garden_cart</span>
			</Button>
		</div>
	</section>
</main>
