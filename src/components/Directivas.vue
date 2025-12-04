<template>
  <div>
    <label for="id_nombre">Nombre</label>
    <input type="text" id="id_nombre" v-model="nombre" />
    <p>{{ nombre }}</p>

    <label for="id_apellido">Apellido</label>
    <input type="text" id="id_apellido" v-model="apellido" />

    <button v-on:click="imprimirNombre()">Imprimir Nombre</button>
    <button v-on:click="agregarEstudiante()">Agregar estudiante</button>
    <h1>{{ arreglo[0] }}</h1>
    <hr />

    <label for="id_nombre_1">Nombre: </label>
    <input type="text" id="id_nombre_1" v-model="nombre1" />
    <label for="id_apellido_1">Apellido: </label>
    <input
      v-on:keypress.enter="agregarEstudiante1"
      type="text"
      id="id_apellido_1"
      v-model="apellido1"
    />

    <ul>
      <li
        v-show="nombre !== null"
        v-for="{ nombre, apellido } in arreglo"
        :key="nombre"
      >
        {{ nombre }} - {{ apellido }}
      </li>
    </ul>
    <h2>Tabla</h2>
    <table border="1">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-show="nombre !== null"
          v-for="{ nombre, apellido } in arreglo"
          :key="nombre"
        >
          <td>{{ nombre }}</td>
          <td>{{ apellido }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: null,
      apellido: null,
      nombre1: null,
      apellido1: null,
      arreglo: [],
    };
  },
  methods: {
    imprimirNombre() {
      console.log(this.nombre);
    },
    agregarEstudiante() {
      const estu = {
        nombre: this.nombre,
        apellido: this.apellido,
      };
      console.log("Se agrega estudiante");
      console.log(estu);
      this.arreglo.push(estu);
      this.limpiarFormlario();
    },
    limpiarFormlario() {
      this.nombre = null;
      this.apellido = null;
    },
    limpiarFormlario1() {
      this.nombre1 = null;
      this.apellido1 = null;
    },
    agregarEstudiante1(event) {
      const estu2 = {
        nombre: this.nombre1,
        apellido: this.apellido1,
      };
      console.log("evento keypress");
      if (event.keyCode !== 13) {
        return;
      }
      this.arreglo.push(estu2);
      this.limpiarFormlario1();
      console.log("Presiono Enter");
      console.log("Se agrega estudiante 1");
      console.log(event);
      console.log(event.charCode);
      console.log(event.keyCode);
    },
  },
};
</script>

<style>
</style>