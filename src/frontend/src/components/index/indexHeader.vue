<!-- Parte superior del index (landing page) aqui podrian colocar iconos o botones de navegación-->
<!-- Desde aqui se accede al login mediante el componente indexModalLogin-->
<script setup>
import indexModalLogin from './indexModalLogin.vue';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import { ref } from "vue";

const visible = ref(false);

</script>

<template>
    <div>
        <Button label="Show" icon="pi pi-external-link" @click="visible = true" />

        <Dialog v-model:visible="visible" modal :style="{ width: '100rem',height: '100rem' } "
            >
            <indexModalLogin></indexModalLogin>
        </Dialog>

    <h1>Aqui va el contenido del Header del landing page</h1>
    
</div></template>