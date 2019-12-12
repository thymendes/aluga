<template>
  <q-page>
  <div class="row">
    <q-img
          :src="require('assets/iphone.png')"
          :ratio="1"
        />
  </div>
  <div class="column q-ma-md justify-evenly">
    <h4>Iphone 8</h4>
      <p class="text-h6 q-mt-md text-weight-bold">Selecione as datas</p>
    <q-select class="q-mb-md" outlined v-model="date">
        <template v-slot:prepend>
          <q-icon name="event" />
        </template>
      </q-select>
      <q-select outlined v-model="devolucao">
        <template v-slot:prepend>
          <q-icon name="event" />
        </template>
      </q-select>
  </div>
  <div class="column q-ma-md ">
    <p class="text-h6 q-mt-md text-weight-bold">Detalhes do Produto</p>
      <p>iPhone 8, 64 GB, camera de 12MP</p>
      <p class="text-h6 q-mt-md text-weight-bold">Selecione o local para retirada</p>
       <q-radio keep-color v-model="color" val="teal" label="Riomar Shopping" color="teal" />
      <q-radio keep-color v-model="color" val="yellow" label="Shopping Tacaruna" color="teal" />
      <q-separator color="teal" inset />
      </div>
  <div class="row q-ma-lg">
      <div class="col-6">
        <p class="text-weight-light" >preço por dia</p>
        <p class="text-subtitle2 text-weight-bold">R$150</p></div>
      <div class="col-6 row justify-end">
        <q-btn color="teal" text-color="white" label="Alugar" to="checkout" />
      </div>
    </div>
    <q-separator color="teal" inset />
  </q-page>
</template>
<style lang="sass" scoped>
</style>
<script>
export default {
  // name: 'PageName',
  data () {
    return {
      date: '20/12/2019',
      devolucao: '22/12/2019',
      color: 'teal'
    }
  }
}
</script>
