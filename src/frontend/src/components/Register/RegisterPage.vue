<template>
<div class="registro-container">
    <div class="image-container">
        <h1 style="color: #ee451b">Bancos<br>Tusunami</h1>
        <img src="https://trello.com/1/cards/654d83f9682db5e91c4b4d00/attachments/654ff6e5f6f7c785ecf36ba5/previews/654ff6e6f6f7c785ecf36bbd/download/pngwing.com.png" alt="Imagen de fondo" width="510" height="510"/>
    </div>
    <div class="form-container">
        <h2  style="color:#103ed4">Crear cuenta</h2>
        <v-btn size="medium">
        Iniciar sesión con <br>google
    </v-btn>
    <br><br>
    <v-btn size="medium">
        Iniciar sesión con <br> facebook
    </v-btn>
    <form @submit.prevent="login">
    <div class="input-container">
        <label style="color:#103ed4" for="username">Nombre Completo:</label>
        <input type="text" id="username" v-model="completeName" required>
    </div>
    <div class="input-container">
        <label style="color:#103ed4" for="rut">Rut:</label>
        <input type="text" id="rut" v-model="rut" required>
    </div>
    <div class="input-container">
        <label style="color:#103ed4" for="password">Correo electrónico:</label>
        <input type="password" id="correo electronico" v-model="email" required>
    </div>
    <div class="input-container">
        <label style="color:#103ed4" for="password">Contraseña:</label>
        <input type="password" id="password" v-model="password" required>
    </div>
    <div class="input-container">
        <label style="color:#103ed4" for="password">Sucursal:</label>
        <input type="password" id="sucursal" v-model="sucursal" required>
    </div>
    <v-btn  block color="#ee451b" type="submit" @click="crearUsuario" >Registrar</v-btn>
    <div>
        <h3 style="color:#103ed4">¿Ya tienes cuenta? 
        <router-link to="login">Iniciar Sesión</router-link> 
        <br><br>
    </h3>
    </div>
    </form>
    </div>
    </div>
  </template>
  
  <script>
    import API from '@/API.js';
  export default {
    data() {
      return {
        completeName: '',
        rut: '',
        email: '',
        password: '',
        sucursal: '',
      };
    },
    methods: {
        async crearUsuario(){
            const nombre = this.completeName.split(' '); 
            const numeroDeUsuarios = await API.getNumeroUsuarios();
            await API.addUsuario({ 
                    "nombres":nombre[0]+ " " + nombre[1],
                    "apellidoPaterno": nombre[2],
                    "apellidoMaterno": nombre[3],
                    "email": this.email.toLowerCase(),
                    "rut": this.rut,
                    "password": this.password,
                    "sucursal": this.sucursal,
                    "idUsuario": numeroDeUsuarios + 1
                })
            console.log('Creando usuario...');
        },
      login() {
        // Lógica de inicio de sesión
        console.log('Iniciando sesión...');
      },
    }
  };
  </script>
  
  <style setup>

  h1{
    font-size: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight:bolder;
    text-align: center;

  }
.registro-container {
    display:flex;
    justify-content: center;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.image-container {
    flex: 1;
    padding: 50px;
}

.image-container img {
}

.form-container {
    flex: 1;
    padding-left: 150px;
    padding-right: 150px;
    padding-bottom: 30px;
    padding-top: 10px;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

h2 {
    margin-top: 0;
    font-weight:bolder;
    align-items: center;
    justify-content: center;
    font-weight:bolder;
    text-align: center;
}

  /* Estilos para los campos de entrada */
.input-container {
    margin-bottom: 15px;
    text-align: left;
    text-decoration: underline;
    text-decoration-color: #103ed4;
}

label {
    display: block;
    font-weight: bold;
}

input[type="text"],
input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #0d60c0;
    border-radius: 5px;
}

  /* Estilo para el botón de inicio de sesión */
button {
    background-color: #ee451b;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    text-align: center;
    
}

button:hover {
    background-color: #ee451b;
}

.redirigir{
    display: inline;
}
body{
    background-color:#c7c7c7 ;
}
</style>