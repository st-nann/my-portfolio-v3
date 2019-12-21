<template>
  <v-layout row wrap class="pa-4">
    <v-flex xs12 md10 offset-md1>
      <v-card class="px-4 pt-4 pb-5 elevation-8">
        <v-container grid-list-md :class="{ 'pa-0': $vuetify.breakpoint.xs }">
          <v-layout row wrap>
            <v-flex xs12 md12>
              <OperatingSystem></OperatingSystem>
            </v-flex>
            <v-flex xs12 lg6>
              <Languages></Languages>
            </v-flex>
            <v-flex xs12 lg6>
              <Frameworks></Frameworks>
            </v-flex>
            <v-flex xs12 lg4>
              <Library></Library>
            </v-flex>
            <v-flex xs12 lg8>
              <Tools></Tools>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import OperatingSystem from '@/views/main/skill/os/OperatingSystem'
import Languages from '@/views/main/skill/languages/Languages'
import Frameworks from '@/views/main/skill/frameworks/Frameworks'
import Library from '@/views/main/skill/library/Library'
import Tools from '@/views/main/skill/tools/Tools'

export default {
  data() {
    return {
      value: 10
    }
  },
  components: {
    OperatingSystem,
    Languages,
    Frameworks,
    Library,
    Tools
  }
}
</script>

<style lang="stylus" scoped>
@media only screen and (max-width: 320px)
  .mobile
    padding-left: 14px !important
    padding-right: 14px !important
</style>
