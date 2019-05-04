<template>
  <v-layout
    row
    wrap
    :class="{
      'pa-5': $vuetify.breakpoint.smAndUp,
      'pa-3': $vuetify.breakpoint.xs
    }"
  >
    <v-flex xs12 class="mb-3">
      <v-layout row wrap>
        <v-flex xs12 class="elevation-24">
          <v-carousel
            class="elevation-0"
            :interval="8000"
            :touch="{
              left: () => swipe('Left'),
              right: () => swipe('Right')
            }"
            cycle
            dark
            hide-delimiters
          >
            <v-carousel-item
              v-for="(item, index) in items"
              :key="index"
              :src="doGetImage(item.name, item.token)"
              class="carousel-item offwhite"
            ></v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs12>
      <WhoAmI></WhoAmI>
    </v-flex>
  </v-layout>
</template>

<script>
import data from '@/services/data/AboutMe'
import { getImageFromStore } from '@/services/functions/Services'
import WhoAmI from '@/views/main/aboutme/WhoAmI'

export default {
  components: {
    WhoAmI
  },
  computed: {
    items() {
      return data ? data.carousel : []
    }
  },
  methods: {
    doGetImage(name, token) {
      return getImageFromStore(name, token)
    }
  }
}
</script>

<style lang="stylus">
.carousel-item .v-image__image--cover
  background-size: contain
</style>
