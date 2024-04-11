<script>
	import { getContext, onMount } from "svelte";
    const updateTitle = getContext("updateTitle")

	const title = "Home"
	onMount(() => {
		updateTitle(title)
	})
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
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
</section>

<style>
	pre{
		font-weight: bold;
		font-size: 1.25rem;
	}


</style>
