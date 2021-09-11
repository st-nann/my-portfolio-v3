<template>
  <v-row
    :class="{
      'pa-4': $vuetify.breakpoint.smAndDown,
      'ma-3 pa-5': $vuetify.breakpoint.mdAndUp
    }"
  >
    <v-col
      cols="12"
      xs="12"
      lg="4"
      :class="{
        'text-h4': $vuetify.breakpoint.xs,
        'text-h5': $vuetify.breakpoint.smAndDown,
        'text-h3': $vuetify.breakpoint.mdAndUp
      }"
    >
      <div>My</div>
      <div>Interest</div>
      <v-divider class="my-3 line"></v-divider>
    </v-col>
    <v-col cols="12" xs="12" lg="8">
      <v-row class="text-center">
        <v-col xs="6" md="4" v-for="(item, index) in interests" :key="index">
          <v-progress-circular
            :size="150"
            :width="1"
            :rotate="-90"
            :value="100"
            color="cinnamon"
            class="text-center"
          >
            <v-img
              :src="doGetImage(item.image.name)"
              :lazy-src="doGetImage(item.image.name)"
              width="100px"
            />
            <v-card-text class="text-body-2 mb-1 pl-1 font-weight-bold">
              {{ item.name }}
            </v-card-text>
          </v-progress-circular>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import data from '@/services/data/AboutMe'
import { getFileFromStore } from '@/services/functions/Services'
export default {
  computed: {
    interests() {
      return data ? data.interests : []
    }
  },
  methods: {
    doGetImage(name) {
      return getFileFromStore(name)
    }
  }
}
</script>

<style lang="stylus" scoped>
.line
  width: 100px
  border: 2px solid #000000

.v-card--reveal
  align-items: center
  bottom: 0
  justify-content: center
  opacity: .5
  position: absolute
  width: 100%

.card-image
  border-radius: 3px
</style>
