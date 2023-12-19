<script>
    import "../../../app.css"
	// import ToolView from "../../../lib/toolView.svelte";
    import { zoneTime } from "../../../lib/store";
    import { goto } from '$app/navigation';


    export let data
    $: console.log(data)
</script>

<main>
    <!-- <Toolview data={data} photoTimer={$zoneTime}/> -->
</main>