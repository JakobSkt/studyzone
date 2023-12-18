<script>
    import '../app.css'
    import Calculator from '../lib/calculator.svelte';
    import heroImg from '$lib/images/morphis-glasses-smartphone-and-notebook.png'
    // import heroImg from '$lib/images/haze-school-subjects-and-items-for-studying-1.png'

</script>

<div class="hero w-screen h-screen mx-auto items-center justify-center flex flex-col">
    <div class="flex flex-row justify-center items-center">
        <div class="p-4 -ml-96">
            <img src={heroImg}/>
        </div>

        <div class="flex-col items-center justify-center">
            <!-- <h1 class="text-7xl font-bold h-20 drop-shadow bg-gradient-to-r from-blue-400 via-teal-400 to-emerald-400 text-transparent bg-clip-text"> StudyZone</h1> -->
            <h1 class="text-7xl font-bold h-20 drop-shadow text-zinc-600 dark:text-white"> StudyZone </h1>

            <p class="text-lg text-zinc-300 mb-8 font-semibold drop-shadow-sm"> Your personalized <span class="font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300 text-transparent bg-clip-text">AI-powered</span> study room</p>
        </div>
    </div>

    <a href="/zones" class="group cursor-pointer py-4 px-16 rounded-full font-bold text-white text-xl bg-gradient-to-r from-red-400 to-orange-400 transition hover:scale-105 hover:drop-shadow-lg">
        <p class=" text-white transition"> Create my zone </p>
    </a>

    <div class="absolute flex flex-row gap-16 bottom-0 m-20 dark:stroke-white dark:text-white">
        <div class="flex flex-row gap-4 p-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <p> Choose your preferred asthetic </p>
        </div>

        <div class="flex flex-row gap-4 p-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
            </svg>
              
            <p> Select your favourite tune </p>
        </div>

        <div class="flex flex-row gap-4 p-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
            </svg>
            <p> Get help from our chatbot <span class="text-xs font-black bg-gradient-to-r from-red-400 to-orange-400 text-transparent bg-clip-text text-center self-center">PRO</span></p>
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

    @media (prefers-color-scheme: dark) {
        .hero {
            background-color: theme(colors.cyan.950);
        }
    }


</style>