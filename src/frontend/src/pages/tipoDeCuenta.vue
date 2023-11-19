<template>
	<body>

		<v-container class="main">

			<h1>¿Que cuenta deseas contratar?</h1>

			<v-row class="planes justify-center">

				<v-col cols="3" style="min-width: 33%;">
					<v-card class="plan">
						<v-card-title class="titulo">Plan n1</v-card-title>
						<v-card-item class="imagen"><img src="/plan1.jpeg" alt="Logo"
								style="width: 100%;height: 300px;"></v-card-item>
						<v-btn block rounded="lg" style="background-color:#d52b1e ; color: white;">Contratar</v-btn>
					</v-card>
				</v-col>

				<v-col cols="3" style="min-width: 33%;">
					<v-card class="plan">
						<v-card-title class="titulo">Plan n2</v-card-title>
						<v-card-item class="imagen"></v-card-item>
						<v-btn block rounded="lg" style="background-color:#d52b1e ; color: white;">Contratar</v-btn>
					</v-card>
				</v-col>

				<v-col cols="3" style="min-width: 33%;">
					<v-card class="plan">
						<v-card-title class="titulo">Plan n3</v-card-title>
						<v-card-item class="imagen"><img src="/plan3.jpg" alt="Logo"
								style="width: 100%;height: 300px;"></v-card-item>
						<v-btn block rounded="lg" style="background-color:#d52b1e ; color: white;">Contratar</v-btn>
					</v-card>
				</v-col>

			</v-row>

		</v-container>

	</body>
</template>
  
<style scoped>

body {
	background-color: white;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
}

.main {
	height: 100vh;
}

h1 {
	color: black;
	font-size: xx-large;
	padding-bottom: 3%;
	text-align: center;
}

.planes {
	text-align: center;
}

.plan {
	background-color: #0139a6;
	border-radius: 10px;
	padding: 10%;
}

.titulo {

	color: white;
	font-size: x-large;
}

.imagen {
	height: 500px;
}
</style>