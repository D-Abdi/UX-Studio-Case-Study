<template>
  <section class="mt-24">
    <div class="flex justify-between" style="margin-bottom: -150px">
      <img src="../assets/Conclussie/l.png" class="h-80 w-full" />
      <img src="../assets/Conclussie/m.png" class="h-80 w-full mx-8" />
      <img src="../assets/Conclussie/r.png" class="h-80 w-full" />
    </div>
    <section class="pt-48 pb-16 bg-primary">
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
            Laatste prototype
          </h2>

          <p class="max-w-screen-md text-white md:text-lg text-center mx-auto">
            Aan de hand van de feedback van de eerdere testen hebben we een
            laatste prototype gemaakt. Dit prototype werkt compleet op zichzelf
            en gebruikt dus geen wizard of oz methode. De interactieve tafel en
            het scherm staan in verbinding via een server.
          </p>
        </div>
      </div>
      <div class="flex justify-center">
        <img src="../assets/Conclussie/x.png" class="my-24" />
      </div>
      <div class="flex justify-center">
        <img src="../assets/Conclussie/hr.png" />
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "ConclussieComponent",
};
</script>