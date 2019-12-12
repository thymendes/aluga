<template>
  <q-page>
    <div class="column q-ma-md">
      <p class="text-h6 q-mt-md text-weight-bold">Adicione um título ao anúncio</p>
      <q-input filled v-model="titulo" label="Título" />
      <p class="text-h6 q-mt-md text-weight-bold">Descreva o seu produto</p>
      <q-input v-model="desc" filled autogrow label="Adicione uma descrição"/>
      <p class="text-h6 q-mt-md text-weight-bold">Entrega e Devolução</p>
      <q-input class="q-my-md" v-model="local1" filled autogrow label="Digite o primeiro local"/>
      <q-input  v-model="local2" filled autogrow label="Digite o segundo local"/>
      <p class="text-h6 q-mt-md text-weight-bold">Valor da diária</p>
      <q-input v-model="valor" filled autogrow label="Adicione um valor"/>
      <p class="text-h6 q-mt-md text-weight-bold">Adicione imagens</p>
      <q-uploader
        url="http://localhost:4444/upload"
        label="Enviar imagens"
        color="grey-9"
        square
        flat
        bordered
      />
       <q-btn class="column q-my-md" color="secondary" label="Postar" />
    </div>
    <!-- Imagem -->
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      titulo: '',
      desc: '',
      local1: '',
      local2: '',
      valor: ''
    }
  }
}
</script>
<style lang="sass" scoped>
</style>
