<template>
  <v-row class="text-center px-3">
    <v-col xs="4" lg="4" v-for="(item, index) in lists" :key="index">
      <img
        :src="doGetImage(item.image.name)"
        width="40px"
        height="40"
        alt="icon"
      />
      <p class="text-body-2">{{ item.name }}</p>
    </v-col>
  </v-row>
</template>

<script>
import _ from 'lodash'
import data from '@/services/data/Skill'
import { getFileFromStore } from '@/services/functions/Services'

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
    doGetImage(name) {
      return getFileFromStore(name)
    }
  }
}
</script>
