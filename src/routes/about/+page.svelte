<script>
    import { getContext, onMount } from "svelte";
    const updateTitle = getContext("updateTitle")

	const title = "About"
	onMount(() => {
		updateTitle(title)
	})
</script>


<svelte:head>
	<title>{title}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		This is about
	</h1>
	<p>
		This is mainly just a practice site to tryout svelte and play around :)
	</p>
</section>