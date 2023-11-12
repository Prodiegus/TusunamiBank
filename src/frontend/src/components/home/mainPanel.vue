<script setup>
    import ScrollPanel from 'primevue/scrollpanel';
    import VirtualScroller from 'primevue/virtualscroller';
    import Image from 'primevue/image';
    import Card from 'primevue/card';
    import Button from 'primevue/button';
    const listaTransacciones = [
    { fecha: '1/09/2023', tipo: 'Deposito', sucursal: 'Islas Caiman', monto: '5000' },
    { fecha: '2/09/2019', tipo: 'Deposito', sucursal: 'Islas Caiman', monto: '2000' },
    { fecha: '3/09/2023', tipo: 'Deposito', sucursal: 'Islas Caiman', monto: '5000' },
    { fecha: '4/09/2019', tipo: 'Deposito', sucursal: 'Islas Caiman', monto: '2000' },
    
    
    // ... otros elementos ...
    ];
    const infoCuenta={
      numCuenta:'000000000',
      saldo:'Mucho',
      sucursal:'Curico'
    };
</script>
<style>

</style>
<template>
    <div style="height: 100vh; display: flex; align-items: left;">
        <row>
        <Card style="height: 100%; width: 1000px; display: flex; flex-direction: column;">
          <template #title> Cuenta Corriente </template>
          <template #content>
            <Card style="background-color: #d9d9d9; margin-bottom: 16px; text-align: left;">
              <template #content>
                Cuenta #{{ infoCuenta.numCuenta }} <br>
                Saldo: {{infoCuenta.saldo}} <br>
                Sucursal: {{infoCuenta.sucursal}}
                <div>
                    <row>
                        <Button label="Realizar Depósito"></button>
                    </row>
                    <row>
                        <Button label="Realizar Retiro"></button>
                    </row>
                </div>
              </template>
            </Card>
            <Card style="background-color: #d9d9d9;">
              <template #title> Últimas Transacciones </template>
              <template #content>
                <VirtualScroller :items="listaTransacciones" :itemSize="100" style="height: 400px;">
                  <template v-slot:item="{ item }">
                    <Card style="margin-bottom: 16px; text-align: left; border-radius: 60px;">
                      <template #content>
                        {{ item.fecha }} <br>
                        {{ item.tipo }} Sucursal {{ item.sucursal }} ${{ item.monto }}
                      </template>
                    </Card>
                  </template>
                </VirtualScroller>
              </template>
            </Card>
          </template>
        </Card>
        </row>
        <row>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Retrato_Oficial_Presidente_Pi%C3%B1era_2018.jpg/1200px-Retrato_Oficial_Presidente_Pi%C3%B1era_2018.jpg" alt="Image" width="400" />
        </row>
    </div>
  </template>
  