<template>
  <!-- <Navigation></Navigation> -->
  <div class="container mx-auto">
    <Hero></Hero>
    <Doelgroep></Doelgroep>
    <Research></Research>
    <Insights></Insights>
    <Concepten></Concepten>
    <ConceptKeuze></ConceptKeuze>
  </div>
</template>

<script>
// import Navigation from './components/Navigation.vue'
import Hero from "./components/Hero.vue";
import Doelgroep from "./components/Doelgroep.vue";
import Research from "./components/Research.vue";
import Insights from "./components/Insights.vue";
import Concepten from "./components/Concepten.vue";
import ConceptKeuze from "./components/ConceptKeuze.vue";

export default {
  name: "App",
  components: {
    // Navigation,
    Hero,
    Doelgroep,
    Research,
    Insights,
    Concepten,
    ConceptKeuze
  },
};
</script>

<style>
</style>
