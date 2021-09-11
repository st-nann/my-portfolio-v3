<template>
  <v-card class="pa-2 card-border card-frame" flat>
    <v-card-text class="title mx-2 mb-3">Operating System (OS)</v-card-text>
    <v-layout row wrap class="text-xs-center">
      <v-flex xs12 sm4 v-for="(item, index) in os" :key="index">
        <v-progress-circular
          v-bind:size="140"
          v-bind:width="14"
          v-bind:rotate="-90"
          v-bind:value="value[index]"
          class="light-blue--text text--lighten-3"
        >
          <v-img
            :src="doGetImage(item.image.name, item.image.token)"
            :lazy-src="doGetImage(item.image.name, item.image.token)"
            width="65px"
          />
        </v-progress-circular>
        <v-card-text class="caption mb-1">
          {{ item.name }} ({{ item.value }}%)
        </v-card-text>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import _ from 'lodash'
import data from '@/services/data/Skill'
import { getImageFromStore } from '@/services/functions/Services'

export default {
  data() {
    return {
      value: []
    }
  },
  computed: {
    os() {
      return data.os
    }
  },
  created() {
    let self = this
    _.forEach(this.os, function(item) {
      self.animationLoop(item.value)
    })
  },
  methods: {
    animationLoop(value) {
      const self = this
      setTimeout(() => {
        return self.value.push(value)
      }, 300)
    },
    doGetImage(name, token) {
      return getImageFromStore(name, token)
    }
  }
}
</script>
