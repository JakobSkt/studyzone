<script>
    import "../app.css"
    import Calculator from "../lib/calculator.svelte";
</script>

<div class="hero w-screen h-screen mx-auto items-center justify-center flex">
    <div class="flex-col items-center justify-center">
        <h1 class="text-7xl font-bold text-white"><span class="text-2xl">Meet</span> Sparks</h1>
        <p class="text-lg text-amber-500 mb-8">Forced analogy the easy way</p>

        <a href="#settings" class="p-4 text-white font-bold bg-pink-700 drop-shadow-xl">Unleash my creativity</a>
    </div>
</div>

<div class="page2 w-screen h-fit flex flex-col justify-start items-center pb-20 mb-48">
    
    <div class="w-fit h-fit p-12 mt-96 text-white">
        <h1 class="italic text-5xl ">forced analogy</h1>
        <span class="text-gray-400">a method for establishing forced relations between charactaristics, attributs, concepts or objects </span>
    </div>
    
    <Calculator />

</div>


<style lang="postcss">
    :global(html) {
        background-color: theme(colors.cyan.950);
        font-family: 'Figtree', sans-serif;
        scroll-behavior: smooth;
    }

    .hero {
        background-image: url("$lib/images/layered-waves-haikei.svg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }

    .page2 {
        background-image: url("$lib/images/layered-waves-haikei-topdown.svg");
        background-repeat: no-repeat;
        background-size: cover;
    }



</style>