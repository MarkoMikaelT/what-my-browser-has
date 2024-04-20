<script lang="ts">
    import { getMedia } from "$lib";
    import { getContext, onMount } from "svelte";

    const updateTitle: any = getContext("updateTitle")
    
    const title = "MediaDevices"
    onMount(() => {
        updateTitle(title)
    })

    function isEmpty(val: String) {
        return val.length <= 0
    }
</script>

<svelte:head>
	<title>MediaDevices</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="page-mediadevice">
    <h1>Your media devices</h1>
    {#await getMedia()}
    <h2>Loading location</h2>
    {:then devices} 
        <table>
            <thead>
                <tr>
                    <th>label</th>
                    <th>deviceId</th>
                    <th>groupId</th>
                    <th>kind</th>
                </tr>
            </thead>
            <tbody>
                {#each devices as device}
                    <tr>
                        <td>{isEmpty(device?.label) ? "???" : device?.label}</td>
                        <td>{isEmpty(device?.deviceId) ? "???" : device?.deviceId}</td>
                        <td>{isEmpty(device?.groupId) ? "???" : device?.groupId}</td>
                        <td>{isEmpty(device?.kind) ? "???" : device?.kind}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    {:catch err}
        <h2>Something went wrong :(<br> {err}</h2>
    {/await}
</section>

<style>
    .page-mediadevice{
        display: flex;
        flex-direction: column;
        min-width: 900px;
        text-align: center;
        overflow-y: auto;
    }
    table{
        overflow-x: auto
    }
    th, td{
        max-width: 20vw;
        overflow: clip;
        border-bottom: 2px solid #cea9ff;
    }
</style>