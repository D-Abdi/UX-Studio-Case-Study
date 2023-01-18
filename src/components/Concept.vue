<template>
  <section class="my-24">
    <div class="px-4 md:px-8 mx-auto mb-60">
      <!-- text - start -->
      <div class="mb-10 md:mb-16 text-center w-1/3 mx-auto text-primary">
        <h2 class="text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
          Het concept
        </h2>

        <p class="max-w-screen-md md:text-lg text-center mx-auto">
          CitymakR is een VR concept waarbij Rotterdamse jongeren de digitale
          stad van Rotterdam kunnen aanpassen. Samen werken ze in VR aan het
          verbouwen van bekende plekken in Rotterdam. Door objecten zoals bomen,
          banken en lampen te plaatsen kunnen ze de stad indelen naar eigen
          zeggen.
        </p>
      </div>
    </div>

    <div class="flex flex-col justify-center bg-primary p-12">
      <img
        src="../assets/Concept/concept.png"
        class="mb-12"
        style="
          margin-top: -200px;
          box-shadow: 10px -10px #f6f6f6, -10px -10px #f6f6f6,
            15px -15px #c25458, -15px -15px #c25458;
        "
      />
      <div class="px-4 md:px-8 mx-auto">
        <!-- text - start -->
        <div class="mb-10 md:mb-16 text-center w-2/4 mx-auto text-white">
          <h2 class="text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            Een aantal aanpassingen
          </h2>

          <p class="max-w-screen-md md:text-lg text-center mx-auto">
            Dit uitgewerkte concept hebben we zo snel mogelijk getest. Hoewel de
            meeste testers het idee erg leuk vonden, kwamen er toch een aantal
            kritiekpuntjes naar voren. Voor ons zaten hier twee belangrijke
            feedback punten tussen om aan te passen. Deze lichten we hieronder
            kort toe.
          </p>
        </div>
      </div>
    </div>
    <div class="flex flex-row justify-center" style="margin-top: -60px">
      <div class="bg-white text-center text-primary w-1/3 mr-4 p-4">
        <h3 class="text-2xl lg:text-3xl mb-4 font-bold">Geen VR</h3>
        <p class="text-lg">
          Voor verschillende testers was VR een drempel. Geen ervaring, hygiene
          en fysieke klachten door gebruik kan voor onze doelgroep een probleem
          zijn. We besloten daarom om het VR aspect van ons concept te vervangen
          met een fysieke tafel. Op deze tafel worden nu objecten geplaatst.
        </p>
      </div>
      <div class="bg-white text-center text-primary w-1/3 ml-4 p-4">
        <h3 class="text-2xl lg:text-3xl mb-4 font-bold">Wijk niveau</h3>
        <p class="text-lg">
          Voor verschillende testers is er momenteel weinig toegevoegde waarde.
          Het is leuk, maar waarom zouden ze dit willen gebruiken? Daarom hebben
          we ons concept laten plaatsvinden in hun eigen wijk. Dit verhoogt de
          toegevoegde waarde omdat ze iets aanpassen wat voor hun belangrijk is.
        </p>
      </div>
    </div>
  </section>
  <section class=" body-font">
    <div
      class="
        container
        mx-auto
        flex
        px-5
        py-24
        md:flex-row
        flex-col
        items-center
      "
    >
      <div
        class="
          lg:flex-grow
          md:w-1/2
          lg:pr-24
          md:pr-16
          flex flex-col
          md:items-start md:text-left
          mb-16
          md:mb-0
          items-center
          text-center
          text-primary
        "
      >
        <h1
          class="title-font sm:text-4xl text-3xl mb-4 font-bold"
        >
          Het uiteindelijke concept
        </h1>
        <p class="mb-8 leading-relaxed">
          CitymakR is een interactieve installatie die in wijken in Rotterdam
          wordt geplaatst. Deze installatie bestaat uit een touch screen tafel
          en een scherm. Op het scherm wordt de wijk van de gebruiker
          weergegeven in een 3D model. Op de interactieve tafel kan de gebruiker
          fysieke blokken plaatsen. Hierdoor opent een keuzemenu en hierin kan
          de gebruiker verschillende objecten zoals huizen, flats, bomen, etc,
          kiezen. Op deze manier bouwt een gebruiker aan zijn eigen ideale
          wijk.
          <br />
          <br />
          Na het bouwen van je ideale wijk kan je je concept uploaden.
          Hierdoor kunnen andere wijkbewoners jou gemaakte wijk bekijken en
          beoordelen. Wanneer de digitale stad gerealiseerd wordt zal je in VR,
          AR of via je computer door de gemaakte wijken kunnen lopen.
        </p>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          class="object-cover object-center rounded"
          alt="hero"
          src="../assets/Concept/logo.png"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ConceptComponent",
};
</script>
