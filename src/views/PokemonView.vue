<template>
  <div class="centrar-container">
    <PokemonImagen v-if="mostrarComponente && pokemonGanador" :pokemonId="pokemonGanador" />
    <PokemonOpciones
      v-on:seleccionado="evaluarGanador($event)"
      :listaPokemons="pokemonArr"
    />
    <p v-if="mensaje" class="mensaje-resultado">{{ mensaje }}</p>
    <button @click="destruirComponente()">Destruir</button>
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
      mostrarComponente: true,
    };
  },
  /*Crea el componente */
  beforeCreate() {
    console.log(
      "BeforeCreate de PokemonView: Apenas inicia la instancia del componente"
    );
  },
  created() {
    console.log(
      "Created de PokemonView: Cuando ya se ha ejecutado Data, computed, methods, watch"
    );
  },
  /* Cuando se monta el componente: Cuando ya se renderiza o se visualiza el componente*/
  beforeMount() {
    console.log(
      "BeforeMount de PokemonView: Justo Antes de que se renderice el componente"
    );
  },

  mounted() {
    console.log(
      "Mounted de PokemonView: Cuando ya se ha renderizado el componente"
    );
    this.iniciarJuego();
  },
  /* Actualizacion de un componente */
  beforeUpdate() {
    console.log(
      "BeforeUpdate de PokemonView: cuando cambió data/props y vue esta por re-renderizar el DOM"
    );
  },
  updated() {
    console.log(
      "Updated de PokemonView: Ya se actualiza tras la re -renderización del DOM"
    );
  },
  /* Desmontaje de un componente */
  beforeUnmount() {
    console.log(
      "BeforeUnmount de PokemonView: Justo antes de que el componente sea destruido"
    );
  },
  unmounted() {
    console.log(
      "Unmounted de PokemonView: Cuando ya fue removido del DOM y destruido"
    );
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
    destruirComponente() {
      this.mostrarComponente = false;
      this.$emit("destruir-componente");
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