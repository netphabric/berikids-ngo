<script lang="ts">
	import ContentBlock from "$lib/components/contentBlock.svelte"
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
		flexReverse
		contentChipColor="green"
		contentChipText="water access"
		contentChipIcon="cleaning_bucket"
		contentTitle="the Portable Water Project in the North West of Cameroon"
		contentTitleHighlight="portable water"
		contentMedia="/images/water-project.webp"
		contentDescription=" Access to clean water is a fundamental human right. Our project aims to provide sustainable potable water solutions to underserved communities in the North West Province of Cameroon. "
	/>

	<ContentBlock
		contentChipColor="blue"
		contentChipText="keeping the faith alive"
		contentChipIcon="church"
		contentTitle="Christian Counseling and Moral Instruction Initiatives"
		contentTitleHighlight="Moral Instruction"
		contentMedia="/images/project-morale.webp"
		contentDescription="We create supportive Christian environments where children can learn and grow in faith. Our programs integrate biblical instruction, mentorship, and practical support to foster spiritual development and equip children with the tools they need to navigate life's challenges."
	/>

	<ContentBlock
		flexReverse
		contentChipColor="yellow"
		contentChipText="gathering insights"
		contentChipIcon="biotech"
		contentTitle="Collaborative Research"
		contentTitleHighlight="research"
		contentMedia="/images/research-project.webp"
		contentDescription="Our featured project focuses on conducting vital social, population, and Christian research to address the needs of vulnerable communities. By partnering with national and international organizations, we aim to gather insights that drive impactful change."
	/>
</main>
