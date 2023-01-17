<template>
  <!-- <Navigation></Navigation> -->
  <div class="container mx-auto">
    <Hero></Hero>
    <Doelgroep></Doelgroep>
    <Research></Research>
  </div>
</template>

<script>
// import Navigation from './components/Navigation.vue'
import Hero from "./components/Hero.vue";
import Doelgroep from "./components/Doelgroep.vue";
import Research from "./components/Research.vue";

export default {
  name: "App",
  components: {
    // Navigation,
    Hero,
    Doelgroep,
    Research
  },
};
</script>

<style>
</style>
