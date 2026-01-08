<template>
  <div>
    <PokemonImagen :pokemonId="5" />
    <PokemonOpciones />
  </div>
</template>

<script>
import PokemonImagen from "@/components/PokemonImagen.vue";
import PokemonOpciones from "@/components/PokemonOpciones.vue";
export default {
  components: {
    PokemonImagen,
    PokemonOpciones,
  },
};
</script>

<style>
</style>