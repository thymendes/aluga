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
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <q-icon name="style" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <q-icon name="live_tv" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <q-icon name="layers" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <q-icon name="terrain" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
      </q-carousel>
      <div class="row" style="max-width: 700px">
        <!--card-->
        <div class="col 6 q-pa-md">
          <q-card class="my-card">
          <img src="https://cdn.quasar.dev/img/parallax2.jpg">

          <q-list>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="red" name="local_gas_station" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Gas Station</q-item-label>
                <q-item-label caption>Fill your gas tank.</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
        </div>
        <!-- cards -->
        <!--card-->
        <div class="col 6 q-pa-md">
          <q-card class="my-card">
          <img src="https://cdn.quasar.dev/img/parallax2.jpg">

          <q-list>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="red" name="local_gas_station" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Raquete de tênis</q-item-label>
                <q-item-label caption >R$45,00 ao dia</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
        </div>
      </div>
      <div class="row" style="max-width: 700px">
        <!--card-->
        <div class="col 6 q-pa-md">
          <q-card class="my-card">
          <img src="https://cdn.quasar.dev/img/parallax2.jpg">

          <q-list>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="red" name="local_gas_station" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Gas Station</q-item-label>
                <q-item-label caption>Fill your gas tank.</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
        </div>
        <!--card-->
        <div class="col 6 q-pa-md">
          <q-card class="my-card">
          <img src="https://cdn.quasar.dev/img/parallax2.jpg">

          <q-list>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="red" name="local_gas_station" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Raquete de tênis</q-item-label>
                <q-item-label caption >R$45,00 ao dia</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
        </div>
      </div>
      <div class="row" style="max-width: 700px">
        <!--card-->
        <div class="col 6 q-pa-md">
          <q-card class="my-card">
          <img src="https://cdn.quasar.dev/img/parallax2.jpg">

          <q-list>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="red" name="local_gas_station" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Gas Station</q-item-label>
                <q-item-label caption>Fill your gas tank.</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
        </div>
        <!--card-->
        <div class="col 6 q-pa-md">
          <q-card class="my-card">
          <img src="https://cdn.quasar.dev/img/parallax2.jpg">

          <q-list>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="red" name="local_gas_station" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Raquete de tênis</q-item-label>
                <q-item-label caption >R$45,00 ao dia</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
        </div>
      </div>
      </q-page>
</template>
<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      slide: 'style',
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  }
}
</script>
