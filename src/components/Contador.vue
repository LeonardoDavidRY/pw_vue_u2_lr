<template>
  <div>
    <h1>{{ tit }}</h1>
    <p>{{ numero }} <sup>2</sup> = {{ calculaCuadrado }}</p>
    <p>{{ numero }} <sup>2</sup> = {{ calculaCuadrado }}</p>
    <p>{{ numero }} <sup>2</sup> = {{ calculaCuadrado }}</p>
    <p>{{ numero }} <sup>3</sup> = {{ calculaCubo }}</p>
    <p>{{ numero }} <sup>3</sup> = {{ obtenerCubo() }}</p>
    <div>
      <button v-on:click="incrementar()">Incrementar +1</button>
      <button v-on:click="decrementar()">Decrementar -1</button>

      <button v-if="mostrar">Prueba</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numero: this.inicio,
      titulo: "Mi Contador",
    };
  },
  methods: {
    obtenerCuadrado() {
      console.log("Entro a obtener cuadrado...");
      return this.numero * this.numero;
    },
    obtenerCubo() {
      console.log("Entro a obtener cubo...");
      return this.numero * this.numero * this.numero;
    },
    incrementar() {
      console.log(this.tit);
      this.numero++;
    },
    decrementar() {
      this.numero--;
    },
  },
  computed: {
    calculaCuadrado() {
      console.log("Entro a calcular cuadrado propiedad computada...");
      return this.numero * this.numero;
    },
    calculaCubo() {
      console.log("Entro a calcular cubo propiedad computada...");
      return this.numero * this.numero * this.numero;
    },
  },
  /*props: ["tit", "inicio", "mostrar"],*/
  props: {
    tit: String,
    inicio: {
      type: Number,
      default: 99,
      validator(value) {
        return value > 10;
      },
    },
    mostrar: Boolean,
  },
  /* String, Number, Boolean, Object, Date, Function, BigInt*/
};
</script>

<style>
</style>