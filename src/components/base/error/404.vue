<template>
  <v-layout row wrap align-center>
    <v-flex xs12 lg6>
      <img
        :src="doGetImage(error.notfound.name, error.notfound.token)"
        width="100%"
      />
    </v-flex>
    <v-flex xs11 lg5 offset-xs1 class="mb-5">
      <v-card-text>
        <div class="display-1 grey--text text--darken-2 font-weight-bold">
          Oops !
        </div>
        <div class="title grey--text text--darken-2 pt-3">
          You have some problems.
        </div>
        <div class="body-2 grey--text text--darken-1 pt-1">
          The page you are looking for was moved, removed, renamed or might
          never existed.
        </div>
      </v-card-text>
      <a href="/">
        <v-btn class="ml-3" color="cinnamon" outline round>
          Go back
        </v-btn>
      </a>
    </v-flex>
  </v-layout>
</template>

<script>
import data from '@/services/data/Base'
import { getImageFromStore } from '@/services/functions/Services'

export default {
  computed: {
    error() {
      return data.error
    }
  },
  methods: {
    doGetImage(name, token) {
      return getImageFromStore(name, token)
    }
  }
}
</script>
