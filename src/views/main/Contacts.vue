<template>
  <v-row class="pb-8 px-4">
    <v-col cols="12" xs="12" sm="10" offset-sm="1">
      <v-card class="elevation-8">
        <v-row no-gutters>
          <v-col cols="12">
            <v-card
              color="darkblue"
              :height="$vuetify.breakpoint.xs ? 200 : 450"
              flat
            >
              <v-img
                :src="doGetImage(cover.name)"
                width="100%"
                :height="$vuetify.breakpoint.xs ? 200 : 450"
              />
            </v-card>
          </v-col>
          <v-col cols="12" class="pa-4">
            <v-row align="center">
              <v-col cols="12" xs="12" sm="2" class="hidden-md-and-down">
                <v-img :src="logo" :lazy-src="logo" width="90" />
              </v-col>
              <v-col cols="12" xs="12" sm="8" class="text-truncate">
                <div
                  v-for="(item, index) in contact"
                  :key="index"
                  class="word-wrap"
                >
                  <v-icon
                    :size="12"
                    style="vertical-align: baseline !important;"
                  >
                    mdi-{{ item.icon }}
                  </v-icon>
                  <a
                    v-if="item.type === 'link'"
                    class="grey--text text--darken-2 text-body-2 font-weight-thin"
                    style="text-decoration: none;"
                    :href="item.description"
                    target="_blank"
                  >
                    {{
                      item.display_text ? item.display_text : item.description
                    }}
                    <v-icon
                      :size="9"
                      style="vertical-align: middle !important;"
                    >
                      mdi-open-in-new
                    </v-icon>
                  </a>
                  <span
                    v-else
                    class="grey--text text--darken-2 text-body-2 font-weight-thin"
                  >
                    {{ item.description }}
                  </span>
                </div>
              </v-col>
              <v-spacer></v-spacer>
              <v-divider vertical class="mx-3 hidden-xs-only"></v-divider>
              <v-img
                :class="{
                  'ma-2': $vuetify.breakpoint.xs
                }"
                :src="doGetImage(qrcode.name)"
                :lazy-src="doGetImage(qrcode.name)"
                :width="$vuetify.breakpoint.xs ? 100 : 130"
                :max-width="$vuetify.breakpoint.xs ? 100 : 130"
              />
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import data from '@/services/data/Contact'
import { getFileFromStore } from '@/services/functions/Services'

export default {
  computed: {
    logo() {
      return process.env.VUE_APP_LOGO_NOTEXT_BLACK
        ? process.env.VUE_APP_LOGO_NOTEXT_BLACK
        : ''
    },
    cover() {
      return data.cover
    },
    contact() {
      return data.contact
    },
    qrcode() {
      return data.qrcode
    }
  },
  methods: {
    doGetImage(name) {
      return getFileFromStore(name)
    }
  }
}
</script>

<style lang="scss" scoped>
.v-card > :last-child:not(.v-btn):not(.v-chip):not(.v-avatar) {
  border-bottom-left-radius: none !important;
  border-bottom-right-radius: none !important;
}
</style>
