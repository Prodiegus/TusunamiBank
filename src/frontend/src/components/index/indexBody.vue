<script setup>
const registro = async () => {
  console.log("Yendo al registro");
};
const iniciarSesion = async () => {
  console.log("Yendo al inicio de sesión");
};
</script>

<template>
  <v-app style=" height: auto;">
    <v-toolbar class="white">
      <img src="../icons/logo.png" alt="tusunami.png" style="height: 50px; width: 68px;">
      <div style="font-weight:bold; font-size:28px">Banco Tusunami</div>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat @click="registro">Registrarse</v-btn>
        <v-btn flat @click="iniciarSesion">Iniciar Sesión</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <section>
        <v-parallax src="https://cooperativa.cl/noticias/site/artic/20190829/imag/foto_0000002920190829085935.jpg"
          height="600" class="d-flex align-center" style="opacity: 80%;">
          <v-container class="d-flex justify-center">
            <div style="text-align:center; color:white">
              <h1 class="white--text mb-2 display-1 font-weight-bold" style="font-size: 48px">El mejor Banco del Pais</h1>
              <div class="white--text subheading mb-3 font-weight-bold" style="font-size: 20px">Danos tu dinero, tu confia
              </div>
              <v-btn v-btn flat @click="registro">Unirse</v-btn>
            </div>
          </v-container>
        </v-parallax>
      </section>

      <section class="my-5">
        <div>
          <div>
            <div style="text-align:center">
              <h2>The best way to share your amazing stuff</h2>
              <span class="subheading">
                No more restrictions, no more limitssss
              </span>
            </div>
          </div>
          <div>
            <v-container>
              <v-layout>
                <v-col>
                  <v-card class="elevation-0 transparent">
                    <v-card-title primary-title class="layout justify-center">
                      <div style="text-align:center">Reach the world</div>
                    </v-card-title>
                    <v-card-text>
                      Show your stuff to the whole community of Endorfine not only to your mum or your friends. We love
                      making good content viral. In this moment Endorfine is used by artists who are not famous but that
                      want to share their works to the world. Unfortunately with other social networks this is hard, slow
                      and sometime expensive.
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col>
                  <v-card class="elevation-0 transparent">
                    <v-card-title primary-title class="layout justify-center">
                      <div div style="text-align:center">Fast feedback</div>
                    </v-card-title>
                    <v-card-text>
                      Time is important, we don't want you to waste it. Here you can get a massive feedback from real
                      users in minutes. And if your stuff is appreciated you won't only get positive feedback but also
                      lovely and sincere fans.
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col>
                  <v-card class="elevation-0 transparent">
                    <v-card-title primary-title class="layout justify-center">
                      <div div style="text-align:center">Create new connections</div>
                    </v-card-title>
                    <v-card-text>
                      Imagine if you can directly speak with the world's population. Don't you think it would be easier to
                      find nice people to interact with? Endorfine is both local and global and help you to connect
                      without limitations with people from your city, your state and your universe!
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-layout>
            </v-container>
          </div>
        </div>
      </section>




      <section style="background-color: beige;">
        <v-carousel hide-delimiters>
          <v-carousel-item>
            <img class="carousel-image"
              src="https://cooperativa.cl/noticias/site/artic/20190829/imag/foto_0000002920190829085935.jpg"
              alt="Imagen en el carousel" />
          </v-carousel-item>

          <v-carousel-item>
            <img class="carousel-image"
              src="https://m.cooperativa.cl/noticias/site/artic/20180914/imag/foto_0000001120180914010035.jpg"
              alt="Imagen en el carousel" />
          </v-carousel-item>

          <v-carousel-item>
            <img class="carousel-image"
              src="https://www.laizquierdadiario.cl/local/cache-vignettes/L705xH518/arton184372-b4114.jpg?1700214165D"
              alt="Imagen en el carousel" />
          </v-carousel-item>

        </v-carousel>
      </section>

      <section>
        <v-container>
          <v-layout class="my-5">
            <div class="d-flex justify-center">
              <div class="d-flex justify-center">
                <v-col cols="4" style="margin-left: 100px;">
                  <v-card class="elevation-0 transparent">
                    <v-card-title primary-title>
                      <div class="headline" style="text-align: center;">Giro Cajero automático</div>
                    </v-card-title>
                    <v-card-text style="text-align: center;">
                      Sin comisiones en giro <br> Cajero automático
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="4" style="margin-left: 100px;">
                  <v-card class="elevation-0 transparent">
                    <v-card-title primary-title>
                      <div class="headline" style="text-align: center;">Primera transferencia</div>
                    </v-card-title>
                    <v-card-text style="text-align: center;">
                      Límite de Transferencia <br>
                      $250.000
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="4" style="margin-left: 100px;">
                  <v-card class="elevation-0 transparent">
                    <v-card-title primary-title>
                      <div class="headline" style="text-align: center;">Límite diario</div>
                    </v-card-title>
                    <v-card-text style="text-align: center;">
                      Desde la segunda Transferencia <br>
                      $5.000.000
                    </v-card-text>
                  </v-card>
                </v-col>
              </div>
            </div>
          </v-layout>
        </v-container>
      </section>

      <section>
        <v-container>
          <div>
            <div class="d-flex justify-center">
              <img src="@/assets/banco.png" style="height: 200px; text-align:center">
            </div>
          </div>
        </v-container>
      </section>


      <v-footer class="d-flex justify-center my-5">
        <div>
          Acerca de nuestro salvador <a class="white--text"
            href="https://es.wikipedia.org/wiki/Sebasti%C3%A1n_Pi%C3%B1era" target="_blank" style="color:#0039A6">
            Sebastian Piñera</a>
        </div>
      </v-footer>

    </v-content>
</v-app></template>


<style scoped>
.carousel-image {
  width: 50%;
  height: 100%;
  margin-left: 25%;
}
</style>
