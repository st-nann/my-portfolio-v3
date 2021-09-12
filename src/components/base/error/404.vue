<template>
  <v-row align="center">
    <v-col cols="12" xs="12" lg="6">
      <v-img :src="doGetImage(error.notfound.name)" />
    </v-col>
    <v-col
      cols="12"
      xs="11"
      lg="5"
      offset-lg="1"
      :class="['mb-15', { 'px-10': $vuetify.breakpoint.mdAndDown }]"
    >
      <v-card-text>
        <div class="text-h4 grey--text text--darken-2 font-weight-bold">
          Oops !
        </div>
        <div class="text-h5 grey--text text--darken-2 pt-3">
          You have some problems.
        </div>
        <div class="text-body-1 grey--text text--darken-1">
          The page you are looking for was moved, removed, renamed or might
          never existed.
        </div>
      </v-card-text>
      <a href="/">
        <v-btn class="ml-3" color="cinnamon" outlined rounded>
          Go back
        </v-btn>
      </a>
    </v-col>
  </v-row>
</template>

<script>
import data from '@/services/data/Base'
import { getFileFromStore } from '@/services/functions/Services'

export default {
  computed: {
    error() {
      return data.error
    }
  },
  methods: {
    doGetImage(name) {
      return getFileFromStore(name)
    }
  }
}
</script>
