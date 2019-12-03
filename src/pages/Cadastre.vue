<template>
  <q-page padding class="back">
    <div class="row">
      <h5 class="col-7 q-mb-xl text-bold">Cadastre-se,</h5>
    </div>
     <q-form class="row">
        <q-input class="col-12" v-model="text" filled float-label label="Nome" type="text" ></q-input>
        <q-input class="col-12 q-mt-md" v-model="email" filled float-label label="E-mail" type="email" ></q-input>
        <q-input class="col-12 q-mt-md" v-model="password" float-label label="Senha" filled :type="isPwd ? 'password' : 'text'">
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            ></q-icon>
          </template>
        </q-input>
        <q-btn align="center" class="btn col-12 justify-center q-mt-xl" color="secondary" label="LOGIN" />
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
