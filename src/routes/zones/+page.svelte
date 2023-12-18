<script>
	import { onMount } from 'svelte';
    import '../../app.css'
    import Calculator from '../../lib/calculator.svelte';
    import zones from '$lib/examples.json';

    $: console.log(zones.length)
</script>

<div class="hero w-screen h-screen flex flex-col justify-start items-center pb-20 mb-48 bg-zinc-100">
    
    <div class="w-fit h-fit p-12 mt-12 text-slate-600">
        <h1 class="text-5xl font-bold">Available StudyZones</h1>
        <span class="text-gray-400"> Choose between the 3 predefined rooms or create your own  </span>
    </div>

    <div class="h-screen flex flex-row gap-12 justify-center items-center">
            {#each zones as zone}
                <div class="group relative px-64 py-96 bg-zinc-200 backdrop-blur-xl rounded-xl drop-shadow-sm grayscale hover:grayscale-0 hover:shadow-2xl hover:scale-105 fisrt:grayscale-0 transition duration-300 before:content-[''] before:absolute before:inset-0 before:z-10 before:border-8 before:border-zinc-400/50 before:rounded-xl before:blur-md bg-cover " style="background-image: url(/src/lib/images/{zone.bg})" id="zoneCard">
                    <div class="absolute flex flex-col gap-2 px-4 py-4 bg-zinc-400/50 backdrop-blur bottom-0 inset-x-0 rounded-xl">
                        <h1 class="text-3xl font-bold text-white "> {zone.title} </h1>
                        <div class="flex flex-row gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6  stroke-white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
                            </svg>
                            <p class="text-white"> {zone.music}  </p>                  
                        </div>
                        <div class="flex flex-row gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6  stroke-white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                            <p class="text-white"> {zone.scenery}  </p>                
                        </div>
            
                    </div>
                </div>
            {/each}
    </div>
    
    <!-- <Calculator /> -->

</div>

<style lang="postcss">
    :global(html) {
        font-family: 'Figtree', sans-serif;
        scroll-behavior: smooth;
    }

    .hero {
        background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiPjwvcmVjdD4KPC9zdmc+");
    }

</style>