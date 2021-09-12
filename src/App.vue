<template>
  <v-app>
    <template v-if="nolayout">
      <router-view></router-view>
    </template>
    <template v-else>
      <Sidebar></Sidebar>
      <Toolbar></Toolbar>
      <main>
        <v-container fluid>
          <Loading v-if="loading"></Loading>
          <router-view v-else style="margin-top: 65px;"></router-view>
        </v-container>
      </main>
    </template>
  </v-app>
</template>

<script>
import Toolbar from '@/components/base/Toolbar'
import Sidebar from '@/components/base/Sidebar'
import Loading from '@/components/base/Loading'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'app',
  components: {
    Toolbar,
    Sidebar,
    Loading
  },
  computed: {
    ...mapState('components', {
      loading: state => state.loading
    }),
    nolayout() {
      return this.$route.meta.nolayout
    }
  },
  watch: {
    $route(to, from) {
      this.updateLoading()
    }
  },
  created() {
    this.loading
  },
  methods: {
    ...mapActions('components', ['updateLoading'])
  }
}
</script>

<style lang="sass">
@import '~vuetify/src/styles/main.sass'

#app
  background: #ffffff

a
  text-decoration: none

.clickable
  cursor: pointer

.dialog__content
  z-index: 99999 !important

.fade-enter-active, .fade-leave-active
  transition: opacity 1s

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  opacity: 0

img.logo
  width: 50px !important

.font-size-10
  font-size: 10px

.font-size-65
  font-size: 65px

.font-size-112
  font-size: 112px

.text-decoration
  border-bottom: 1.5px solid black

.card-frame
  border: 1px solid #dddddd !important

.card-border
  border-radius: 5px

.card-lists
  border-radius: 10px !important

.bg-round.v-btn-toggle
  opacity: .9 !important
  background: #3f52ad !important
  border-radius: 50px
  padding: 4px

.v-btn
  text-transform: none !important

.btn-active.v-btn--active
  opacity: .8 !important
  border-radius: 50px !important
  color: #2f3369 !important
  background-color: #ffffff !important
  border-color: #d6eff8 !important

.btn-menu-opacity.v-btn:before
  background-color: #3f52ad
  color: #3f52ad
  opacity: .2

.menu
  top: 0
  right: 0
  position: absolute

.v-progress-linear
  border-radius: 50px

.v-dialog
  border-radius: 15px !important

.border-card-title
  border-radius: 5px !important

.search.v-text-field.v-text-field--enclosed>.v-input__control>.v-input__slot
  border-radius: 50px !important

canvas
  width: 100% !important
  height: 300px !important

.word-wrap
  white-space: nowrap
  width: 100%
  overflow: hidden
  text-overflow: ellipsis

::-webkit-scrollbar-track
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3) !important
  border-radius: 5px !important
  background-color: #F5F5F5 !important

::-webkit-scrollbar
  width: 5px !important
  background-color: #F5F5F5 !important

::-webkit-scrollbar-thumb
  border-radius: 5px !important
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3) !important
  background-color: #a0a0a0 !important
</style>
