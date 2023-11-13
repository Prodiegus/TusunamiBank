<script setup>
    import Button from 'primevue/button';
    
</script>

<template>
    <div class="primaldiv">
        <card class="contenedor">
            <div>
                <div>
                    <img src="../icons/pitufo.jpg" class="icono">
                    <Button class="boton" label="Inicio" :ripple="false"/>
                    <hr class="linea">
                </div>
                
                <div>
                    <img src="../icons/Cuentas.jpg" class="icono">
                    <Button class="boton" label="Cuenta" />
                    <hr class="linea">
                </div>
                
                <div>
                    <img src="../icons/Bob.jpg" class="icono">
                    <Button class="boton" label="Retiros" />
                    <hr class="linea">
                </div>
                
                <div>
                    <img src="../icons/Deposito.jpg" class="icono">
                    <Button class="boton" label="Depositos" />
                    <hr class="linea">
                </div>

                <div>
                    <img src="../icons/Comision.jpg" class="icono">
                    <Button class="boton" label="Comisiones" />
                    <hr class="linea">
                </div>
            
            </div>
        </card>
    </div> 
</template>

<style>
.boton{
    color:#ffffff;
    background-color: transparent;
    border-color: transparent;
}

.contenedor{
    background-color: #D52B1E;
    height: 100%;
    width: 100%;
}
.icono{
    width: 75px;
    height: 75px;
}
.primaldiv{
    width: 100%; 
    display: flex; 
    align-items: left;   
}
.linea{
    width: 100%;
    margin-bottom: 5%;
}
</style>