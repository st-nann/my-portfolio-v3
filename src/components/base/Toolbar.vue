<template>
  <v-app-bar app fixed light flat color="white">
    <v-app-bar-nav-icon @click.native.stop="updateToggleSidebar()" />
    <v-spacer class="hidden-sm-and-up"></v-spacer>
    <v-toolbar-title>
      <a href="/">
        <img class="mt-2 logo" :src="logo" alt="image" />
      </a>
    </v-toolbar-title>
    <v-divider class="mx-4 hidden-xs-only" inset vertical></v-divider>
    <h2 class="hidden-xs-only">Sanyanee</h2>
    <v-spacer class="hidden-xs-only"></v-spacer>
    <v-btn
      v-for="(item, index) in menu"
      :key="index"
      class="menu font-weight-bold hidden-md-and-down"
      append
      :to="{ path: item.route }"
      color="black"
      :ripple="false"
      text
    >
      <span :class="{ 'text-decoration': $route.path === item.route }">
        {{ item.name }}
      </span>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapActions } from 'vuex'
import data from '@/services/data/Base'

export default {
  data() {
    return {
      menu: data.menu
    }
  },
  computed: {
    logo() {
      return process.env.VUE_APP_LOGO_BLACK
        ? process.env.VUE_APP_LOGO_BLACK
        : ''
    }
  },
  methods: {
    ...mapActions('components', ['updateToggleSidebar'])
  }
}
</script>

<style lang="stylus">
.menu.v-btn--active:before,
.menu.v-btn:hover:before,
.menu.v-btn:focus:before
  background-color: transparent
</style>
