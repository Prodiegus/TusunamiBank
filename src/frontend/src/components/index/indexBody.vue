<script>

export default {
    data() {
        return {
            items: [
                'indigo',
                'warning',
                'pink darken-2',
                {
                    src: 'https://trello.com/1/cards/654d83f9682db5e91c4b4d00/attachments/654ff6e5f6f7c785ecf36ba5/previews/654ff6e6f6f7c785ecf36bbd/download/pngwing.com.png',
                },
            ],
            slides: [
                'Sucursal 1',
                'Sucursal 2',
                'Sucursal 3',
                'Foto',
            ],
        }
    },
}

</script>

<template>
    <div>
        <h1 style="text-align: center;">Bienvenido!</h1>
        <h2 style="padding-bottom: 2%;">Sobre nosotros:</h2>

        <div>
            <v-carousel cycle height="400" hide-delimiter-background show-arrows="hover">
                <v-carousel-item v-for="(slide, i) in slides" :key="i">
                    <v-sheet :color="items[i]" height="100%">
                        <div class="d-flex fill-height justify-center align-bottom">
                            <div class="text-h4">
                                {{ slide }}
                            </div>
                        </div>
                    </v-sheet>
                </v-carousel-item>
            </v-carousel>

        </div>
        <div style="align-items: center;padding-top: 1%; display: grid;">

            <div style="text-align: center;">

                <div style="padding-bottom: 1%;">
                    <v-btn to="/"> login </v-btn>
                </div>

                <div style="padding-bottom: 2%;">
                    <v-btn to="/RegisterPage"> Registrarse </v-btn>
                </div>

            </div>

        </div>
    </div>
</template>