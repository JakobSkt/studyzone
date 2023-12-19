<script>
    import { zoneTime } from "./store";
    import { goto } from '$app/navigation';

    export let title
    export let slug
    export let bg
    export let music
    export let scenery

    import bgImg from `$lib/images/${bg}`

    let active = false

    let selected20 = false
    let selected30 = false
    let selected45 = false
    let selected60 = false

    function handleInfo(event) {
        if(event.target.tagName == 'svg') {
            active = false
            console.log('clicked svg')
            return
        } else if (!active) {
            active = true
            console.log('clicked card')
            return
        }
    }

    function handleSelect(event) {        
        switch(event.target.innerText) {
            case '20':
                selected20 = !selected20;
                selected30 = false;
                selected45 = false;
                selected60 = false;
                $zoneTime = 20;
                break;
            case '30':
                selected30 = !selected30;
                selected20 = false;
                selected45 = false;
                selected60 = false;
                $zoneTime = 30;
                break;
            case '45':
                selected45 = !selected45;
                selected20 = false;
                selected30 = false;
                selected60 = false;
                $zoneTime = 45;
                break;
            case '60':
                selected60 = !selected60;
                selected20 = false;
                selected30 = false;
                selected45 = false;
                $zoneTime = 60;
                break;
        }   
    }

    function handleZoneSelect() {
        if($zoneTime == 0) {
            alert('Please select a zone length')
            return
        } else {
            goto(`/zones/${slug}`)
        }
    }

</script>

<main>
    <div on:click={handleInfo} class:active={active} class="group cursor-pointer relative px-40 py-60 bg-zinc-200 backdrop-blur-xl rounded-xl drop-shadow-sm grayscale-60 hover:grayscale-0 hover:shadow-2xl hover:scale-105 fisrt:grayscale-0 transition duration-300 bg-cover " style="background-image: {bgImg}" id="zoneCard">
        <div class="absolute flex flex-col gap-2 px-4 py-4 bg-zinc-400/50 backdrop-blur-sm bottom-0 inset-x-0 rounded-xl" id="cardInfo">
            <svg on:click={() => active = false} class:active={active} class="z-40 absolute w-12 h-12 stroke-zinc-700 self-center -mt-20 opacity-0 transition duration-200 hover:scale-105" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" data-slot="icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
              
            <h1 class="text-3xl font-bold text-white "> {title} </h1>
            <div class="flex flex-row gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6  stroke-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
                </svg>
                <p class="text-white"> {music} </p>
            </div>
            <div class="flex flex-row gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6  stroke-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                <p class="text-white"> {scenery}  </p>
            </div>
            
            <div class="flex flex-col mt-8 p-4 bg-zinc-500/50 rounded-xl items-center justify-center">
                <div>
                    <p class="font-bold text-zinc-700 mb-4 text-center"> Zone length in minutes </p>
                    <div class="flex flex-row z-50">
                        <div class="selected" style="display: none"></div>
                        <button on:click={handleSelect} class:selected={selected20} class="px-4 py-2 rounded text-zinc-600 hover:bg-zinc-200/40 transition"> 20 </button>
                        <button on:click={handleSelect} class:selected={selected30} class="px-4 py-2 rounded text-zinc-600 hover:bg-zinc-200/40 transition"> 30 </button>
                        <button on:click={handleSelect} class:selected={selected45} class="px-4 py-2 rounded text-zinc-600 hover:bg-zinc-200/40 transition"> 45 </button>
                        <button on:click={handleSelect} class:selected={selected60} class="px-4 py-2 rounded text-zinc-600 hover:bg-zinc-200/40 transition"> 60 </button>
                    </div>
                </div>
                <button on:click={handleZoneSelect} class="mt-4 px-12 py-2 text-white rounded-full font-bold text-xl bg-gradient-to-r from-red-400 to-orange-400 drop-shadow-lg hover:scale-105 hover:drop-shadow-xl transition-all"> Start </button>
            </div>
        </div>
    </div>
</main>

<style>

    #zoneCard {
        overflow: clip;
    }

    #zoneCard #cardInfo {
        transform: translateY(60%);
        transition: 500ms;
    }

    #zoneCard:hover #cardInfo {
    }

    #zoneCard.active #cardInfo {
        transform: translateY(0);
    }

    svg.active {
        opacity: 1;
    }

    .selected {
        background-color: lightgray;
    }
</style>