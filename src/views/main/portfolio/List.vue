<template>
  <v-row class="px-1 py-3">
    <v-col cols="12">
      <v-row align-center>
        <v-col cols="12" xs="12" order-xs-2 sm="6" order-sm-1 lg="4">
          <v-text-field
            id="search"
            v-model="search"
            class="search"
            placeholder="Search"
            background-color="lightblue"
            append-icon="search"
            :height="30"
            single-line
            hide-details
            solo
            flat
          />
        </v-col>
        <v-spacer></v-spacer>
        <v-col
          cols="12"
          xs="12"
          order-xs-1
          sm="6"
          order-sm-2
          lg="8"
          class="text-right px-2 pb-2"
        >
          <div
            class="clickable font-weight-bold lightblue--text text--darken-4"
            @click="see_all = !see_all"
          >
            {{ see_all ? 'hidden' : 'see all' }}
          </div>
        </v-col>
      </v-row>
      <div
        v-if="lists.length === 0"
        class="grey--text text--darken-2 text-center"
      >
        no data available
      </div>
      <v-container v-else class="px-0" grid-list-lg fluid>
        <v-row :class="{ 'px-3': $vuetify.breakpoint.smAndUp }" dense>
          <v-col
            v-for="(item, index) in lists"
            :key="index"
            cols="12"
            xs="12"
            sm="4"
            md="3"
            lg="2"
          >
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
                <v-row row>
                  <v-col cols="12">
                    <div class="text-subtitle-1 font-weight-bold">
                      {{ item.title }}
                    </div>
                    <div class="text-body-2 grey--text text--darken-1">
                      {{ item.subtitle }}
                    </div>
                    <div class="text-body-2 my-2 grey--text text--darken-2">
                      <v-icon color="grey darken-2" :size="10">
                        mdi-shape-plus
                      </v-icon>
                      {{ item.type }}
                    </div>
                  </v-col>
                  <v-col cols="12">
                    <v-img
                      class="portfolio-image"
                      :src="doGetImage(item.image.icon.name)"
                      :lazy-src="doGetImage(item.image.icon.name)"
                      width="60px"
                    />
                  </v-col>
                </v-row>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
      <PortfolioDetail ref="detail" :data="data"></PortfolioDetail>
    </v-col>
  </v-row>
</template>

<script>
import _ from 'lodash'
import data from '@/services/data/Portfolio'
import { getFileFromStore } from '@/services/functions/Services'
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
      if (this.selected) {
        if (this.search === '') {
          return data[this.selected]
        }
        return _.filter(data[this.selected], item =>
          _.includes(_.lowerCase(item.title), _.lowerCase(this.search))
        )
      }
      return []
    }
  },
  components: {
    PortfolioDetail
  },
  methods: {
    doGetImage(name) {
      return getFileFromStore(name)
    },
    doOpenModal(item) {
      this.data = item
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
