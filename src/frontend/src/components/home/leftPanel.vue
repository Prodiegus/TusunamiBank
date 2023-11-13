<script setup>
    import Button from 'primevue/button';
    
</script>

<template>
    <div class="primaldiv">
        <card class="contenedor">
            <div>
                <div>
                    <img src="../icons/pitufo.jpg" class="icono">
                    <Button class="boton" label="Inicio" link />
                </div>
                
                <div>
                    <img src="../icons/Cuentas.jpg" class="icono">
                    <Button class="boton" label="Cuenta" link />
                </div>
                
                <div>
                    <img src="../icons/bob.jpg" class="icono">
                    <Button class="boton" label="Retiros" link />
                </div>
                
                <div>
                    <img src="../icons/Deposito.jpg" class="icono">
                    <Button class="boton" label="Depositos" link />
                </div>

                <div>
                    <img src="../icons/Comision.jpg" class="icono">
                    <Button class="boton" label="Comisiones" link />
                </div>
            
            </div>
        </card>
    </div>
    
        
    
    
</template>

<style>
.boton{
    color:#ffffff;
}
.contenedor{
    background-color: #D52B1E;
    display:flex;
    height: 100%;
    width: 100%;
    flex: 1;
    margin: 0;
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
</style>