<script>
    import "../app.css"
    import Toolview from "../lib/toolview.svelte";


    let imageCount = 20;
    let imageTime = 30;
    let topic = "";
    let specificTopic = false;

    let orientation = ""
    $: console.log(step)
    
    let begin = false;

    let step = 8;

    let active = true;
    let translate = false;

    function setOrientation(o) {
        switch (o) {
            case "portrait":
                orientation = "portrait"
                break;

            case "landscape":
                orientation = "landscape"
                break;

            case "nopref":
                orientation = "nopref"
                break;
        }

        nextStep()
    }

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
    <div class="bg-zinc-800 w-full h-full mx-auto p-12 rounded-xl flex flex-col items-center text-white" id="function">
        {#if step == 1}
        <div class="flex flex-row w-full h-fit items-center justify-evenly">
            <h1 class="text-3xl font-bold">Step 1 - tune the parameters</h1>
            <div class="bg-zinc-900 px-12 py-2 rounded-md text-center">
                <span class="">Total time</span>
                <h1 class="text-3xl font-black w-28 text-center"> {total} min </h1>
            </div>
        </div>
        
        
        <div class="flex flex-row gap-16 items-center">
            <div class="bg-zinc-900 px-8 py-12 rounded-md mt-8 text-center">
                <span class="text-xl">Image count</span>
                <h1 class="text-3xl font-black text-gray-600"> {imageCount} </h1>
                <input class="accent-amber-500 p-2" type="range" bind:value={imageCount} min="10" max="100"/>
            </div>
            <div class="bg-zinc-900 px-8 py-12 rounded-md mt-8 text-center">
                <span class="text-xl">Image screen-time</span>
                <h1 class="text-3xl font-black text-gray-600"> {imageTime} sec</h1>
                <input class="accent-amber-500 p-2 border-sky-400" type="range" bind:value={imageTime} min="10" max="60"/>
            </div>
            <button class="py-16 px-8 font-bold bg-pink-700 text-white text-xl mt-8" on:click={nextStep}>Continue</button>
            
        </div>

        {:else if step == 2}
        <div class="flex flex-col w-full h-fit items-center justify-center">
            <h1 class="text-3xl font-bold">Step 2 - a few more parameters</h1>
            <div class="bg-zinc-900 px-12 py-2 rounded-md text-center mt-8">
                <h1 class="font-bold text-zinc-600">Image orientation</h1>

                <div class="flex flex-cow items-center justify-evenly gap-12 p-8">
                    <button class="flex flex-col items-center" on:click={() => setOrientation("portrait")}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 stroke-amber-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>
                        <span class="text-xl font-bold w-28 text-center text-zinc-300"> Portrait </span>
                    </button>
    
                    <button class="flex flex-col items-center group" on:click={() => setOrientation("landscape")}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 rotate-90 stroke-amber-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>
                        <span class="text-xl font-bold w-28 text-center text-zinc-300"> Landscape </span>
                    </button>

                    <button class="flex flex-col items-center group" on:click={() => setOrientation("nopref")}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 stroke-amber-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                        </svg>   
                        <span class="text-xl font-bold w-36 text-center text-zinc-300"> No preference </span>                       
                    </button>
                </div>
                
                
            </div>
        </div>

        

        {:else if step == 4}
            
        <h1 class="text-3xl font-bold self-start">Step 3 - choose your topic</h1>
        
        <div class="flex flex-row gap-20 items-evenly justify-evenly">
            <!-- svelte-ignore a11y-mouse-events-have-key-events -->
            <button on:mouseover={() => active = false} on:mouseover={() => translate = true} class="group bg-zinc-900 px-8 py-20 rounded-md mt-8 flex flex-col items-center justify-evenly hover:ring hover:ring-zinc-700">
                <h1 class:translate={translate} class="text-3xl font-black translate-y-4"> Specific </h1>
                <input class:active={active} bind:value={topic} on:keypress={handleKeypress} class="block text-zinc-600 font-bold border-none outline-none rounded p-2 text-center" type="text"/>
                <span class:translate={translate} class="text-xl  text-gray-600 transition -translate-y-6 ">Give me images from a certain topic</span>
            </button>

            <button class="hover:ring hover:ring-zinc-700 bg-zinc-900 px-8 py-20 rounded-md mt-8" on:click={nextStep}>
                <h1 class="text-3xl font-black"> Random </h1>
                <span class="text-xl  text-gray-600">Give me images from all topics</span>
            </button>
        </div>
            
        {:else if step == 8}

        <h1 class="text-3xl font-bold self-start">Step 3 - confirm your selections</h1>
        
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="flex flex-row gap-20 items-center justify-evenly">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div class="bg-zinc-900 px-8 py-12 rounded-md mt-8 text-cente" on:click={nextStep}>
                <span class="text-xl  text-gray-600">Image selections</span>
                <p class="text-xl font-bold text-zinc-300"> {imageCount} images  </p>
                <p class="text-xl font-bold text-zinc-300"> {imageTime} seconds  </p>
                <h1 class="text-3xl font-black drop-shadow-xl text-center"> {total} minutes </h1>
            </div>

            <!-- svelte-ignore a11y-click-events-have-key-events -->
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
        <Toolview photoTimer={imageTime} imageCount={imageCount} btopic={specificTopic} topic={topic}/>
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