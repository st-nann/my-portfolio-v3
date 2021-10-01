<template>
  <v-card class="my-2 pa-2 card-border card-frame card-size" height="100%" flat>
    <TitleMenuToggle
      ref="menu"
      default="frontend"
      :title="title"
      :tabs="frameworks"
    ></TitleMenuToggle>
    <v-row class="px-3">
      <v-col cols="12">
        <ProgressBarHorizontal :chartData="chartData" :level="level" />
      </v-col>
    </v-row>
    <!-- <List class="px-3" :title="title" :selected="selected"></List> -->
  </v-card>
</template>

<script>
import data from '@/services/data/Skill'
import base from '@/services/data/Base'
import TitleMenuToggle from '@/components/title/Toggle'
import ProgressBarHorizontal from '@/components/chart/ProgressBarHorizontal'
// import List from '@/views/main/skill/frameworks/tabs/List'

export default {
  data() {
    return {
      selected: null
    }
  },
  components: {
    TitleMenuToggle,
    ProgressBarHorizontal
    // List
  },
  computed: {
    level() {
      return data.level
    },
    title() {
      return 'Frameworks'
    },
    frameworks() {
      return data.menu.frameworks
    },
    backgroundColor() {
      return base.chart.backgroundColor
    },
    borderColor() {
      return base.chart.borderColor
    },
    chartData() {
      const title = _.lowerCase(this.title)
      let label = []
      let value = []
      _.forEach(data[title], item => {
        _.forEach(item[this.selected], res => {
          label.push(res.name)
          value.push(res.value)
        })
      })
      return {
        labels: label,
        datasets: [
          {
            label: 'frameworks',
            fill: true,
            barPercentage: 1,
            backgroundColor: this.backgroundColor,
            borderColor: this.borderColor,
            borderWidth: 1,
            data: value
          }
        ]
      }
    }
  },
  mounted() {
    this.$watch(() => {
      this.selected = this.$refs.menu.selected
    })
  }
}
</script>

<style lang="stylus" scoped>
@media only screen and (max-width: 414px)
  .mobile
    margin: 0px 0px !important

  .card-size
    height: 440px !important

@media only screen and (min-width: 1024px) and (max-width: 1099px)
  .mobile
    margin-left: 0px !important
    margin-right: 0px !important
</style>
