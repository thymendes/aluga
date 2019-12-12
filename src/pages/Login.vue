<template>
  <q-page padding class="back">
    <div class="row q-ma-md">
      <h5 class="col-7 q-mb-xs text-bold">Bem Vindo,</h5>
      <q-btn class="col-5" flat to="cadastre" color="secondary" label="Cadastre-se" />
      <h8 class="col-7 q-mb-xl">Faça login para continuar</h8>
    </div>
     <q-form class="row q-ma-md">
        <q-input class="col-12" v-model="email" filled float-label label="E-mail" type="email" ></q-input>
        <q-input class="col-12 q-mt-md" v-model="password" float-label label="Senha" filled :type="isPwd ? 'password' : 'text'">
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            ></q-icon>
          </template>
        </q-input>
       <div class="col-12 q-my-md text-right">
         <a href="#">Esqueceu a senha?</a>
       </div>
        <q-btn align="center" class="btn col-12 justify-center q-mt-md" color="secondary" label="LOGIN" />
     </q-form>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data () {
    return {
      password: '',
      email: '',
      isPwd: true
    }
  }
}
</script>
