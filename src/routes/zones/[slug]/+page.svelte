<script>
    import { goto } from '$app/navigation';
    import ActiveZone from '$lib/activeZone.svelte';
    import { zoneTime } from '../../../lib/store'

    export let data
    // console.log(data.photos)
    // console.log(data.theme)

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
    <ActiveZone data={data.photos} photoTimer={$zoneTime} musicUrl={musicUrl}/>
</main>