<template>
  <v-navigation-drawer
    :value="toggle_sidebar"
    :width="300"
    height="100%"
    app
    persistent
    absolute
    temporary
    clipped
    enable-resize-watcher
  >
    <v-row class="text-center mx-3" no-gutters>
      <v-col cols="12" class="pt-8">
        <v-avatar class="elevation-7 avatar" color="offwhite" size="150">
          <img :src="logo" alt="avatar" />
        </v-avatar>
      </v-col>
      <v-col cols="12" class="pt-3 font-weight-bold text-h6">
        Sanyanee Thawinvongrak
      </v-col>
      <v-col
        cols="12"
        class="font-weigh-medium grey--text text--darken-3 text-text-body-2"
      >
        ネン・サンヤーネィ・タビンボンラック
      </v-col>
      <v-col
        cols="12"
        class="font-size-10 font-weigh-thin grey--text text--darken-1 text-text-body-2"
      >
        st.sanyanee@hotmail.com
      </v-col>
      <v-col cols="12" class="pt-2">
        <v-btn
          color="cinnamon"
          class="px-8"
          @click.native="updateToggleSidebar('home')"
          :to="{ path: '/' }"
          append
          rounded
          outlined
          small
        >
          Home
        </v-btn>
      </v-col>
      <v-col cols="12" class="pa-3">
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-list dense class="hidden-lg-and-up">
      <v-list-item
        v-for="(item, index) in menu"
        :key="index"
        :to="{ path: item.route }"
        append
      >
        <v-list-item-content class="mx-5">
          <v-list-item-title class="grey--text text--darken-1">
            <v-icon
              class="pr-1"
              :class="{
                'font-weight-bold darkblue--text': item.route === $route.path
              }"
              color="grey"
              size="17"
            >
              mdi-{{ item.icon }}
            </v-icon>
            <span
              :class="{
                'font-weight-bold darkblue--text': item.route === $route.path
              }"
            >
              {{ item.name }}
            </span>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-row justify-space-around class="pa-4">
      <v-col cols="12" xs="11">
        <v-row no-gutters>
          <v-col xs="4" v-for="(item, index) in images" :key="index">
            <v-img
              :src="doGetImage(item.name)"
              :lazy-src="doGetImage(item.name)"
              width="74"
              :height="toggle_sidebar ? '97%' : ''"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="text-center mx-3">
      <v-col cols="12" class="font-size-10 grey--text">
        <div>
          Portfolio website v3.0.0
        </div>
        <div>
          <span class="text-body-2">&copy;</span>
          {{ new Date().getFullYear() }} Sanyanee Thawinvongrak
        </div>
      </v-col>
    </v-row>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import data from '@/services/data/Base'
import { getFileFromStore } from '@/services/functions/Services'

export default {
  data() {
    return {
      menu: data.menu,
      images: data.img_sidebar
    }
  },
  computed: {
    ...mapState('components', {
      toggle_sidebar: state => state.toggle_sidebar
    }),
    logo() {
      return process.env.VUE_APP_LOGO_NOTEXT_BLACK
        ? process.env.VUE_APP_LOGO_NOTEXT_BLACK
        : ''
    }
  },
  methods: {
    ...mapActions('components', ['updateToggleSidebar']),
    doGetImage(name) {
      return getFileFromStore(name)
    }
  }
}
</script>

<style lang="stylus">
.avatar.v-avatar img
  border-radius: unset
  height: 95px
  width: 95px
</style>
