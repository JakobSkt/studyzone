<script>
    import "../../../app.css"
	import Toolview from "../../../lib/toolview.svelte";
    import { imageTime } from "../../../lib/store";
    import { goto } from '$app/navigation';


    export let data
    $: console.log(data)
</script>

<main>
    <Toolview data={data} photoTimer={$imageTime}/>
</main>