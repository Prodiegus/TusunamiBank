<script setup>
    import IndexModalLogin from '../components/index/indexModalLogin.vue';
</script>

<template>
  <v-app>
    <v-app-bar>
        <header>
            <button class="p-button-rounded p-button-secondary button" @click="$router.push('/')">Salir</button> 
        </header>
    </v-app-bar>
    <v-main>
        <IndexModalLogin></IndexModalLogin>
    </v-main>
  </v-app>
</template>

<style>
/* Estilos del componente */
    .login{
        background-color: black;
    }

    .button {
        margin-left: 10px;
        display: block;
        background-color: blue;
        color: white;
    }
    .button:hover {
        background-color: #0f45ab;
    }

</style>
