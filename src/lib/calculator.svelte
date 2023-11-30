<script>
    import "../app.css"
    import Toolview from "../lib/toolview.svelte";


    let imageCount = 20;
    let imageTime = 30;
    let topic = "";
    let specificTopic = false;
    
    let begin = false;

    let step = 1;

    let active = true;
    let translate = false;

    function nextStep() {
        step += step;
    }
    
    function handleKeypress(e) {
        if(e.key == "Enter") {
            nextStep()
            specificTopic = true;
        }
    }

    $: total = Math.round((imageCount*imageTime)/60);
</script>

<main>
    <div class="bg-zinc-800 w-full h-full mx-auto p-12 rounded-xl flex flex-col items-center text-white">
        {#if step == 1}
        <h1 class="text-3xl font-bold self-start">Step 1 - tune the parameters</h1>
        
        <div class="flex flex-row gap-36">
            <div class="p-4 w-fit h-fit flex flex-col gap-2 items-center">
                <span class="text-xl">Image count</span>
                <h1 class="text-3xl font-black text-gray-600"> {imageCount} </h1>
                <input class="accent-pink-700" type="range" bind:value={imageCount} min="10" max="100"/>
            </div>
            <div class="p-4 w-fit h-fit flex flex-col gap-2 items-center">
                <span class="text-xl">Image screen-time</span>
                <h1 class="text-3xl font-black text-gray-600"> {imageTime} sec</h1>
                <input class="accent-pink-700" type="range" bind:value={imageTime} min="10" max="60"/>
            </div>
            <div class="p-4 w-fit h-fit flex flex-col gap-2 items-center">
                <span class="text-xl">Total time</span>
                <h1 class="text-3xl font-black w-28 text-center"> {total} min </h1>
            </div>
        </div>

        <button class="p-4 mt-8 font-bold bg-orange-400 text-white w-fit h-fit" on:click={nextStep}>Continue</button>
        {:else if step == 2}

        <h1 class="text-3xl font-bold self-start">Step 2 - choose your topic</h1>
        
        <div class="flex flex-row gap-20 items-evenly justify-evenly">
            <button class="hover:ring hover:ring-zinc-700 bg-zinc-900 px-8 py-20 rounded-md mt-8" on:click={nextStep}>
                <h1 class="text-3xl font-black"> Random </h1>
                <span class="text-xl  text-gray-600">Give me images from all topics</span>
            </button>

            <button on:mouseover={() => active = false} on:mouseover={() => translate = true} class="group bg-zinc-900 px-8 py-20 rounded-md mt-8 flex flex-col items-center justify-evenly hover:ring hover:ring-zinc-700">
                <h1 class:translate={translate} class="text-3xl font-black translate-y-4"> Specific </h1>
                <input class:active={active} bind:value={topic} on:keypress={handleKeypress} class="block text-zinc-600 font-bold border-none outline-none rounded p-2 text-center" type="text"/>
                <span class:translate={translate} class="text-xl  text-gray-600 transition -translate-y-6 ">Give me images from a certain topic</span>
            </button>
        </div>

        {:else if step > 2}

        <h1 class="text-3xl font-bold self-start">Step 3 - confirm your selections</h1>
        
        <div class="flex flex-row gap-20 items-center justify-evenly">
            <div class="bg-zinc-900 px-8 py-12 rounded-md mt-8 text-cente" on:click={nextStep}>
                <span class="text-xl  text-gray-600">Image selections</span>
                <p class="text-xl font-bold text-zinc-300"> {imageCount} images  </p>
                <p class="text-xl font-bold text-zinc-300"> {imageTime} seconds  </p>
                <h1 class="text-3xl font-black drop-shadow-xl text-center"> {total} minutes </h1>
            </div>

            <div class="bg-zinc-900 px-8 py-16 rounded-md mt-8 text-center" on:click={nextStep}>
                <span class="text-xl  text-gray-600">Topic selections</span>
                {#if specificTopic}
                    <h1 class="text-3xl font-black drop-shadow-xl"> {topic} </h1>
                {:else}
                    <h1 class="text-3xl py-4 font-black drop-shadow-xl"> Random </h1>
                {/if}
            </div>

            <button on:click={() => begin = true} class="hover:scale-110 transition drop-shadow-sm">

                <svg class="w-28 h-28 stroke-pink-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
            </button>
        </div>
        {/if}
    </div>

    {#if begin}
        <Toolview />
    {/if}
</main>

<style>
    input {
        transition: 1.5s;
    }

    .active {
        opacity: 0;
    }

    h1 {
        transition: 500ms;

    }

    span {
        transition: 500ms;
    }

    h1.translate  {
        translate: 0px -30px;
    }

    span.translate  {
        translate: 0px 30px;
    }
</style>