<template>
  <v-layout row wrap class="pa-4">
    <v-flex xs12 md10 offset-md1>
      <v-card class="px-4 pt-4 pb-5 elevation-8">
        <v-layout row wrap justify-center>
          <v-flex
            xs12
            sm11
            :class="{
              'mb-5': $vuetify.breakpoint.xs,
              'my-5': $vuetify.breakpoint.smAndUp
            }"
          >
            <v-card color="offwhite" class="elevation-5 border-card-title">
              <img :src="doGetImage(title.name, title.token)" width="100%" />
            </v-card>
          </v-flex>
          <v-flex xs11 lg10>
            <v-layout row wrap v-for="(item, index) in experience" :key="index">
              <v-flex lg8 offset-lg2>
                <v-card class="ma-0" flat>
                  <v-layout row wrap :id="item.id">
                    <v-flex xs3 class="text-xs-center">
                      <v-icon>room</v-icon>
                      <p>{{ item.datetime }}</p>
                    </v-flex>
                    <v-flex xs1>
                      <v-divider class="mt-3 grey lighten-1"></v-divider>
                    </v-flex>
                    <v-flex xs8 class="border-card">
                      <v-card class="pa-3" flat>
                        <p class="mb-0 subheading grey--text text--darken-2">
                          <b>{{ item.title }}</b>
                        </p>
                        <p class="mb-0 caption grey--text text--darken-4">
                          {{ item.subtitle }}
                        </p>
                        <div class="grey--text text--darken-1 small mt-2">
                          <p class="mb-0">{{ item.description }}</p>
                          <a v-if="item.link" :href="item.link" target="_blank">view</a>
                        </div>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex lg2 class="hidden-md-and-down">
            <v-list>
              <v-list-tile
                v-for="(item, index) in preriod"
                :key="index"
                :class="{
                  'list-active': target === item.id
                }"
                @click="doScroll(item.id)"
              >
                <v-list-tile-content>
                  <v-list-tile-title v-text="item.year"></v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import data from '@/services/data/Experience'
import { getImageFromStore } from '@/services/functions/Services'

export default {
  data () {
    return {
      target: 'year_2016'
    }
  },
  computed: {
    title() {
      return data.title
    },
    experience() {
      return data.experience
    },
    preriod() {
      return data.preriod
    }
  },
  methods: {
    doGetImage(name, token) {
      return getImageFromStore(name, token)
    },
    doScroll: function (target) {
      this.target = target
      this.$vuetify.goTo(`#${target}`, { offset: 75 })
    }
  }
}
</script>

<style lang="stylus" scoped>
.list-active
  border-left: solid 3px #e0b265
  color: #e0b265

.border-card
  border-left: solid 1px #9d9d9d
  border-radius: 0

.border-card-title
  border-radius: 15px !important

@media only screen and (max-width: 320px)
  .mobile-title
    margin-left: 0px !important
</style>
