<template>
  <section class="bg-primary py-6 sm:py-8 lg:pt-16 lg:pb-32">
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
  <section class="flex flex-row justify-center text-primary" style="margin-top: -125px;">
    <div>
      <img src="../assets/eerste/blokjes.png" style="width: 350px; height: auto" />
      <h3 class="my-4 text-xl font-bold">Blokjes</h3>
      <p>De houten blokjes stellen assets voor die de gebruiker plaatst</p>
    </div>
    <div>
      <img src="../assets/eerste/kaart.png" style="width: 350px; height: auto" />
      <h3 class="my-4 text-xl font-bold">Kaart</h3>
      <p>Op de uitgeprinte kaart kan de gebruiker deze assets plaatsen.</p>
    </div>
    <div>
      <img src="../assets/eerste/scherm.png" style="width: 350px; height: auto" />
      <h3 class="my-4 text-xl font-bold">Scherm</h3>
      <p>Op het scherm kan de gebruiker zijn digitale wijk zien veranderen.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "EersteComponent",
};
</script>