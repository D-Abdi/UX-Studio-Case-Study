<template>
  <div class="my-24">
  <section class="bg-primary lg:pt-16 pb-32">
    <div class="px-4 md:px-8 mx-auto">
      <!-- text - start -->
      <div class="my-10 md:my-16 text-center w-1/3 mx-auto">
        <h2
          class="
            text-white text-2xl
            lg:text-3xl
            font-bold
            text-center
            mb-4
            md:mb-6
          "
        >
          Eerste iteratie
        </h2>

        <p class="max-w-screen-md text-white md:text-lg text-center mx-auto">
          De eerste versie van het prototype is gemaakt middels een
          paperprototype in combinatie met het spel "City Skylines". City
          Skylines is een spel waar je je eigen wijk kan bouwen. We hebben dit
          gebruikt als de basis van het prototype.
        </p>
      </div>
    </div>
  </section>
  <section class="text-primary body-font" style="margin-top: -175px;">
  <div class="container px-5 py-12 mx-auto">
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="../assets/eerste/blokjes.png">
        </div>
        <h2 class="text-xl font-medium title-font mt-5">Blokjes</h2>
        <p class="text-lg leading-relaxed mt-2">De houten blokjes stellen assets voor die de gebruiker plaatst.</p>
      </div>
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="../assets/eerste/kaart.png">
        </div>
        <h2 class="text-xl font-medium title-font mt-5">Kaart</h2>
        <p class="text-lg leading-relaxed mt-2">Op de uitgeprinte kaart kan de gebruiker deze assets plaatsen.</p>
      </div>
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="../assets/eerste/scherm.png">
        </div>
        <h2 class="text-xl font-medium title-font mt-5">Scherm</h2>
        <p class="text-lg leading-relaxed mt-2">Op het scherm kan de gebruiker zijn digitale wijk zien veranderen.</p>
      </div>
    </div>
  </div>
</section>
<section>
  <div class="px-4 md:px-8 mx-auto">
      <!-- text - start -->
      <div class="my-10 md:my-16 text-center w-1/3 mx-auto text-primary">
        <h2
          class="
            text-2xl
            lg:text-3xl
            font-bold
            text-center
            mb-4
            md:mb-6
          "
        >
          Inzichten 1e iteratie
        </h2>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-6">
      <div class="px-5 py-4 border mb-4 bg-primary text-white">Onze testers vinden het concept leuk.</div>
      <div class="px-5 py-4 border mb-4 bg-primary text-white">Onze testers willen dit alleengebruiken als ze hun eigen wijk zien.</div>
      <div class="px-5 py-4 border mb-4 bg-primary text-white">Ons concept sluit aan bij onze ontwerp richtlijnen.</div>
      <div class="px-5 py-4 border mb-4 bg-primary text-white">Gebruikers zouden andere creaties van buurtbewoners willen zien.</div>
      <div class="px-5 py-4 border mb-4 bg-primary text-white">Gebruikers zouden tijd maken om deel te nemen aan ons concept.</div>
      <div class="px-5 py-4 border mb-4 bg-primary text-white">Gebruikers kijken vooral naar de tafel en niet naar hun digitale wijk.</div>
    </div>
</section>
</div>
</template>

<script>
export default {
  name: "EersteComponent",
};
</script>