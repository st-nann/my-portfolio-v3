<template>
  <v-card class="my-2 pa-2 card-border card-frame" flat>
    <v-card-text class="text-h5 pa-3">Operating System (OS)</v-card-text>
    <v-row class="text-center">
      <v-col cols="12" xs="12" sm="4" v-for="(item, index) in os" :key="index">
        <v-progress-circular
          :size="140"
          :width="14"
          :rotate="-90"
          :value="value[index]"
          class="light-blue--text text--lighten-3"
        >
          <v-img
            :src="doGetImage(item.image.name)"
            :lazy-src="doGetImage(item.image.name)"
            width="65px"
          />
        </v-progress-circular>
        <v-card-text class="text-body-2 mb-1">
          {{ item.name }} ({{ item.value }}%)
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import _ from 'lodash'
import data from '@/services/data/Skill'
import { getFileFromStore } from '@/services/functions/Services'

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
    doGetImage(name) {
      return getFileFromStore(name)
    }
  }
}
</script>
