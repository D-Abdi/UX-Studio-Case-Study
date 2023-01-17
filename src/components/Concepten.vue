<template>
<div class="bg-primary py-6 sm:py-8 lg:py-12">
  <div class="px-4 md:px-8 mx-auto">
    <!-- text - start -->
    <div class="mb-10 md:mb-16 text-center w-1/3 mx-auto">
      <h2 class="text-white text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">De concepten</h2>

      <p class="max-w-screen-md text-white md:text-lg text-center mx-auto">Na verschillende brainstorm methodes hebben we drie concepten gekozen die aansluiten bij de behoeftes van onze doelgroep. Samen met de opdrachtgever hebben we gekeken welk concept het beste aansluit bij de ontwerpvraag en de behoeftes van 
onze doelgroep.</p>
    </div>
    <!-- text - end -->

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-24">
      <!-- article - start -->
      <div class="flex flex-col bg-white rounded-lg overflow-hidden" style="box-shadow: -10px -10px #C25458, -15px -15px white">
        <div class="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative">
          <img src="../assets/Concepten/party.png" loading="lazy" alt="Photo by Minh Pham" class="w-full h-full object-cover object-center absolute inset-0 scale-110 transition duration-200" />
        </div>

        <div class="flex flex-col flex-1 p-4 sm:p-6 text-primary">
          <h2 class="text-lg font-semibold mb-2">
            @YourParty
          </h2>

          <p class="mb-8">@YourParty is een app waarmee Rotterdamse jongeren hun avonden uit kunnen plannen en delen met vrienden. Via AR kan gekeken worden waar clubs of 
evenementen zijn.</p>

        </div>
      </div>
      <!-- article - end -->

      <!-- article - start -->
      <div class="flex flex-col bg-white rounded-lg overflow-hidden" style="box-shadow: 0px 10px #C25458, 0px 15px white">
        <div class="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative">
          <img src="../assets/Concepten/sport.png" loading="lazy" alt="Photo by Lorenzo Herrera" class="w-full h-full object-cover object-center absolute inset-0 scale-110 transition duration-200" />
        </div>

        <div class="flex flex-col flex-1 p-4 sm:p-6 text-primary">
          <h2 class="text-lg font-semibold mb-2">
            Sportvenster
          </h2>

          <p class="mb-8">Sportvenster is een interactief scherm wat op verschillende openbare locaties in Rotterdam zal staan. Rotterdammers kunnen hier samen verschillende sporten spelen in een digitale omgeving.</p>


        </div>
      </div>
      <!-- article - end -->

      <!-- article - start -->
      <div class="flex flex-col bg-white rounded-lg overflow-hidden" style="box-shadow: 10px -10px #C25458, 15px -15px white">
        <div class="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative">
          <img src="../assets/Concepten/ar.png" loading="lazy" alt="Photo by Magicle" class="w-full h-full object-cover object-center absolute inset-0 scale-110 transition duration-200" />
        </div>

        <div class="flex flex-col flex-1 p-4 sm:p-6 text-primary">
          <h2 class="text-lg font-semibold mb-2">
            AR Spiegel
          </h2>

          <p class="mb-8">AR spiegel is een interactieve "spiegel" waar Rotterdammers zichzelf kunnen terugzien in de digitale stad. Zowel de omgeving als personen worden omgezet in digitale objecten.</p>

        </div>
      </div>
      <!-- article - end -->
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: "ConceptenComponent"
}
</script>