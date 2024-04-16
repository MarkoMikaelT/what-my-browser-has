<script>
    import { getUseAgent } from '$lib';
    import { getContext, onMount } from 'svelte';
    const updateTitle = getContext("updateTitle")
    
    let agent = ""
    const title = "UserAgent"
    onMount(() => {
        agent = getUseAgent()
        updateTitle(title)
    })
</script>

<svelte:head>
	<title>UserAgent</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
    <h1>This is your UserAgent</h1>
    <h2>{agent}</h2>
</section>