<script>
// @ts-nocheck
    import { getLocation } from '$lib';
    import { getContext, onMount } from 'svelte';
    const updateTitle = getContext("updateTitle")    
    const title = "Location"
    onMount(() => {        
        updateTitle(title)
    })
    
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section >
    <h1>This is your location</h1>
    <div>
        {#await getLocation()}
        <h2>Loading location</h2>
        {:then location} 
            <h2>Your coordinates are {location?.latitude}, {location?.longitude} <br>
                <a href={`https://www.openstreetmap.org/#map=18/${location?.latitude}/${location?.longitude}`} target="_blank">Openstreetmap</a>
            </h2>
        {:catch err}
            <h2>Couldn't locate: <br> {err}</h2>
        {/await}
    </div>
</section>