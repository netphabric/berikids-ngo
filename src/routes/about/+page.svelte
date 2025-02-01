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
		contentTitleHighlight="vision"
		contentTitle="Our Goals, Vision and Mission."
		contentDescription=" 
      We are a Cameroonian NGO founded in 2004, we focus on improving the lives of
      underprivileged children, orphans, empowering women and helping the drug hardened
      individuals through our rehabilitation centers. We're currently prioritizing interventions
      to address the challenges of the ongoing armed conflict there, providing critical assistance
      and contributing to long-term positive change. 
    "
	/>

	<Team />

	<ContentBlock
		contentChipColor="green"
		contentChipText="Inline with our values"
		contentChipIcon="church"
		contentMedia="/images/christianConnection.webp"
		contentTitleHighlight="Christian Connections"
		contentTitle="we establish lasting and rooted christian connections"
		contentDescription="
      Our NGO is deeply connected to the Christian faith,
      providing moral and spritual support to the children and families we serve.
      as well as ourselves
    "
	/>

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
</main>
