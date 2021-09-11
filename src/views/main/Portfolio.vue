<template>
  <v-layout row wrap class="pa-4">
    <v-flex xs12 md10 offset-md1>
      <TitleMenuToggle
        class="text-xs-center"
        ref="menu"
        default="coding"
        :tabs="categories"
        :disabled_class_menu="true"
      ></TitleMenuToggle>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card class="border-card-title">
            <v-img
              :src="doGetImage(cover.name, cover.token)"
              :lazy-src="doGetImage(cover.name, cover.token)"
              width="100%"
            />
          </v-card>
        </v-flex>
      </v-layout>
      <transition name="fade">
        <List :selected="selected"></List>
      </transition>
    </v-flex>
  </v-layout>
</template>

<script>
import data from '@/services/data/Portfolio'
import { getImageFromStore } from '@/services/functions/Services'
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
    doGetImage(name, token) {
      return getImageFromStore(name, token)
    }
  }
}
</script>

<style lang="stylus" scoped>
.bottom-nav
  width: auto
</style>
