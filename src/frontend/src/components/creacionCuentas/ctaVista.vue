<template>
      <div class="columna1">
        <div style="height: 80vh;background-color: white;border-radius: 30px;">
          <div class="fila" style="color:#0f45ab;text-align: left; margin-top: 30px;font-weight: 800;font-size: 30px;">
            Crear Cuenta Vista
            </div>
          <div class="fila">      
                <img src="https://trello.com/1/cards/65580134806d32daf11db3ad/attachments/655a939cb9d13cdfd65def49/previews/655a939db9d13cdfd65df04f/download/pic3b1era-meme.png">          
            <div class="input-container">
              <p> 
                <p for="miCuadroDeTexto" style="color: #0f45ab;font-weight: 700;">La cuenta Vista es la más limitada (para rotos), con un limite de saldo de $2,500,000,
                lo que significa que no puedes realizar depósitos sobre ese monto. Asimismo, no pueden realizarse retiros por debajo de $0 pesos, y solo los primeros 4 retiros
                son gratuitos. Cada retiro posterior tiene un costo de $400 pesos.
                </p>
              </p>
            </div>
          </div>
          <div class="fila">
            <button class="boton-contratar">Contratar</button>
          </div>
      
          <div class="fila" style="color: #0f45ab;font-weight: 800;">
            <p>¿Aun no confias? <a href="#"><router-link to="/home">Volver atras</router-link></a></p>
        </div>
    </div>
      
    </div>

  </template>
  
  <script>
  </script>
  
  <style >
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
img{
    width: 300px;
    float: right;
}
.container-titulo-2{
    margin-bottom: 20px;
    text-align: end;
    width: 100%;
    float: right;
}
  
  .contenedor {
    height: 100%;
    background-color: #d9d9d9;
    
  }

  .columna1 {
    background-color: #d9d9d9;
    padding: 20px;
    width: 100%
  }

  .fila {
    margin-top: 0px;
    margin-bottom: 0px;
    padding: 40px;
  }
  
  
  .input-container {
    margin-bottom: 20px;
    width: 50%;
  }
  
  .boton-contratar {
    
    margin: 0 auto;
    padding: 10px 150px;
    background-color: #ff0000;
    color: #ffffff;
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
      .floating-alert {
        position: fixed;
        top: 85%; /* Puedes ajustar la posición vertical según tus necesidades */
        right: 2%;
        transform: translateY(-50%);
      }
  </style>