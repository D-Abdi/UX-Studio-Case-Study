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
    </section>
    <section class="text-primary body-font" style="margin-top: -175px">
      <div class="container px-5 py-12 mx-auto">
        <div class="flex flex-wrap justify-center sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src="../assets/Derde/scherm.png"
              />
            </div>
          </div>
          <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src="../assets/Derde/tafel.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="px-4 md:px-8 mx-auto">
        <!-- text - start -->
        <div class="my-10 md:my-16 text-center w-1/3 mx-auto text-primary">
          <h2 class="text-lg font-bold text-center mb-4 md:mb-6">
            Na het ontwerpen van een wijk wordt het ontwerp geupload op een
            speciale site van de gemeente. Op deze website zijn ook creaties van
            andere wijkbewoners te zien. In de toekomst kan je deze creaties
            downloaden zodat je in VR, AR of via je computer door de gemaakte
            wijk kan wandelen.
          </h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "DerdeComponent",
};
</script>
