<template>
  <div class="view-container">
    <!-- <ContadorView /> -->
    <!--<DirectivasView /> -->
    <PreguntaView />
  </div>
</template>

<script>
import ContadorView from "../src/views/ContadorView.vue";
import DirectivasView from "../src/views/DirectivasView.vue";
import PreguntaView from "./views/PreguntaView.vue";

export default {
  components: {
    ContadorView,
    DirectivasView,
    PreguntaView,
  },
};
</script>

<style scoped>
.view-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
h2 {
  font-size: 50px;
}

</style>

