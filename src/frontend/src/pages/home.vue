<!-- Esta pagina es la pagina principal del usuario logeado-->
<!-- Permite interaccionar con las funcionalidades de la app-->
<!-- Otorga al usuario la opcion cambio de sucursal y otras visualizaciones de datos-->

<script setup>
import topPanel from '../components/home/topPanel.vue';
import leftPanel from '../components/home/leftPanel.vue';
import mainPanel from '../components/home/mainPanel.vue';




</script>

<template>
    <div>
        <Row>
            <topPanel></topPanel>
        </Row>
        <Row>
            
            <Column>
                <leftPanel></leftPanel>
            </Column>
            <Column>
                <mainPanel></mainPanel>
            </Column>
        </Row>
    </div>
</template>

<style scoped></style>
