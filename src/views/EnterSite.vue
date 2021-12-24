<template>
  <transition name="fade">
    <v-row no-gutters>
      <v-col cols="12" xs="12" lg="8">
        <img class="ma-2 logo" :src="logo" alt="logo" />
        <div class="d-flex">
          <v-col
            cols="12"
            xs="12"
            offset-xs="0"
            lg="8"
            offset-lg="2"
            :class="{
              'pl-8 pr-3': $vuetify.breakpoint.xs,
              'pl-15 pr-6':
                $vuetify.breakpoint.mdAndDown && !$vuetify.breakpoint.xs
            }"
          >
            <div
              :class="{
                'font-size-65': $vuetify.breakpoint.xs,
                'font-size-112': $vuetify.breakpoint.smAndUp,
                'title-mobile text-right font-weight-bold':
                  $vuetify.breakpoint.mdAndDown,
                'mt-12 pt-12 font-weight-regular': $vuetify.breakpoint.lgAndUp
              }"
            >
              sanyanee
            </div>
            <div
              class="pl-1"
              :class="{
                'text-body-2': $vuetify.breakpoint.xs,
                'text-right': $vuetify.breakpoint.mdAndDown
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
                outlined
                rounded
                dark
              >
                KNOW MORE
                <v-icon class="pl-2" size="17">
                  mdi-arrow-right-bold-circle-outline
                </v-icon>
              </v-btn>
            </div>
            <v-img
              class="hidden-lg-and-up"
              :src="doGetImage('home%2Fhome')"
              :lazy-src="doGetImage('home%2Fhome')"
              width="100%"
            />
            <v-row class="font-size-10 hidden-lg-and-up" no-gutters>
              <v-col cols="12" xs="7">
                <v-row no-gutters>
                  <v-col cols="12" class="text-h5">
                    - {{ aboutme.birthday.year }}
                  </v-col>
                  <v-col cols="12">{{ aboutme.fullname }}</v-col>
                  <v-col cols="12">{{ aboutme.position }}</v-col>
                </v-row>
              </v-col>
              <v-col cols="12" xs="5" class="text-right">
                <v-divider vertical></v-divider>
                <v-btn
                  class="button-mobile mx-0"
                  append
                  :to="{ path: '/aboutme' }"
                  color="cinnamon"
                  text
                >
                  KNOW MORE
                  <v-icon class="pl-2" size="16">
                    mdi-arrow-right-bold-circle-outline
                  </v-icon>
                </v-btn>
              </v-col>
            </v-row>
            <v-row class="pt-15 mt-15 text-right hidden-md-and-down" no-gutters>
              <v-col cols="12" class="pt-10 mt-10 text-h5 font-weight-thin">
                - {{ aboutme.birthday.year }}
              </v-col>
              <v-col cols="12">{{ aboutme.fullname }}</v-col>
              <v-col cols="12">{{ aboutme.position }}</v-col>
            </v-row>
          </v-col>
        </div>
      </v-col>
      <v-col cols="12" xs="12" lg="4" class="text-right hidden-md-and-down">
        <v-img
          width="505.3px"
          :src="doGetImage('home%2Fhome')"
          :lazy-src="doGetImage('home%2Fhome')"
        />
      </v-col>
    </v-row>
  </transition>
</template>

<script>
import data from '@/services/data/AboutMe'
import { getFileFromStore } from '@/services/functions/Services'

export default {
  computed: {
    logo() {
      return process.env.VUE_APP_LOGO_BLACK ?? ''
    },
    aboutme() {
      return data.aboutme
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
.title-mobile
  margin-top: -35px

.button-mobile
  margin-top: -40px
</style>
