<template>
  <div class="centrar-container">
    <PokemonImagen :pokemonId="pokemonGanador" />
    <PokemonOpciones
      v-on:seleccionado="evaluarGanador($event)"
      :listaPokemons="pokemonArr"
    />
    <p v-if="mensaje" class="mensaje-resultado">{{ mensaje }}</p>
  </div>
</template>

<script>
import PokemonImagen from "@/components/PokemonImagen.vue";
import PokemonOpciones from "@/components/PokemonOpciones.vue";
import {
  obtenerVectorPokemonFachada,
  obtenerAleatorioFachada,
} from "@/clients/PokemonClient.js";
export default {
  components: {
    PokemonImagen,
    PokemonOpciones,
  },
  data() {
    return {
      pokemonArr: [],
      pokemonGanador: null,
      mensaje: "",
    };
  },
  mounted() {
    console.log("Mounted de PokemonView");
    this.iniciarJuego();
  },
  methods: {
    async iniciarJuego() {
      this.mensaje = "";
      this.pokemonArr = await obtenerVectorPokemonFachada();

      const idAleatorio = obtenerAleatorioFachada(0, 3);
      this.pokemonGanador = this.pokemonArr[idAleatorio].id;
    },
    evaluarGanador(idGanador) {
      console.log("Valor recibido desde padre ");
      console.log("id del pokemon ganador " + idGanador);
      if (idGanador === this.pokemonGanador) {
        console.log("El usuario ha ganado");
        this.mensaje = "¡Has ganado!";
      } else {
        console.log("El usuario ha perdido");
        this.mensaje = "Has perdido. Inténtalo de nuevo.";
      }
    },
  },
};
</script>

<style>
.centrar-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
p {
  font-size: 24px;
  font-weight: bold;
}
.mensaje-resultado {
  margin-top: 16px;
}
</style>