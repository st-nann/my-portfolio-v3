<template>
  <v-layout row wrap class="text-xs-center">
    <v-flex xs4 v-for="(item, index) in lists" :key="index">
      <img
        :src="doGetImage(item.image.name, item.image.token)"
        width="40px"
        height="40"
      />
      <p class="caption">{{ item.name }}</p>
    </v-flex>
  </v-layout>
</template>

<script>
import _ from 'lodash'
import data from '@/services/data/Skill'
import { getImageFromStore } from '@/services/functions/Services'

export default {
  props: ['category', 'keyName'],
  computed: {
    lists() {
      return this.keyName
        ? _.head(data[this.keyName])[this.category]
        : data[this.category]
    }
  },
  methods: {
    doGetImage(name, token) {
      return getImageFromStore(name, token)
    }
  }
}
</script>
