<template>
  <div class="view-container">
    <!-- <ContadorView /> -->
     <h2>Prueba</h2>
    <DirectivasView />
  </div>
</template>

<script>
import ContadorView from "../src/views/ContadorView.vue";
import DirectivasView from "../src/views/DirectivasView.vue";
export default {
  components: {
    ContadorView,
    DirectivasView,
  },
};
</script>

<style scoped>
.view-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
h2{
  font-size: 50px;
}
</style>

