<!--Contenido del formulario de login-->
<!-- Debe contener la logica para redireccionar hacia home.vue si existe un login correcto-->

<script setup>
import Button from 'primevue/button';
import imgUrl from '../../assets/pinera.png';
</script>

<template>
  <div style="background-color: #d9d9d9;">
    <!DOCTYPE html>
    <html lang="es">

    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Login</title>

    </head>

    <body>

      <div class="contenedor">
        <div class="columna1">
          <!-- Contenido de la primera columna -->
          <div class="fila" style="color: red; text-align: center; font-weight:800; font-size: 40px ;">Bancos <br>Tusunami
          </div>
          <div>
            <img src="../../assets/pinera.png" alt="Logo" style="width: 100%;height: 100%;margin-top: 20px;">
          </div>
        </div>

        <div class="columna2">
          <!-- Contenido de la segunda columna -->
          <div style="height: 70vh;background-color: white;border-radius: 30px;">
            <div class="fila"
              style="text-align: center;color:#0f45ab; margin-top: 30px;font-weight: 800;font-size: 30px;">
              Inicia Sesión</div>

            <div class="fila">
              <div class="login-buttons">
                <button class="login-button google-button"><i class="pi pi-google" style="color: white"></i>Iniciar Sesión con Google</button>
                <button class="login-button facebook-button"><i class="pi pi-facebook" style="color: white"></i>Iniciar Sesión con Facebook</button>
              </div>
            </div>

            <div class="fila"
              style="text-align: center;color: #0f45ab; margin-top: 30px;font-weight: 800;font-size: 30px;">
              -o-</div>
            <div class="fila">
              <div class="input-container">
                <label for="miCuadroDeTexto" style="color: #0f45ab;font-weight: 800;">RUT:</label>
                <input type="text" id="miCuadroDeTexto" class="underline-input" name="miCuadroDeTexto">
              </div>
            </div>
            <div class="fila">
              <div class="input-container">
                <label for="miCuadroDeTexto" style="color: #0f45ab;font-weight: 800;">Contraseña</label>
                <input type="text" id="miCuadroDeTexto" class="underline-input" name="miCuadroDeTexto">
              </div>
            </div>
            <div class="fila"><button class="boton-iniciar-sesion">Iniciar Sesión</button></div>
            <div class="fila" style="color: #0f45ab;font-weight: 800;">
              <p>¿No tienes una cuenta? <a href>Registrate</a></p>
            </div>
          </div>
       
        </div>
      
      </div>
 
    </body>

    </html>
  </div>
</template>

<style >
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.contenedor {
  display: flex;
  background-color: #d9d9d9;
}

.columna1 {
  flex: 1;

  padding: 20px;
}

.columna2 {

  flex: 1;

  padding: 20px;
}

.fila {
  margin-top: 20px;
  margin-bottom: 10px;
  padding: 10px;
}

/* Estilos para el contenedor del cuadro de texto */
.input-container {
  position: relative;
  margin-bottom: 20px;
  /* Espacio entre el cuadro de texto y el siguiente elemento */
}

/* Estilos para el cuadro de texto */
.underline-input {
  width: 100%;
  border: none;
  border-bottom: 2px solid #0f45ab;
  /* Línea inferior */
  padding-bottom: 0px;
  /* Espaciado para separar la línea del texto */
  font-size: 16px;
  /* Tamaño de fuente, ajusta según sea necesario */
}




/* Estilos para el botón */
.boton-iniciar-sesion {
  display: block;
  margin: 0 auto;
  /* Centrar el botón horizontalmente */
  padding: 10px 20px;
  background-color: #ff0000;
  /* Rojo */
  color: #ffffff;
  /* Blanco */
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}





    .login-buttons {
      text-align: center;
    }

    .login-button {
      display: inline-block;
      padding: 10px 20px;
      font-size: 16px;
      margin: 5px;
      cursor: pointer;
    }

    .google-button {
      background-color: #4285F4;
      color: #ffffff;
    }

    .facebook-button {
      background-color: #3b5998;
      color: #ffffff;
    }

</style>