<script>
    import "../../../app.css"
	import Toolview from "../../../lib/toolview.svelte";
    import { imageTime } from "../../../lib/store";

    export let data
    $: console.log(data)
</script>

<main>

    <Toolview data={data} photoTimer={$imageTime}/>
    
</main>