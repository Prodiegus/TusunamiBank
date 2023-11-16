<!-- Esta pagina es la pagina principal del usuario logeado-->
<!-- Permite interaccionar con las funcionalidades de la app-->
<!-- Otorga al usuario la opcion cambio de sucursal y otras visualizaciones de datos-->

<script setup>
    import topPanel from '../components/home/topPanel.vue';
    import leftPanel from '../components/home/leftPanel.vue';
    import mainPanel from '../components/home/mainPanel.vue';




</script>

<template>
    <div class="main">
        <Row>
            <topPanel></topPanel>
        </Row>
        <Row class="contenedor">
            <Column class="item">
                <leftPanel></leftPanel>
            </Column>
            <Column class="item">
                <mainPanel></mainPanel>
            </Column>
        </Row>
    </div>
</template>

<style scoped>
.main{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    background-color: #d52b1e;
}
.contenedor{
    display: flex;
    width: 100%;
    height: 100%;
}
.item{
    flex: 1;
    margin: 0;
}

</style>
