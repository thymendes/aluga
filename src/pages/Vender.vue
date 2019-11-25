<template>
  <q-page>
    <!-- Imagem -->
    <div id="seletorimg">
      <div class="row">
        <q-icon class="q-ma-lg row"
      name="keyboard_arrow_left"
      v-for="size in ['md']"
        :key="size"
        :size="size"
        />
      <q-icon class="q-ma-lg row col 6 justify-end"
      name="add_a_photo"
       v-for="size in ['md']"
        :key="size"
        :size="size"
      />
      </div>
      <div class="fit row wrap justify-center items-center content-center">clique para adicionar foto</div>
    </div>
    <div class="column q-ma-md ">
    <p class="text-secondary text-h6">Título do produto</p>
    <div class="q-gutter-md" style="max-width: 300px">
      <q-input v-model="text" label="Digite o título" />
    </div>
    <p class="text-secondary text-h6">Descrição do produto</p>
    <div class="q-gutter-md" style="max-width: 300px">
      <q-input
      v-model="text"
      filled
      type="textarea"
    />
    </div>
    <p class="text-secondary text-h6">Locais para Entrega e Devolução</p>
    <div class="q-gutter-md" style="max-width: 300px">
      <q-input v-model="text" label="Digite o primeiro local" />
    </div>
    <div class="q-gutter-md" style="max-width: 300px">
      <q-input v-model="text" label="Digite o segundo local" />
    </div>
    <p class="text-secondary text-h6">Valor da diária</p>
    <div class="q-gutter-md" style="max-width: 300px">
      <q-input v-model="text" label="Digite valor" />
    </div>
    <p class="text-secondary text-h6">Valor do seguro</p>
    <div class="q-gutter-md" style="max-width: 300px">
      <q-input v-model="text" label="Digite valor" />
    </div>
     <div class="q-gutter-md" style="max-width: 300px">
       <q-btn color="secondary" label="Postar" />
    </div>
  </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      text: ''
    }
  }
}
</script>
<style lang="sass" scoped>
#seletorimg
    display: block
    background-repeat: no-repeat
    background-position: center
    height: 470px
    max-width: 400px
    background:(187, 188, 189)
</style>
