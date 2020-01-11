<template>
  <v-layout row wrap class="pa-4">
    <v-flex xs12 sm10 offset-sm1>
      <v-card class="elevation-8">
        <v-layout row wrap>
          <v-flex xs12>
            <v-card
              color="darkblue"
              :height="$vuetify.breakpoint.xs ? 200 : 450"
              flat
            >
              <v-img
                :src="doGetImage(cover.name, cover.token)"
                width="100%"
                :height="$vuetify.breakpoint.xs ? 200 : 450"
              />
            </v-card>
          </v-flex>
          <v-flex xs12 class="pa-4">
            <v-layout row wrap align-center>
              <v-flex xs12 sm2 class="hidden-md-and-down">
                <v-img :src="logo" :lazy-src="logo" width="90" />
              </v-flex>
              <v-flex xs12 sm8 class="text-truncate">
                <div v-for="(item, index) in contact" :key="index">
                  <v-icon
                    :size="12"
                    style="vertical-align: baseline !important;"
                  >
                    mdi-{{ item.icon }}
                  </v-icon>
                  <a
                    v-if="item.type === 'link'"
                    class="grey--text text--darken-2 caption font-weight-thin"
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
                    class="grey--text text--darken-2 caption font-weight-thin"
                  >
                    {{ item.description }}
                  </span>
                </div>
              </v-flex>
              <v-spacer></v-spacer>
              <v-divider vertical class="mx-3 hidden-xs-only"></v-divider>
              <v-img
                :class="{
                  'mt-2': $vuetify.breakpoint.xs
                }"
                :src="doGetImage(qrcode.name, qrcode.token)"
                :lazy-src="doGetImage(qrcode.name, qrcode.token)"
                :width="$vuetify.breakpoint.xs ? '45px' : '100px'"
              />
            </v-layout>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import data from '@/services/data/Contact'
import { getImageFromStore } from '@/services/functions/Services'

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
    doGetImage(name, token) {
      return getImageFromStore(name, token)
    }
  }
}
</script>
