<template>
  <!-- <Navigation></Navigation> -->
  <div class="container mx-auto">
    <Hero></Hero>
    <Doelgroep></Doelgroep>
    <Research></Research>
    <Insights></Insights>
    <Concepten></Concepten>
    <ConceptKeuze></ConceptKeuze>
    <OntwerpVraag></OntwerpVraag>
    <OntwerpRichtlijnen></OntwerpRichtlijnen>
    <Concept></Concept>
    <Eerste></Eerste>
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
import OntwerpVraag from "./components/OntwerpVraag.vue";
import OntwerpRichtlijnen from "./components/OntwerpRichtlijnen.vue";
import Concept from "./components/Concept.vue";
import Eerste from "./components/Eerste.vue";

export default {
  name: "App",
  components: {
    // Navigation,
    Hero,
    Doelgroep,
    Research,
    Insights,
    Concepten,
    ConceptKeuze,
    OntwerpVraag,
    OntwerpRichtlijnen,
    Concept,
    Eerste
  },
};
</script>

<style>
</style>
