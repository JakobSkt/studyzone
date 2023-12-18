<script>
    import '../../app.css'
    import Calculator from '../../lib/calculator.svelte';
</script>

<div class="hero w-screen h-screen flex flex-col justify-start items-center pb-20 mb-48 bg-zinc-100">
    
    <div class="w-fit h-fit p-12 mt-12 text-slate-600">
        <h1 class="text-5xl font-bold">Available StudyZones</h1>
        <span class="text-gray-400"> Choose between the 3 predefined rooms or create your own  </span>
    </div>

    <div class="h-fit w-2/3 flex flex-row gap-16 justify-center items-center">
        <div class="group px-8 py-20 bg-zinc-200 backdrop-blur-xl rounded-xl drop-shadow-sm hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-red-400 to-orange-400 hover:shadow-red-400/50 transition" id="lofiCard">
            <div class="flex flex-col gap-2 justify-start ">
                <h1 class="text-3xl font-bold text-white group-hover:text-zinc-600"> Vibrant LoFi</h1>
                <div class="flex flex-row gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6 group-hover:stroke-zinc-600 stroke-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
                    </svg>
                    <p class="group-hover:text-zinc-600 text-white"> LoFi beats </p>                  
                </div>
                <div class="flex flex-row gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6 group-hover:stroke-zinc-600 stroke-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    <p class="group-hover:text-zinc-600 text-white"> Landscapes and cozy scenes </p>                
                </div>
    
            </div>
        </div>
        <div class="group px-8 py-20 bg-zinc-200 backdrop-blur-xl rounded-xl drop-shadow-sm hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-zinc-950 to-zinc-700 hover:shadow-zinc-700/50 transition" id="darkCard">
            <div class="flex flex-col gap-2 justify-start ">
                <h1 class="text-3xl font-bold text-white "> Dark asthetics </h1>
                <div class="flex flex-row gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6  stroke-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
                    </svg>
                    <p class=" text-white"> Dark beats </p>                  
                </div>
                <div class="flex flex-row gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6  stroke-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    <p class=" text-white"> Dark scenes ... </p>                
                </div>
    
            </div>
        </div>

        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/3bevTxSrGdh3qShUcODtxE?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    
    <!-- <Calculator /> -->

</div>

<style lang="postcss">
    :global(html) {
        font-family: 'Figtree', sans-serif;
        scroll-behavior: smooth;
    }

    #darkCard:hover {
        background-image: url($lib/images/darkLofi.jpg);
        background-size: cover;
    }

    #lofiCard:hover {
        background-image: url($lib/images/lofi.jpg);
        background-size: cover;

    }

</style>