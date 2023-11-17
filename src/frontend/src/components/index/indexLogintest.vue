<template>
    <v-app>
      <v-container fluid>
        <v-row align="center">
          <v-col cols="12">
            <v-row justify="center">
              <v-col>
                <v-card>
                  <v-card-title class="text-h6 text-center">
                    Hola aqui va el Login, hay que eliminar toda esta pagina (indexLogintest) y cambiarla por la otra
                  </v-card-title>
                  <v-card-text>
                    <v-row v-if="botonActivado" justify="center">
                      <v-col>
                        <v-img src="https://sm.ign.com/ign_es/news/t/the-exorci/the-exorcist-reportedly-getting-a-2021-reboot_ybaj.jpg" :width="800" :height="800"></v-img>
                      
                    
                        <v-img src="https://ih1.redbubble.net/image.5166749047.4146/pp,504x498-pad,600x600,f8f8f8.jpg" :width="800" :height="800"></v-img>
                      </v-col>
                    </v-row>
                    <!-- Se muestra el botón que cambia entre dos imágenes -->
                    <v-btn @click="mostrarImagenes" color="primary">
                      No pulses este boton 
                    </v-btn>
                    <!-- Se muestran las dos imágenes cuando el botón está activado -->
                    
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </template>
  
  <script>
  export default {
    data() {
      return {
 
        botonActivado: false
      };
    },
    methods: {
      mostrarImagenes() {
        // Activa o desactiva el botón para mostrar las imágenes
        this.botonActivado = !this.botonActivado;
      }
    }
  };
  </script>
  
  <style>
  /* Puedes agregar estilos personalizados aquí si es necesario */
  </style>
  