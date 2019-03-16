<template>
    <v-layout row wrap class="pa-4" v-if="!loading">
        <v-flex xs12 md10 offset-md1>
            <v-card class="pa-4 text-xs-left mobile">
                <v-layout row wrap>
                    <v-flex xs12 md6>
                        <span class="display-2 ml-4 mobile-title">| </span>
                        <span class="display-1">Portfolio</span>
                    </v-flex>
                    <v-flex xs12 md6 class="text-xs-right mt-2">
                        <v-btn :to="{ path: '/portfolio/design' }" color="info" flat>Design</v-btn>
                        <v-btn :to="{ path: '/portfolio/coding' }" color="info" flat>Coding</v-btn>
                    </v-flex>
                </v-layout>
                <transition name="fade">
                    <Design v-if="$route.path === '/portfolio/design' || $route.path === '/portfolio'"></Design>
                    <Coding v-else-if="$route.path === '/portfolio/coding'"></Coding>
                </transition>
            </v-card>
        </v-flex>
    </v-layout>
    <Loading v-else></Loading>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import Loading from '@/components/base/Loading'
  import Design from '@/views/main/portfolio/Design'
  import Coding from '@/views/main/portfolio/Coding'

  export default {
    components: {
      Loading,
      Design,
      Coding
    },
    computed: {
      ...mapState({
        loading: state => state.loading.loading
      })
    },
    created () {
      this.doLoading()
    },
    methods: {
      ...mapActions('loading', [
        'showLoading',
        'noLoading'
      ]),
      doLoading: async function () {
        this.showLoading()
        if (this.loading) {
          let self = this
          setTimeout(function () {
            self.noLoading()
          }, 1000)
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .bottom-nav
    width: auto

  @media only screen and (max-width: 1024px)
    .mobile
      padding: 10px !important

  @media only screen and (max-width: 320px)
    .mobile
      padding: 10px !important

    .mobile-title
      margin-left: 0px !important
</style>
