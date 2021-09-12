<template>
  <div>
    <v-row v-for="(item, index) in lists" :key="index" no-gutters>
      <v-col cols="12" xs="12" sm="4">
        <p class="text-body-2 pl-4 mobile-content mb-1">{{ item.name }}</p>
      </v-col>
      <v-col cols="12" xs="9" sm="6">
        <v-progress-linear
          v-model="value[index]"
          color="cinnamon lighten-1"
          class="my-2 ml-4"
        ></v-progress-linear>
      </v-col>
      <v-col cols="12" xs="3" sm="2">
        <p class="mb-0 text-body-2 text-center">{{ item.value }} %</p>
      </v-col>
    </v-row>
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
