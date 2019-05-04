<template>
  <v-layout
    row
    wrap
    :class="{
      'pa-4': $vuetify.breakpoint.smAndDown,
      'ma-3 pa-5': $vuetify.breakpoint.mdAndUp
    }"
  >
    <v-flex
      xs12
      sm4
      :class="{
        title: $vuetify.breakpoint.xs,
        'display-1': $vuetify.breakpoint.smAndDown,
        'display-2': $vuetify.breakpoint.mdAndUp
      }"
    >
      <div>My</div>
      <div>Characters</div>
      <v-divider class="my-3 line"></v-divider>
    </v-flex>
    <v-flex xs12 sm8>
      <v-layout row wrap>
        <v-flex xs6 sm4 v-for="(item, index) in items" :key="index">
          <v-hover class="clickable">
            <v-card
              slot-scope="{ hover }"
              class="mx-auto ma-1 card-image"
              max-width="100%"
            >
              <v-img
                :aspect-ratio="2 / 3"
                :src="doGetImage(item.image.name, item.image.token)"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out darkblue darken-4 v-card--reveal white--text"
                    :class="{
                      caption: $vuetify.breakpoint.smAndDown,
                      title: $vuetify.breakpoint.mdAndUp
                    }"
                    style="height: 100%;"
                  >
                    {{ item.name }}
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text
                v-if="$vuetify.breakpoint.mdAndDown"
                class="text-xs-center pa-2"
              >
                <div class="font-weight-bold caption">{{ item.name }}</div>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import data from '@/services/data/AboutMe'
import { getImageFromStore } from '@/services/functions/Services'
export default {
  computed: {
    items() {
      return data ? data.characters : []
    }
  },
  methods: {
    doGetImage(name, token) {
      return getImageFromStore(name, token)
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
