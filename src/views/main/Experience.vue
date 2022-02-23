<template>
  <v-row class="pb-8 px-4">
    <v-col cols="12" xs="12" md="10" offset-md="1">
      <v-card class="px-4 pb-15 elevation-8">
        <v-row justify="center">
          <v-col
            cols="12"
            xs="12"
            sm="11"
            :class="{
              'mb-15': $vuetify.breakpoint.xs,
              'my-15': $vuetify.breakpoint.smAndUp
            }"
          >
            <v-card color="offwhite" class="border-card-title" flat>
              <v-img
                :src="doGetImage(title.name)"
                :lazy-src="doGetImage(title.name)"
                width="100%"
              />
            </v-card>
          </v-col>
          <v-col cols="12" xs="11" lg="10">
            <v-row v-for="(item, index) in experience" :key="index" no-gutters>
              <v-col cols="12" lg="8" offset-lg="2">
                <v-card class="ma-0" flat>
                  <v-row :id="item.id" no-gutters>
                    <v-col cols="3" xs="3" class="text-center">
                      <v-icon>mdi-clock-outline</v-icon>
                      <p>{{ item.datetime }}</p>
                    </v-col>
                    <v-col cols="1" xs="1">
                      <v-divider class="mt-3 grey lighten-1"></v-divider>
                    </v-col>
                    <v-col cols="8" xs="8" class="border-card">
                      <v-card class="px-3 pb-3 pt-1" flat>
                        <p
                          class="mb-0 text-subtitle-1 grey--text text--darken-2 font-weight-bold"
                        >
                          {{ item.title }}
                        </p>
                        <p
                          v-if="item.subtitle"
                          class="mb-0 text-body-2 grey--text text--darken-4"
                        >
                          <v-icon :size="14">room</v-icon>
                          {{ item.subtitle }}
                        </p>
                        <div
                          v-for="(subitem, subindex) in item.detail"
                          :key="subindex"
                          class="grey--text text--darken-1 small mt-2"
                        >
                          <p v-if="subitem.position" class="mb-0">
                            <span
                              class="grey--text text--darken-1 font-weight-bold"
                            >
                              {{ subitem.position }}
                            </span>
                          </p>
                          <p class="mb-0" v-html="subitem.description" />
                        </div>
                        <a
                          v-if="item.link"
                          :href="
                            item.link.type === 'website'
                              ? item.link.route
                              : doGetFile(
                                  item.link.route.name,
                                  item.link.route.extension
                                )
                          "
                          target="_blank"
                        >
                          {{ item.link.display_text }}
                        </a>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" lg="2" class="hidden-md-and-down">
            <v-list>
              <v-list-item
                v-for="(item, index) in preriod"
                :key="index"
                :class="{
                  'list-active': target === item.id
                }"
                @click="doScroll(item.id)"
              >
                <v-list-item-content>
                  <v-list-item-title v-text="item.year"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import data from '@/services/data/Experience'
import { getFileFromStore } from '@/services/functions/Services'

export default {
  data() {
    return {
      target: `year_${new Date().getFullYear()}`
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
    doGetImage(name) {
      return getFileFromStore(name)
    },
    doGetFile(name, extension) {
      return getFileFromStore(name, extension)
    },
    doScroll(target) {
      this.target = target
      this.$vuetify.goTo(`#${target}`, { offset: 75 })
    }
  }
}
</script>

<style lang="stylus" scoped>
.list-active
  border-left: solid 3px #e0b265
  color: #e0b265 !important

.border-card
  border-left: solid 1px #9d9d9d
  border-radius: 0

@media only screen and (max-width: 320px)
  .mobile-title
    margin-left: 0px !important
</style>
