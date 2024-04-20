<script lang="ts">
    import { base } from "$app/paths";
	import { getContext, onMount } from "svelte";
    const updateTitle: any = getContext("updateTitle")

	const title = "Home"
	onMount(() => {
		updateTitle(title)
	})
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="main-page-section">
	<h1>
		This is home
	</h1>

	<div>
	<pre>
            ######
        #### ####
        ## #######
        ##### ###
         _##
_______|_|____
//            \\
//  ___     ___ \\
//  |_|_|   |_|_| \\
//___|_|_|___|_|_|__\\
|    _____      _    |
|   |_____|    |.|   |
|___|_____|____|_|___|
	</pre>
	</div>
	<div class="main-page-browser-api-list">
 		<a href={base + "/useragent"}>UserAgent</a> 
 		<a href={base + "/geolocation"}>Location</a>
 		<a href={base + "/mediadevices"}>MediaDevices</a>
	</div>
</section>

<style>
	pre{
		font-weight: bold;
		font-size: 1.25rem;
	}
	.main-page-section > *{
		margin: 2.5rem;
		text-align: center;
	}
	.main-page-browser-api-list{
		max-width: 60vw;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
	}
	.main-page-browser-api-list > * {
		margin: 0.2rem;
	}


</style>
