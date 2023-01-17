<template>
  <div class="flex justify-center">
    <img src="../assets/proces.png" />
  </div>
  <section class="text-white body-font bg-primary" style="padding-bottom: 300px;">
    <div
      class="
        container
        mx-auto
        flex
        px-5
        py-24
        items-center
        justify-center
        flex-col
      "
    >
      <div class="text-center w-1/3">
        <h1 class="title-font text-3xl mb-4 font-medium">Ons onderzoek</h1>
        <p class="mb-8 leading-relaxed text-lg">
          Tijdens de onderzoeksfase hebben we uitgebreid onderzoek gedaan naar
          de digitale stad, de (huidige) metaverse, en de kennis en ervaring van
          onze doelgroep met deze onderwerpen. Dit gehele onderzoek is te
          downloaden.
        </p>
        <div class="flex justify-end">
          <button
            class="
              ml-4
              inline-flex
              text-primary
              bg-gray-100
              border-0
              py-2
              px-6
              focus:outline-none
              hover:bg-gray-200
              rounded
              text-lg
            "
          >
            Download onderzoeksverslag
          </button>
        </div>
      </div>
    </div>
</section>
<div class="flex flex-col md:flex-row" style="margin-top: -275px">
    <img class="mr-5 mb-4 md:mb-0" src="../assets/onderzoek3.png" />
    <img src="../assets/onderzoek2.png" />
</div>
</template>

<script>
export default {
  name: "ResearchComponent",
};
</script>
