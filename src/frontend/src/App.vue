<!-- eslint-disable vue/valid-v-else -->
<!-- Root de la app-->
<!-- Aqui debería estar la lectura de permanencia de datos en el localstorage-->
<!-- Si no existe datos en localstorage, es porque es un usuario nuevo o se deslogueó 
      con anterioridad
-->

<script setup>
import index from './pages/index.vue';
import home from './pages/home.vue';

import { onMounted } from 'vue';
import API from '@/API.js';


// Forma de crear metodos
const addUsuario = async () => {
  await API.addUsuario();
};
// Los metodos que involucren el ciclo del programa deben ser importados primero
onMounted(() => {
  //addUsuario();
});

const newAccount = true; // Placeholder para implementar lo del localstorage despues

</script>

<template>
  <v-app>
    <index v-if="newAccount"></index>
    <home v-else></home> 
  </v-app>
</template>

<style scoped>

</style>
