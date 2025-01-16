<script>
	import ContentBlock from "$lib/components/contentBlock.svelte"
	import Partners from "$lib/components/partners.svelte"
	import Team from "$lib/components/team.svelte"
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<main>
	<ContentBlock
		heroBlock
		contentChipColor="yellow"
		contentChipText="berikids"
		contentChipIcon="child_care"
		contentMedia="/images/about-hero.webp"
		contentTitleHighlight="Goals, Vision and Mission."
		contentTitle="who we are, what we stand for | Goals, Vision and Mission."
		contentDescription=" 
      We are a Cameroonian NGO founded in 2004,
      we focus on improving the lives of underprivileged children and orphans in the North West Region.
      We're currently prioritizing interventions to address the challenges of the ongoing armed conflict there,
      providing critical assistance and contributing to long-term positive change. 
    "
	/>

	<Team />

	<ContentBlock
		flexReverse
		contentChipColor="blue"
		contentChipText="what we do"
		contentChipIcon="potted_plant"
		contentMedia="/images/Hs1-img.webp"
		contentTitleHighlight="vulnerable communities"
		contentTitle="supporting vulnerable communities via sustainability programs."
		contentDescription="
      Founded with a vision to uplift the socio-economic conditions of orphans in Cameroon,
      our NGO has grown significantly since its inception.
      Key milestones include the launch of vocational training programs and successful
      partnerships with local and international organizations to enhance community development.
    "
	/>

	<Partners />

	<ContentBlock
		contentChipColor="green"
		contentChipText="what keeps us going"
		contentChipIcon="rocket_launch"
		contentMedia="/images/as2.webp"
		contentTitleHighlight="committment"
		contentTitle="Our committment to transforming lives in Cameroon."
		contentDescription=" 
      We are dedicated to improving the socio-economic conditions of orphans,
      providing them with essential skills and resources. Our initiatives also focus on advancing IT education,
      ensuring access to potable water, and offering Christian counseling to foster holistic development.
    "
	/>
</main>
