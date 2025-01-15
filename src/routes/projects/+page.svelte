<script lang="ts">
	import ContentBlock from "$lib/components/contentBlock.svelte"
	import Testimonials from "$lib/components/testimonials.svelte"
</script>

<main>
	<ContentBlock
		flexReverse
		contentChipColor="yellow"
		contentChipText="How we help"
		contentChipIcon="beach_access"
		contentTitle="Impacting lives through our diverse projects"
		contentTitleHighlight="diverse projects"
		contentMedia="/images/project-hero.webp"
		contentDescription="We work in partnership with communities to design and implement projects that address their most pressing needs. Our focus areas include socio-economic improvement through collaborative initiatives, providing access to quality education that empowers individuals and strengthens communities, and ensuring access to essential resources that promote health and well-being"
	/>

	<ContentBlock
		blockLayout
		contentChipColor="red"
		contentChipText="How you can help"
		contentChipIcon="mountain_flag"
		contentTitle="Support our diverse projects"
		contentTitleHighlight="diverse projects"
		contentDescription=" Join us in making a difference through donations, volunteering, or forming valuable partnerships. "
		ctaButtons={[
			{ label: "Volunteer", icon: "handshake" },
			{ label: "Partnership", icon: "verified" }
		]}
	/>

	<ContentBlock
		contentChipColor="blue"
		contentChipText="technological exposure"
		contentChipIcon="extension"
		contentMedia="/images/tech-project.webp"
		contentTitle="Exploring Technology in Early Childhood"
		contentTitleHighlight="exploring technology"
		contentDescription="We believe that all children should have the opportunity to experience the benefits of technology. This project provides access to digital learning resources for young children in Cameroon, enriching their early education and preparing them for future success."
	/>

	<Testimonials />

	<!-- <PageSection -->
	<!-- 	chip="water" -->
	<!-- 	chipIcon="cleaning_bucket" -->
	<!-- 	desc=" Access to clean water is a fundamental human right. Our project aims to provide sustainable potable water solutions to underserved communities in the North West Province of Cameroon. " -->
	<!-- 	title=" Our Portable Water Project in North West of Cameroon" -->
	<!-- 	titleHighlight="portable water" -->
	<!-- 	sectionImage="giS2.webp" -->
	<!-- 	sectionImageAlt="berikids" -->
	<!-- 	hasSubContainer -->
	<!-- 	items={[ -->
	<!-- 		{ -->
	<!-- 			title: "Water Access", -->
	<!-- 			icon: "water_voc", -->
	<!-- 			desc: "bettering communities through clean water access." -->
	<!-- 		}, -->
	<!-- 		{ -->
	<!-- 			title: "Health and Safety", -->
	<!-- 			icon: "health_and_safety", -->
	<!-- 			desc: "Join us in making a difference today." -->
	<!-- 		} -->
	<!-- 	]} -->
	<!-- /> -->
	<!---->
	<!-- <PageSection -->
	<!-- 	chip="counseling" -->
	<!-- 	chipIcon="face_5" -->
	<!-- 	desc="Our Christian counseling and moral instruction campaigns aim to uplift and empower vulnerable communities. By integrating spiritual guidance with practical support, we foster holistic development." -->
	<!-- 	title="Empowering Lives Through Christian Counseling and Moral Instruction Initiatives" -->
	<!-- 	titleHighlight="Counseling and Moral Instruction" -->
	<!-- 	sectionImage="giS6.webp" -->
	<!-- 	sectionImageAlt="berikids" -->
	<!-- 	hasSubContainer -->
	<!-- 	items={[ -->
	<!-- 		{ -->
	<!-- 			title: "spiritual growth", -->
	<!-- 			icon: "water_voc", -->
	<!-- 			desc: "Nurturing faith while promoting socio-economic stability among orphans and marginalized groups." -->
	<!-- 		}, -->
	<!-- 		{ -->
	<!-- 			title: "Community Impact", -->
	<!-- 			icon: "health_and_safety", -->
	<!-- 			desc: "Transforming lives through education, support, and spiritual guidance in local communities." -->
	<!-- 		} -->
	<!-- 	]} -->
	<!-- /> -->
	<!---->
	<!-- <PageSection -->
	<!-- 	chip="capacity development" -->
	<!-- 	chipIcon="footprint" -->
	<!-- 	desc="Our capacity building projects are designed to uplift communities by enhancing skills and fostering volunteerism. We believe that empowering individuals leads to sustainable development and improved socio-economic conditions." -->
	<!-- 	title="Building Stronger Communities Through Capacity Development" -->
	<!-- 	titleHighlight="capacity development" -->
	<!-- 	sectionImage="giS4.webp" -->
	<!-- 	sectionImageAlt="berikids" -->
	<!-- 	hasSubContainer -->
	<!-- 	items={[ -->
	<!-- 		{ -->
	<!-- 			title: "skill development", -->
	<!-- 			desc: "We provide training programs that equip participants with essential life skills for success." -->
	<!-- 		}, -->
	<!-- 		{ -->
	<!-- 			title: "community engagement", -->
	<!-- 			desc: "Volunteering opportunities foster collaboration and strengthen community ties for collective growth." -->
	<!-- 		} -->
	<!-- 	]} -->
	<!-- /> -->
	<!---->
	<!-- <PageSection -->
	<!-- 	chip="collaborative research" -->
	<!-- 	chipIcon="footprint" -->
	<!-- 	desc="Our featured project focuses on conducting vital social, population, and Christian research to address the needs of vulnerable communities. By partnering with national and international organizations, we aim to gather insights that drive impactful change." -->
	<!-- 	title="Transforming Lives Through Collaborative Research" -->
	<!-- 	titleHighlight="collaborative research" -->
	<!-- 	sectionImage="giS3.webp" -->
	<!-- 	sectionImageAlt="berikids" -->
	<!-- /> -->
</main>
