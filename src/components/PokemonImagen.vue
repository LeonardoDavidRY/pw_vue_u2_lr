<template>
  <div class="pokemon-container">
    <img
      :src="srcImagen"
      alt="No se puede renderizar"
    />
  </div>
</template>

<script>
export default {
    props: {
        pokemonId: {
            type: Number,
            required: true,
        }

    },
    computed: {
        srcImagen() {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
        }
    }
};
</script>

<style scoped>
.pokemon-container {
  height: 200px;
}
img {
  height: 200px;
  right: 32%;
}
</style>