<template>
  <div>
    <v-layout row wrap v-for="(item, index) in lists" :key="index">
      <v-flex xs12 sm4>
        <p class="caption pl-4 mobile-content mb-1">{{ item.name }}</p>
      </v-flex>
      <v-flex xs9 sm6>
        <v-progress-linear
          v-model="value[index]"
          color="cinnamon lighten-1"
          class="my-2 ml-4"
        ></v-progress-linear>
      </v-flex>
      <v-flex xs3 sm2>
        <p class="mb-0 caption text-xs-center">{{ item.value }} %</p>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import _ from 'lodash'
import data from '@/services/data/Skill'

export default {
  props: ['title', 'selected'],
  data() {
    return {
      value: []
    }
  },
  computed: {
    lists() {
      const title = _.lowerCase(this.title)
      const lists = _.head(data[title])[this.selected]
      _.forEach(lists, item => {
        this.animationLoop(item.value)
      })
      return lists
    }
  },
  methods: {
    animationLoop(value) {
      const self = this
      setTimeout(() => {
        return self.value.push(value)
      }, 300)
    }
  }
}
</script>

<style lang="stylus" scoped>
@media only screen and (max-width: 414px)
  .mobile-content
    margin-bottom: 0px !important
    margin-top: 15px !important
</style>
