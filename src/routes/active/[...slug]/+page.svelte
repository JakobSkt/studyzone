<script>
    import "../../../app.css"
	import ActiveZone from "../../../lib/activeZone.svelte";
    import { zoneTime } from "../../../lib/store";
    import { goto } from '$app/navigation';


    export let data
    $: console.log(data)
</script>

<main>
    <ActiveZone data={data} photoTimer={$zoneTime}/>
</main>