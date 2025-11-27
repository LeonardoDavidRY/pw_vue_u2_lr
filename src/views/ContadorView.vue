<template>
  <div>
    <Contador tit="Contador 1" :inicio="20" :mostrar="true"/>
    <Contador tit="Contador 2" :inicio="4" :mostrar="false"/>
  </div>
</template>

<script>
import Contador from "../components/Contador.vue";
export default {
  components: {
    Contador,
  },
};
</script>

<style>
</style>