<template>
    <v-layout row wrap class="pa-1 ma-3" v-if="!loading">
        <v-flex xs12 md10 offset-md1>
            <v-card class="px-5 py-4 text-xs-left blue-grey darken-1 mobile">
                <v-container grid-list-md>
                    <v-layout row wrap>
                        <v-flex xs12 md12 class="mb-4 white--text">
                            <span class="display-2 mobile-title">| </span>
                            <span class="display-1">Skill</span>
                        </v-flex>
                    </v-layout>
                </v-container>
                <v-container grid-list-md>
                    <v-layout row wrap>
                        <v-flex xs12 md12>
                            <OperatingSystem></OperatingSystem>
                        </v-flex>
                        <v-flex xs12 md6>
                            <Languages></Languages>
                        </v-flex>
                        <v-flex xs12 md6>
                            <Framework></Framework>
                        </v-flex>
                        <v-flex xs12 md4>
                            <Library></Library>
                        </v-flex>
                        <v-flex xs12 md8>
                            <Tools></Tools>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
        </v-flex>
    </v-layout>
    <Loading v-else></Loading>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import Loading from '@/components/base/Loading'
  import OperatingSystem from '@/views/main/skill/os/OperatingSystem'
  import Languages from '@/views/main/skill/languages/Languages'
  import Framework from '@/views/main/skill/framework/Framework'
  import Library from '@/views/main/skill/library/Library'
  import Tools from '@/views/main/skill/tools/Tools'

  export default {
    data () {
      return {
        value: 10
      }
    },
    components: {
      Loading,
      OperatingSystem,
      Languages,
      Framework,
      Library,
      Tools
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
  @media only screen and (max-width: 320px)
    .mobile
      padding-left: 14px !important
      padding-right: 14px !important
</style>
