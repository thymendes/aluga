<template>
  <q-page>
  <div class="row">
    <q-img
          :src="require('assets/iphone.png')"
          :ratio="1"
        />
  </div>
  <div class="row q-ma-md">
    <h4 style="margin-top:5px">Iphone 8</h4>
  </div>
  <div class="row q-ma-md justify-evenly">
    <q-select outlined v-model="date">
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
  <div class="row q-ma-md ">
    <h4>Detalhes do Produto</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare auctor magna, sollicitudin posuere urna sagittis et. Curabitur laoreet metus ex, sed interdum lectus porttitor sed. </p>
      <h4>Selecione o local para retirada</h4>
  </div>
  <div class="column q-ma-md">
      <q-radio keep-color v-model="color" val="teal" label="Riomar Shopping" color="teal" />
      <q-radio keep-color v-model="color" val="yellow" label="Shopping Tacaruna" color="teal" />
  </div>
    <q-separator color="teal" inset />
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
      date: 'Retirada',
      devolucao: 'Devolução',
      color: 'teal'
    }
  }
}
</script>
