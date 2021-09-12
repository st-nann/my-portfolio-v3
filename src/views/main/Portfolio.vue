<template>
  <v-row class="pb-8 px-4">
    <v-col cols="12" xs="12" md="10" offset-md="1">
      <v-card class="px-4 pt-10 pb-15 elevation-8">
        <v-container grid-list-md :class="{ 'pa-0': $vuetify.breakpoint.xs }">
          <TitleMenuToggle
            class="text-center"
            ref="menu"
            default="coding"
            :tabs="categories"
            :disabled_class_menu="true"
          ></TitleMenuToggle>
          <v-row>
            <v-col cols="12">
              <v-card class="border-card-title" flat>
                <v-img
                  :src="doGetImage(cover.name)"
                  :lazy-src="doGetImage(cover.name)"
                  width="100%"
                />
              </v-card>
            </v-col>
          </v-row>
          <transition name="fade">
            <List :selected="selected"></List>
          </transition>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import data from '@/services/data/Portfolio'
import { getFileFromStore } from '@/services/functions/Services'
import TitleMenuToggle from '@/components/title/Toggle'
import List from '@/views/main/portfolio/List'

export default {
  data() {
    return {
      selected: 'coding'
    }
  },
  components: {
    TitleMenuToggle,
    List
  },
  computed: {
    categories() {
      return data.menu.categories
    },
    cover() {
      return data.cover[this.selected]
    }
  },
  mounted() {
    this.$watch(() => {
      this.selected = this.$refs.menu.selected
    })
  },
  methods: {
    doGetImage(name) {
      return getFileFromStore(name)
    }
  }
}
</script>

<style lang="stylus" scoped>
.bottom-nav
  width: auto
</style>
