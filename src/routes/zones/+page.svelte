<script>
    import '../../app.css'
    import Calculator from '../../lib/calculator.svelte'
    import ZoneCard from '$lib/zoneCard.svelte'
    import ActiveZone from '$lib/activeZone.svelte'
    import zones from '$lib/examples.json'
    import { goto } from '$app/navigation'

    import vibrantLofi from '$lib/images/vibrantLofi.jpg'
    import dark from '$lib/images/dark.jpg'
    import snowfall from '$lib/images/snowfall.jpg'

    let bgImages = [vibrantLofi, dark, snowfall]
</script>

<div class="hero w-screen h-dvh flex flex-col justify-start items-center pb-20 mb-48 bg-zinc-100 dark:bg-cyan-950">
    
    <div class="w-fit h-fit p-12 mt-12 text-slate-600 dark:text-white">
        <h1 class="text-5xl font-bold">Available StudyZones</h1>
        <span class="text-gray-400"> Choose between the 3 predefined rooms </span>
    </div>

    <div class="w-screen flex flex-row gap-12 justify-center items-center">
            {#each zones as zone}
                <ZoneCard id={zone.id} title={zone.title} slug={zone.slug} bg={zone.bg} music={zone.music} scenery={zone.scenery} images={bgImages}/>
            {/each}
    </div>

    <div class=" p-12  text-zinc-600 dark:text-white flex flex-row">
          <div>
            <button disabled class="text-white px-8 py-4 rounded-full text-3xl font-bold bg-zinc-800"><p> Create your own studyzone <span class="text-sm font-black bg-gradient-to-r from-zinc-200 to-zinc-400 text-transparent bg-clip-text">PRO</span></p></button>
            <p class="text-zinc-200 text-center"> Coming soon to Premium users </p>
          </div>
    </div>
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