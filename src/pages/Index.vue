<template>
      <q-page>
        <!-- Carousel -->
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="teal"
        navigation
        padding
        arrows
        height="300px"
        class="bg-primary text-teal shadow-1 rounded-borders"
      >
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <q-icon name="search" size="56px" />
          <div class="q-mt-md text-center">
            {{ alugue }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <q-icon name="attach_money" size="56px" />
          <div class="q-mt-md text-center">
            {{ venda }}
          </div>
        </q-carousel-slide>
      </q-carousel>
         <!--card-->
      <div class="row fit row wrap justify-center items-start content-start">
        <div class="col-5 col-md-3 q-ma-sm">
          <q-card class="my-card">
          <q-img
          :src="require('assets/iphone.png')"
          :ratio="1"
        />

          <q-list>
            <q-item clickable to="produto">
              <q-item-section>
                <q-item-label>iPhone 8</q-item-label>
                <q-item-label caption>R$150</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
        </div>
        <!-- cards -->
        <!--card-->
        <div class="col-5 col-md-3 q-ma-sm">
          <q-card class="my-card">
          <q-img
          :src="require('assets/mala.jpg')"
          :ratio="1"
        />

          <q-list>
            <q-item clickable>
              <q-item-section>
                <q-item-label>Mala</q-item-label>
                <q-item-label caption >R$200</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
        </div>
        <!-- card -->
        <!--card-->
        <div class="col-5 col-md-3 q-ma-sm">
          <q-card class="my-card">
         <q-img
          :src="require('assets/watch.jpg')"
          :ratio="1"
        />

          <q-list>
            <q-item clickable>
              <q-item-section>
                <q-item-label>Watch Samsung</q-item-label>
                <q-item-label caption >R$80</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
        </div>
        <!-- card -->
        <!--card-->
        <div class="col-5 col-md-3 q-ma-sm">
          <q-card class="my-card">
         <q-img
          :src="require('assets/vestido.jpg')"
          :ratio="1"
        />

          <q-list>
            <q-item clickable>
              <q-item-section>
                <q-item-label>Vestido de Casamento</q-item-label>
                <q-item-label caption >R$300</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
        </div>
        <!-- card -->
        <!--card-->
        <div class="col-5 col-md-3 q-ma-sm">
          <q-card class="my-card">
         <q-img
          :src="require('assets/tv.jpg')"
          :ratio="1"
        />

          <q-list>
            <q-item clickable>
              <q-item-section>
                <q-item-label>TV 55</q-item-label>
                <q-item-label caption >R$200</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
        </div>
        <!-- card -->
        <!--card-->
        <div class="col-5 col-md-3 q-ma-sm">
          <q-card class="my-card">
         <q-img
          :src="require('assets/vara.jpg')"
          :ratio="1"
        />

          <q-list>
            <q-item clickable>
              <q-item-section>
                <q-item-label>Vara de Pesca</q-item-label>
                <q-item-label caption >R$100</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
        </div>
        <!-- card -->
        <!--card-->
        <div class="col-5 col-md-3 q-ma-sm">
          <q-card class="my-card">
         <q-img
          :src="require('assets/cortador.jpg')"
          :ratio="1"
        />

          <q-list>
            <q-item clickable>
              <q-item-section>
                <q-item-label>Cortador de Grama</q-item-label>
                <q-item-label caption >R$130</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
        </div>
        <!-- card -->
        <!--card-->
        <div class="col-5 col-md-3 q-ma-sm">
          <q-card class="my-card">
         <q-img
          :src="require('assets/casaco.jpg')"
          :ratio="1"
        />

          <q-list>
            <q-item clickable>
              <q-item-section>
                <q-item-label>Casaco de Frio </q-item-label>
                <q-item-label caption >R$110</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
        </div>
        <!-- card -->
        <!--card-->
        <div class="col-5 col-md-3 q-ma-sm">
          <q-card class="my-card">
         <q-img
          :src="require('assets/churrasqueira.jpg')"
          :ratio="1"
        />

          <q-list>
            <q-item clickable>
              <q-item-section>
                <q-item-label>Churrasqueira</q-item-label>
                <q-item-label caption >R$80</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
        </div>
        <!-- card -->
      </div>
      </q-page>
</template>
<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      slide: 'style',
      alugue: 'Alugue o que você precisa de pessoas perto de você ao invés de comprar.',
      venda: 'Ganhe dinheiro alugando objetos que você não usa mais.'
    }
  }
}
</script>
