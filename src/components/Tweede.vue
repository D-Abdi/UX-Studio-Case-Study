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
            Tweede iteratie
          </h2>

          <p class="max-w-screen-md text-white md:text-lg text-center mx-auto">
            De tweede iteratie is een mid fidelity prototype waarbij de tafel nu
            een liggend touchscreen scherm is. Op zowel de tafel als het scherm
            worden nu figma prototypes getoond die de gebruiker hun wijk laat
            bouwen. In dit prototype is de wijk “De Esch” te zien. We testen met
            de Wizard of oz methode met minstens 1 wijkbewoner van de Esch.
          </p>
        </div>
      </div>
    </section>
    <section class="text-primary body-font" style="margin-top: -175px">
      <div class="container px-5 py-12 mx-auto">
        <div class="flex flex-wrap justify-center sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src="../assets/Tweede/scherm.png"
              />
            </div>
            <h2 class="text-xl font-medium title-font mt-5">Scherm</h2>
            <p class="text-lg leading-relaxed mt-2">
              Op het scherm wordt de wijk van onze testers in een 3D model
              weergegeven. De testers zien hun wijk veranderen aan de hand van
              hun keuzes op de tafel.
            </p>
          </div>
          <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src="../assets/Tweede/tafel.png"
              />
            </div>
            <h2 class="text-xl font-medium title-font mt-5">Tafel</h2>
            <p class="text-lg leading-relaxed mt-2">
              Op de tafel is een kaart te zien van hun wijk. Door op het scherm
              te klikken kunnen onze testers hun wijk aanpassen. Achteraf kunnen
              ze dit uploaden.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="px-4 md:px-8 mx-auto">
        <!-- text - start -->
        <div class="my-10 md:my-16 text-center w-1/3 mx-auto text-primary">
          <h2 class="text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            Inzichten 2e iteratie
          </h2>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-6 text-lg">
        <div class="px-5 py-4 border mb-4 bg-primary text-white">
          Onze testers vinden het concept leuk.
        </div>
        <div class="px-5 py-4 border mb-4 bg-primary text-white">
          Onze testers willen dit alleengebruiken als ze hun eigen wijk zien.
        </div>
        <div class="px-5 py-4 border mb-4 bg-primary text-white">
          Ons concept sluit aan bij onze ontwerp richtlijnen.
        </div>
        <div class="px-5 py-4 border mb-4 bg-primary text-white">
          Gebruikers zouden andere creaties van buurtbewoners willen zien.
        </div>
        <div class="px-5 py-4 border mb-4 bg-primary text-white">
          Gebruikers zouden tijd maken om deel te nemen aan ons concept.
        </div>
        <div class="px-5 py-4 border mb-4 bg-primary text-white">
          Gebruikers kijken vooral naar de tafel en niet naar hun digitale wijk.
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "TweedeComponent",
};
</script>