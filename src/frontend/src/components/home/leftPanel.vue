<script setup>
    import Button from 'primevue/button';
</script>

<template>
    <body>
        <div class="contenedor">
        <div class="boton">
            <img src="../icons/pitufo.jpg" class="icono">
            <Button label="Inicio" link />
        </div>
        
        <div class="boton">
            <img src="../icons/Cuentas.jpg" class="icono">
            <Button label="Cuenta" link />
        </div>
        
        <div class="boton">
            <img src="../icons/bob.jpg" class="icono">
            <Button label="Retiros" link />
        </div>
        
        <div class="boton">
            <img src="../icons/Deposito.jpg" class="icono">
            <Button label="Depositos" link />
        </div>

        <div class="boton">
            <img src="../icons/Comision.jpg" class="icono">
            <Button label="Comisiones" link />
        </div>
        
    </div>
    </body>
    
</template>

<style>
.body {
    background-color: #D52B1E;
}
.icono{
    width: 75px;
    height: 75px;
}
</style>