<script>
    import { onMount } from 'svelte';

    let count = 5;
    let clientId = "CoG42DU-Efb4NvooQXlL1N0F8Vq0NElbl627cTIj22c"
    let photos = []
    $: console.log(photos)

    async function getPhotos(c, q) {
        const res = await fetch("https://api.unsplash.com/photos/random?client_id=" + clientId)
        const data = await res.json();
        console.log(data.urls.raw);
        photos = [...photos, data]

    }

    onMount(async () => {
		/*const res = await fetch(`/tutorial/api/album`);
		photos = await res.json();*/
        const countdown = setInterval(() => {
            count = count - 1;
        }, 1000);

        getPhotos()
        
	});

</script>

<main>
    {#if count >= 0}
    <div class="fixed top-0 left-0 w-full h-full bg-zinc-800 opacity-90">
        <div class="w-screen h-screen flex flex-col items-center justify-center text-center -mt-48">
            <span class="text-3xl font-bold text-zinc-900"> Countdown </span>
            <h1 class="text-9xl font-black text-white">{count}</h1>
        </div>
    </div>

    {:else}
    <div class="fixed top-0 left-0 w-full h-full bg-zinc-800">
    </div>

    <div class="fixed bottom-0 right-0 h-16 w-28 flex flex-row gap-4 mr-4">
            <svg class="w-12 h-12 stroke-zinc-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            
            <svg class="w-12 h-12 stroke-zinc-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg> 
    </div>

    {/if}
</main>