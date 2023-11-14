<!-- Parte superior del index (landing page) aqui podrian colocar iconos o botones de navegación-->
<!-- Desde aqui se accede al login mediante el componente indexModalLogin-->
<script setup>
import indexModalLogin from './indexModalLogin.vue';
import Dialog from 'primevue/dialog';
import { ref } from "vue";

const visible = ref(false);

</script>

<template>
    <v-container>
        <v-row justify-end style="background-color: white;">
            <v-btn
                placeholder="Iniciar Sesión"
                icon="pi pi-external-link"
                @click="visible = true"
                style="background-color: orange;"
            />
            <Dialog
                v-model:visible="visible"
                modal
                :style="{ width: '100rem', height: '100rem', backgroundColor: 'white' }"
            >
                <indexModalLogin />
            </Dialog>
        </v-row>
    </v-container>
</template>