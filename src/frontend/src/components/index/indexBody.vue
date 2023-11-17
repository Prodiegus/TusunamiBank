<script setup>
/* const registro = async () => {
  console.log('Yendo al registro')
}
const iniciarSesion = async () => {
  console.log('Yendo al inicio de sesión')
} */
</script>

<template>
  <v-app style="height: auto">
    <v-toolbar class="black">
      <img src="../icons/logo.png" alt="tusunami.png" style="height: 50px; width: 68px" />
      <div style="font-weight: bold; font-size: 28px">Banco Tusunami</div>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn class="registro" variant="tonal" to="/registro" color="black">Registrarse</v-btn>
        <v-btn class="iniciarSesion" @click="login" variant="tonal" to="/iniciarSesion" color="black">Iniciar Sesión</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <section>
        <v-parallax
          src="https://www.watsaysurfschool.com/wp-content/uploads/2021/01/como-se-forman-las-olas-1260x630.jpg"
          height="600"
          class="d-flex align-center"
        >
          <v-container class="d-flex justify-center">
            <div style="text-align: center; color: white">
              <h1 class="white--text mb-2 display-1 font-weight-bold" style="font-size: 48px">
                El mejor Banco del Mundo
              </h1>
              <div class="white--text subheading mb-3 font-weight-bold" style="font-size: 20px">
                Danos tu dinero y tus contraseñas, tu confia
              </div>
              <v-btn class="registro" variant="tonal" to="/registro" color="white ">Unirse</v-btn>
            </div>
          </v-container>
        </v-parallax>
      </section>

      <section class="my-5">
        <div>
          <div>
            <div style="text-align: center">
              <h2>¿Ya tienes cuenta?</h2>
              <span class="subheading"> SUBE A REGISTRARTE </span>
            </div>
          </div>
          <div>
            <v-container>
              <v-layout>
                <v-col>
                  <v-card class="elevation-0 transparent">
                    <v-card-title primary-title class="layout justify-center">
                      <div style="text-align: center">Seguridad y Protección</div>
                    </v-card-title>
                    <v-card-text>
                      Tu seguridad es nuestra principal preocupación. Utilizamos las tecnologías 
                      más avanzadas para proteger tu información financiera y personal. Nuestros 
                      sistemas de seguridad están diseñados para garantizar que tus transacciones 
                      sean seguras y tus datos estén protegidos en todo momento. Puedes confiar en 
                      nuestro gran general Piñera
                    </v-card-text>
                    <v-parallax
                    src="https://media.biobiochile.cl/wp-content/uploads/2018/06/bajos-de-mena-puente-alto-750x400.jpg"
                    height="600"
                    class="d-flex align-center"
                    >
                  </v-parallax>
                  </v-card>
                </v-col>
                <v-col>
                  <v-card class="elevation-0 transparent">
                    <v-card-title primary-title class="layout justify-center">
                      <div div style="text-align: center">Facilidad de Uso</div>
                    </v-card-title>
                    <v-card-text>
                      Simplificamos la banca para ti. Nuestra plataforma en línea y nuestra aplicación 
                      móvil ofrecen una interfaz intuitiva y fácil de usar, permitiéndote acceder a tus 
                      cuentas, realizar transferencias y gestionar tus finanzas con facilidad. 
                      Ahorra tiempo y energía con nuestras soluciones bancarias convenientes.
                    </v-card-text>
                    <v-parallax
                    src="https://medelhi.files.wordpress.com/2010/01/4977g_pinera.jpg"
                    height="600"
                    class="d-flex align-center"
                    >
                  </v-parallax>
                  </v-card>
                </v-col>
                <v-col>
                  <v-card class="elevation-0 transparent">
                    <v-card-title primary-title class="layout justify-center">
                      <div div style="text-align: center">Innovación Continua</div>
                    </v-card-title>
                    <v-card-text>
                      Nos esforzamos por mantenerte a la vanguardia de la innovación financiera. 
                      Constantemente actualizamos nuestras plataformas y servicios para ofrecerte lo 
                      último en tecnología bancaria. Al unirte a nosotros, te beneficiarás de las últimas 
                      tendencias y herramientas que hacen que gestionar tus finanzas sea más eficiente y 
                      emocionante.
                    </v-card-text>
                    <v-parallax
                    src="https://static.theclinic.cl/media/2019/07/pi%C3%B1era-lentes-a1.jpg"
                    height="600"
                    class="d-flex align-center"
                    >
                  </v-parallax>
                  </v-card>
                </v-col>
              </v-layout>
            </v-container>
          </div>
        </div>
      </section>

      <section>
        <v-parallax
          src="https://assets.eldesconcierto.cl/2020/04/A_UNO_1178625-1024x706.jpg"
          height="380"
          class="d-flex align-center"
        >
          <v-container class="d-flex justify-center">
            <div style="text-align: center; color: white; font-size: 24px">
              Endorfine is a social network that allows everyone to reach a huge audience with a tap
              <em
                >With the power of Endorfine you don't need to be famous or post pics of cute cats
                in order to get visibility</em
              >
              <div><v-btn class="my-5">Get more info</v-btn></div>
            </div>
          </v-container>
        </v-parallax>
      </section>

      <section>
        <v-container>
          <v-layout class="my-5">
            <div class="d-flex justify-center">
              <div class="d-flex justify-center">
                <v-col cols="4">
                  <v-card class="elevation-0 transparent">
                    <v-card-title primary-title>
                      <div class="headline">Company info</div>
                    </v-card-title>
                    <v-card-text>
                      We are not a company. We hate companies. Just imagine us like the guys from
                      the Silicon Valley series.
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="4">
                  <v-card class="elevation-0 transparent">
                    <v-card-title primary-title>
                      <div class="headline">We are hiring</div>
                    </v-card-title>
                    <v-card-text>
                      Are you a creative person? Do you like techy stuff? Complete the email form by
                      writing your skills and interests
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="4">
                  <v-card class="elevation-0 transparent">
                    <v-card-title primary-title>
                      <div class="headline">About Piñera</div>
                    </v-card-title>
                    <v-card-text>
                      Piñera es el expresidente del mejor pais de Chile , mas conocido por robarse
                      el banco de Talca (La peor ciudad de Chile) en la decada de los Ochenta.
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
              <img src="../icons/logo.png" style="height: 200px; text-align: center" />
            </div>
          </div>
        </v-container>
      </section>

      <v-footer class="d-flex justify-center my-5">
        <div>
          Acerca de nuestro salvador
          <a
            class="white--text"
            href="https://es.wikipedia.org/wiki/Sebasti%C3%A1n_Pi%C3%B1era"
            target="_blank"
            style="color: #0039a6"
          >
            Sebastian Piñera</a
          >
        </div>
      </v-footer>
    </v-content>
  </v-app>
</template>

<style scoped>
</style>
