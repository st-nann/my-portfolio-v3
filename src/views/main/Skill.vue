<template>
  <v-row class="pb-8 px-4">
    <v-col cols="12" xs="12" md="10" offset-md="1">
      <v-card class="px-4 pt-10 pb-15 elevation-8">
        <v-container grid-list-md :class="{ 'pa-0': $vuetify.breakpoint.xs }">
          <v-row>
            <!-- <v-col cols="12">
              <OperatingSystem></OperatingSystem>
            </v-col> -->
            <v-col cols="12" xs="12" lg="6">
              <Languages></Languages>
            </v-col>
            <v-col cols="12" xs="12" lg="6">
              <Frameworks></Frameworks>
            </v-col>
            <v-col cols="12" xs="12" lg="4">
              <Library></Library>
            </v-col>
            <v-col cols="12" xs="12" lg="8">
              <Tools></Tools>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
// import OperatingSystem from '@/views/main/skill/os/OperatingSystem'
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
    // OperatingSystem,
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
