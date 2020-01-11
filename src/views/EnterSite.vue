<template>
  <transition name="fade">
    <v-layout row wrap>
      <v-flex xs12 lg8>
        <img class="ma-2 logo" :src="logo" />
        <v-layout row wrap>
          <v-flex
            xs12
            offset-xs0
            lg8
            offset-lg2
            :class="{
              'ml-3 pr-2': $vuetify.breakpoint.xs,
              'ml-5 pr-3':
                $vuetify.breakpoint.mdAndDown && !$vuetify.breakpoint.xs
            }"
          >
            <div
              class="black--text"
              :class="{
                'font-size-65': $vuetify.breakpoint.xs,
                'font-size-112': $vuetify.breakpoint.smAndUp,
                'title-mobile text-xs-right font-weight-bold':
                  $vuetify.breakpoint.mdAndDown,
                'mt-5 pt-5 font-weight-regular': $vuetify.breakpoint.lgAndUp
              }"
            >
              sanyanee
            </div>
            <div
              class="pl-1"
              :class="{
                caption: $vuetify.breakpoint.xs,
                'text-xs-right': $vuetify.breakpoint.mdAndDown
              }"
            >
              サンヤーネィ・タビンボンラック
            </div>
            <div class="hidden-md-and-down">
              <v-btn
                class="elevation-1 mt-4 ml-1"
                append
                :to="{ path: '/aboutme' }"
                color="cinnamon"
                outline
                round
                dark
              >
                KNOW MORE
                <v-icon class="pl-2" size="17">
                  mdi-arrow-right-bold-circle-outline
                </v-icon>
              </v-btn>
            </div>
            <v-img
              class="bg-img-mobile hidden-lg-and-up"
              width="100%"
              :src="
                doGetImage(
                  'home%2Fhome',
                  '51d79b5e-e9a3-4414-ab6a-8c77bdfae8e2'
                )
              "
              :lazy-src="
                doGetImage(
                  'home%2Fhome',
                  '51d79b5e-e9a3-4414-ab6a-8c77bdfae8e2'
                )
              "
              style="z-index: 1;"
            />
            <v-layout row wrap class="pl-1 pb-2 font-size-10 hidden-lg-and-up">
              <v-flex xs7>
                <v-layout row wrap>
                  <v-flex xs12 class="subheading">
                    {{ aboutme.birthday.year }} -
                  </v-flex>
                  <v-flex xs12>{{ aboutme.fullname }}</v-flex>
                  <v-flex xs12>{{ aboutme.position }}</v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs5 class="text-xs-right">
                <v-divider vertical></v-divider>
                <v-btn
                  class="button-mobile mx-0"
                  append
                  :to="{ path: '/aboutme' }"
                  color="cinnamon"
                  flat
                  dark
                  small
                >
                  KNOW MORE
                  <v-icon class="pl-2" size="16">
                    mdi-arrow-right-bold-circle-outline
                  </v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
            <v-layout
              row
              wrap
              class="pt-5 mt-5 text-xs-right hidden-md-and-down text-xs-right"
            >
              <v-flex xs12 class="pt-5 mt-5 title">
                - {{ aboutme.birthday.year }}
              </v-flex>
              <v-flex xs12>{{ aboutme.fullname }}</v-flex>
              <v-flex xs12>{{ aboutme.position }}</v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 lg4 class="text-xs-right hidden-md-and-down">
        <v-img
          width="505.3px"
          :src="
            doGetImage('home%2Fhome', '51d79b5e-e9a3-4414-ab6a-8c77bdfae8e2')
          "
          :lazy-src="
            doGetImage('home%2Fhome', '51d79b5e-e9a3-4414-ab6a-8c77bdfae8e2')
          "
        />
      </v-flex>
    </v-layout>
  </transition>
</template>

<script>
import data from '@/services/data/AboutMe'
import { getImageFromStore } from '@/services/functions/Services'

export default {
  computed: {
    logo() {
      return process.env.VUE_APP_LOGO_BLACK
        ? process.env.VUE_APP_LOGO_BLACK
        : ''
    },
    aboutme() {
      return data.aboutme
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
.title-mobile
  margin-top: -35px

.button-mobile
  margin-top: -30px
</style>
