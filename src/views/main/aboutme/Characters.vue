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
      sm="4"
      :class="{
        'text-h4': $vuetify.breakpoint.xs,
        'text-h5': $vuetify.breakpoint.smAndDown,
        'text-h3': $vuetify.breakpoint.mdAndUp
      }"
    >
      <div>My</div>
      <div>Characters</div>
      <v-divider class="my-3 line"></v-divider>
    </v-col>
    <v-col cols="12" xs="12" sm="8">
      <v-row>
        <v-col
          cols="12"
          xs="6"
          sm="4"
          v-for="(item, index) in items"
          :key="index"
        >
          <v-hover class="clickable">
            <v-card
              slot-scope="{ hover }"
              class="mx-auto ma-1 card-image"
              max-width="100%"
            >
              <v-img :aspect-ratio="2 / 3" :src="doGetImage(item.image.name)">
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out darkblue darken-4 v-card--reveal white--text"
                    :class="{
                      'text-body-2': $vuetify.breakpoint.smAndDown,
                      'text-h5': $vuetify.breakpoint.mdAndUp
                    }"
                    style="height: 100%;"
                  >
                    {{ item.name }}
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text
                v-if="$vuetify.breakpoint.mdAndDown"
                class="text-center pa-2"
              >
                <div class="font-weight-bold text-body-2">{{ item.name }}</div>
              </v-card-text>
            </v-card>
          </v-hover>
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
    items() {
      return data ? data.characters : []
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
