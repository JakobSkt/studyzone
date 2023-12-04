<script>
    import { onMount } from 'svelte'
    
    let count = 5
    let clientId = "CoG42DU-Efb4NvooQXlL1N0F8Vq0NElbl627cTIj22c"

    let photos = []
    let photo = {}
    let photoId = 0
    export let imageCount

    let paused = false
    export let photoTimer
    let timer = photoTimer

    let description = false
    let started = false

    async function getPhotos(c, q) {
        //const res = await fetch("https://api.unsplash.com/photos/random?client_id=" + clientId + "&count=2")
        const res = await fetch("https://jsonplaceholder.typicode.com/photos")
        const data = await res.json()

        photos = data
        //console.log(photos[photoId].url)
        photo = photos[photoId]
    }

    function updatePhotos() {
        const update = setInterval(() => {
            if(!paused) {
                if(timer < 1) {
                    nextPhoto()
                } else {
                    timer = timer - 1 
                }
            }
        }, 1000)
    }

    function nextPhoto() {
        photoId += 1
        photo = photos[photoId]
        timer = photoTimer
    } 

    onMount(async () => {
		/*const res = await fetch(`/tutorial/api/album`);
		photos = await res.json();*/
        const countdown = setInterval(() => {
            if(count < 0) {
                if(!started) {
                    updatePhotos()
                    started = true
                }
            } else {
                count = count - 1
            }
        }, 1000)

        await getPhotos()
        
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
        <img src={photo.urls.full} alt="" class="h-screen w-fit mx-auto">
        {#if paused}
            <svg class="fixed inset-0 m-auto w-48 h-48 stroke-zinc-100 opacity-75" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
            </svg>
        {/if}
    
    </div>

    <div class="fixed bottom-0 left-0 flex flex-row gap-4 m-4">
        <p class="text-2xl font-bold text-zinc-200"> {timer} </p>
    </div>

    {#if description}
        <div class="fixed bottom-0 right-0 mb-24 mr-8 py-8 px-16 bg-zinc-800/75 rounded-md">
            <p class="text-xl text-zinc-200"> {photo.alt_description} - {photo.user.name} </p>
        </div>
    {/if}

    <div class="fixed bottom-0 right-0 flex flex-row gap-4 m-4">

        <svg on:click={nextPhoto} class="w-12 h-12 stroke-zinc-200 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
          </svg>
          
        <svg on:click={() => paused = !paused} class="w-12 h-12 stroke-zinc-200 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
            
        <svg on:click={() => description = !description} class="w-12 h-12 stroke-zinc-200 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg> 
            
            
    </div>

    {/if}
</main>
