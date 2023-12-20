<script>
    import { goto } from '$app/navigation';
    import ToolView from '../../../lib/toolView.svelte';
    import { zoneTime } from '../../../lib/store'

    export let data
    // console.log(data)

    let musicUrl = ""
    switch(data.theme) {
        case 'vibrantlofi':
            musicUrl = "https://open.spotify.com/embed/playlist/3bevTxSrGdh3qShUcODtxE?utm_source=generator"
            break;

        case 'darkasthetics':
            musicUrl = "https://open.spotify.com/embed/playlist/6fgML5EmzqUq2Ok44PCzWS?utm_source=generator"
            break;  
            
        case 'classicchristmas':
            musicUrl = "https://open.spotify.com/embed/playlist/37i9dQZF1DWUqIzZNMSCv3?utm_source=generator"
            break;
    }
</script>

<main>
    <h1 class="font-bold text-4xl text-amber-500 text-center"> {data.theme} </h1>
    <p class="text-zinc-600 text-xl text-center"> Zoning for {$zoneTime} minutes</p>

    <ToolView data={data} photoTimer={$zoneTime} musicUrl={musicUrl}/>

    <div class="w-screen h-fit p-12">
        <iframe style="border-radius:12px" src={musicUrl} width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
</main>