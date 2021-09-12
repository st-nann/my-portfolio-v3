<template>
  <v-row
    :class="{
      'pt-3 px-15': $vuetify.breakpoint.smAndUp,
      'pb-6 px-6': $vuetify.breakpoint.xs
    }"
  >
    <v-col cols="12" class="mb-3">
      <v-row no-gutters>
        <v-col cols="12" class="elevation-24">
          <v-carousel
            class="elevation-0"
            :show-arrows="false"
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
              :src="doGetImage(item.name)"
              class="carousel-item offwhite"
            ></v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
      <WhoAmI></WhoAmI>
    </v-col>
  </v-row>
</template>

<script>
import data from '@/services/data/AboutMe'
import { getFileFromStore } from '@/services/functions/Services'
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
    doGetImage(name) {
      return getFileFromStore(name)
    }
  }
}
</script>

<style lang="stylus">
.carousel-item .v-image__image--cover
  background-size: contain
</style>
