<template>
  <q-layout view="hhr lpR fff">

    <q-header class="q-header" height-hint="98">
      <q-toolbar class="bg-primary text-teal">
        <!-- logo -->
        <q-toolbar-title class="q-ma-md">
          <img src="~assets/logo.png" width="220px" alt="Aluga Fácil">
        </q-toolbar-title>
          <q-btn dense flat round icon="menu" @click="right = !right" />
        </q-toolbar>
      <!-- busca -->
  <div class="q-mx-lg q-ml-lg q-mb-lg">
    <div class="q-pa" style="max-width: 300px">
         <q-input standout rounded="bg-grey-1 text-white" v-model="text" label="Buscar" />
    </div>
  </div>
      <!-- Barra de Menus-->
      <div id="tabs">
      <q-tabs align="left q-ml-lg">
        <q-route-tab to="/vender" label="Vender" />
        <q-route-tab to="/cadastre" label="Cadastro" />
        <q-route-tab to="/login" label="Login" />
      </q-tabs>
      </div>
    </q-header>
    <!-- drawer -->
     <q-drawer show-if-above v-model="right" side="right" behavior="mobile"
        :width="200"
        :breakpoint="400"
      >
        <q-scroll-area style="height: calc(100% - 221px); margin-top: 221px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item clickable v-ripple to="home">
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>

              <q-item-section>
                Home
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="produto">
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>

              <q-item-section>
                Produtos
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>

              <q-item-section>
                Sobre
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="drafts" />
              </q-item-section>

              <q-item-section>
                Contato
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" :src="require('assets/material.png')" style="height: 221px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="100px" class="q-mb-sm">
              <img src="~assets/boy-avatar.jpg">
            </q-avatar>
            <div class="text-weight-bold">Thyago Mendes</div>
            <div>@thymendes</div>
          </div>
        </q-img>
      </q-drawer>

    <!-- Conteúdo -->
    <q-page-container>
      <router-view />
    </q-page-container>
    <!-- Footer-->
    <q-footer id="Footer">
        <div id="irtopo">
          <p class="q-pa-sm fit row wrap justify-center items-start content-start">Clique para ir ao topo</p>
        </div>
        <div id="links">
          <div class="row">
           <div class="col">
            <ul id="left">
              <li>Sobre</li>
              <li>Como alugar</li>
              <li>Como postar</li>
            </ul>
            </div>
            <div class="col">
           <ul id="right">
              <li>Contato</li>
              <li>Login</li>
              <li>Cadastro</li>
            </ul>
           </div>
          </div>
        </div>
        <div id="copy">

        </div>
      </q-footer>
  </q-layout>
</template>
<!-- Estilo -->
<style lang="sass" scoped>
#irtopo
  background: rgba(79,183,154,100)
#Footer
  background: rgba(98,98,96,100)
#right
    color: rgb(255,255,255)
.row > div
#tabs
  color: white
  background: #4FB79A
</style>
<!-- Script -->
<script>
export default {
  name: 'MyLayout',
  data () {
    return {
      right: false
    }
  }

}
</script>
