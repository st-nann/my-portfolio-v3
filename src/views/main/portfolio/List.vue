<template>
  <v-layout row wrap class="px-1 py-3">
    <v-flex xs12>
      <v-layout row wrap align-center class="mt-4">
        <v-flex xs12 order-xs2 sm6 order-sm1 lg4>
          <v-text-field
            id="search"
            v-model="search"
            class="search"
            placeholder="Search"
            background-color="lightblue"
            append-icon="search"
            :height="5"
            single-line
            hide-details
            solo
            flat
          />
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex
          xs12
          order-xs1
          sm6
          order-sm2
          lg8
          class="text-xs-right px-2 pb-2"
        >
          <div
            class="clickable font-weight-bold lightblue--text text--darken-4"
            @click="see_all = !see_all"
          >
            {{ see_all ? 'hidden' : 'see all' }}
          </div>
        </v-flex>
      </v-layout>
      <div
        v-if="lists.length === 0"
        class="grey--text text--darken-2 text-xs-center"
      >
        no data available
      </div>
      <v-container v-else class="px-0" grid-list-lg fluid>
        <v-layout row wrap :class="{ 'px-3': $vuetify.breakpoint.smAndUp }">
          <v-flex v-for="(item, index) in lists" :key="index" xs12 sm4 md3 lg2>
            <v-hover v-if="see_all ? true : index < 6">
              <v-card
                slot-scope="{ hover }"
                class="card-lists pa-3 clickable"
                :class="{
                  'elevation-12': hover,
                  'card-frame': !hover
                }"
                :height="200"
                @click="doOpenModal(item)"
                flat
              >
                <v-layout row wrap>
                  <v-flex xs12>
                    <div class="subheading font-weight-bold">
                      {{ item.title }}
                    </div>
                    <div class="caption grey--text text--darken-1">
                      {{ item.subtitle }}
                    </div>
                    <div class="caption my-2 grey--text text--darken-2">
                      <v-icon color="grey darken-2" :size="10">
                        mdi-shape-plus
                      </v-icon>
                      {{ item.type }}
                    </div>
                  </v-flex>
                  <v-flex xs12>
                    <v-img
                      class="portfolio-image"
                      :src="
                        doGetImage(item.image.icon.name, item.image.icon.token)
                      "
                      :lazy-src="
                        doGetImage(item.image.icon.name, item.image.icon.token)
                      "
                      width="60px"
                    />
                  </v-flex>
                </v-layout>
              </v-card>
            </v-hover>
          </v-flex>
        </v-layout>
      </v-container>
      <PortfolioDetail ref="detail" :data="data"></PortfolioDetail>
    </v-flex>
  </v-layout>
</template>

<script>
import _ from 'lodash'
import data from '@/services/data/Portfolio'
import { getImageFromStore } from '@/services/functions/Services'
import PortfolioDetail from '@/views/main/portfolio/modal/Detail'

export default {
  props: ['selected'],
  data() {
    return {
      search: '',
      see_all: false,
      data: {}
    }
  },
  computed: {
    lists() {
      return this.selected
        ? this.search === ''
          ? data[this.selected]
          : _.filter(data[this.selected], item => {
              return _.includes(
                _.lowerCase(item.title),
                _.lowerCase(this.search)
              )
            })
        : []
    }
  },
  components: {
    PortfolioDetail
  },
  methods: {
    doGetImage(name, token) {
      return getImageFromStore(name, token)
    },
    doOpenModal(data) {
      this.data = data
      this.$refs.detail.modal = true
    }
  }
}
</script>

<style lang="stylus" scoped>
.portfolio-image
  position: absolute
  bottom: 0
  right: 0
  margin-right: 20px
  margin-bottom: 20px
</style>
