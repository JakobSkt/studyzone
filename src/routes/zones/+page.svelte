<script>
    import '../../app.css'
    import Calculator from '../../lib/calculator.svelte'
    import ZoneCard from '$lib/zoneCard.svelte'
    import ActiveZone from '$lib/activeZone.svelte'
    import zones from '$lib/examples.json'
    import { goto } from '$app/navigation'
    import { premiumAccount } from '$lib/store'

    import vibrantLofi from '$lib/images/vibrantLofi.jpg'
    import dark from '$lib/images/dark.jpg'
    import snowfall from '$lib/images/snowfall.jpg'

    let bgImages = [vibrantLofi, dark, snowfall]
    
    export let data

    $: data.isAuthenticated == false ? goto('/') : null
    $: console.log(data)
</script>

<div class="hero w-screen h-lvh lg:h-screen flex flex-col justify-start items-center pb-20 bg-zinc-100 dark:bg-cyan-950 overflow-hidden">
    
    <div class="w-screen xs:w-fit h-fit p-12 mt-12 text-slate-600 dark:text-white">
        <h1 class="text-3xl xs:text-5xl font-bold">Available StudyZones</h1>
        <span class="text-gray-400"> Choose between the 3 predefined rooms </span>
    </div>

    <div class="absolute w-screen top-0 left-0 flex flex-row lg:gap-2 p-8 items-center justify-between">
        <div class="flex flex-row items-center gap-2 text-slate-600 dark:text-white">
            <span class="text-gray-400"> Welcome back </span>
            <h1 class="text-xl font-bold"> {data.user.given_name} </h1>
        </div>

            <a href="/api/auth/logout" class="group font-bold text-white cursor-pointer hover:text-zinc-400 transition duration-200 flex flex-row items-center ">
                <svg class="stroke-white w-4 h-4 stroke-2 group-hover:stroke-zinc-400 transition duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                </svg>
                Sign out
            </a>
            
    </div>

    <div class="w-screen flex flex-col lg:flex-row gap-12 justify-center items-center">
            {#each zones as zone}
                <ZoneCard id={zone.id} title={zone.title} slug={zone.slug} bg={zone.bg} music={zone.music} scenery={zone.scenery} images={bgImages}/>
            {/each}
    </div>

    {#if $premiumAccount}
        <div class="m-12 text-zinc-600 dark:text-white flex flex-col">
            <button class="flex flex-row gap-2 items-center justify-around text-white px-6 py-2 xs:py-4 lg:py-4 rounded-full text-md xs:text-xl lg:text-3xl font-bold bg-zinc-800">            
                <p> Create your own studyzone </p>
            </button>
        </div>
    {:else}
        <div class="m-12 text-zinc-600 dark:text-white flex flex-col">
            {#if data.premium.isGranted}
                <button class="flex flex-row gap-2 items-center justify-around text-white px-6 py-2 xs:py-4 lg:py-4 rounded-full bg-gradient-to-r from-red-400 to-orange-400 drop-shadow-lg hover:from-red-500 hover:to-orange-500 hover:drop-shadow-xl transition-all text-md xs:text-xl lg:text-3xl font-bold">              
                    <p> Create your own studyzone </p>
                </button>
            {:else}
                <button disabled class="flex flex-row gap-2 items-center justify-around text-white px-6 py-2 xs:py-4 lg:py-4 rounded-full text-md xs:text-xl lg:text-3xl font-bold bg-zinc-800">
                    <svg class="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clip-rule="evenodd" />
                    </svg>                
                    <p> Create your own studyzone 
                            <span class="text-xs lg:text-sm font-black bg-gradient-to-r from-zinc-200 to-zinc-400 text-transparent bg-clip-text">PRO</span>
                    </p>
                </button>
                <p class="text-zinc-200 text-center text-xs xs:text-sm lg:text-lg"> Coming soon to Premium users </p>
            {/if}
            
        </div>
    {/if}
    
</div>

<style lang="postcss">
    :global(html) {
        font-family: 'Figtree', sans-serif;
        scroll-behavior: smooth;
    }

    @media (prefers-color-scheme: light) {
        .hero {
        background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiPjwvcmVjdD4KPC9zdmc+");
        }
    }

    
    #zoneCard {
        overflow: hidden;
    }

    #zoneCard #cardInfo {
        transform: translateY(50%);
        opacity: 0;
        transition: 200ms ease-in-out;
    }

    #zoneCard:hover #cardInfo {
        opacity: 1;
    }

    #zoneCard.active #cardInfo {
        transform: translateY(-50%);
    }

    svg.active {
        opacity: 1;
    }

    .selected {
        background-color: lightgray;
    }

</style>