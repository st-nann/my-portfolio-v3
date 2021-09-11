<template>
  <v-card class="my-2 pa-2 card-border card-frame" height="100%" flat>
    <TitleMenuToggle
      ref="menu"
      default="programing"
      :title="title"
      :tabs="languages"
    ></TitleMenuToggle>
    <v-layout row wrap>
      <v-flex xs12>
        <RadarChart :chartData="chartData"></RadarChart>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import data from '@/services/data/Skill'
import TitleMenuToggle from '@/components/title/Toggle'
import RadarChart from '@/components/chart/Radar'

export default {
  data() {
    return {
      selected: null
    }
  },
  components: {
    TitleMenuToggle,
    RadarChart
  },
  computed: {
    title() {
      return 'Languages'
    },
    languages() {
      return data.menu.languages
    },
    chartData() {
      const title = _.lowerCase(this.title)
      let label = []
      let value = []
      let datasets = {}
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
            label: 'languages',
            fill: true,
            backgroundColor: 'rgb(255, 214, 51, .2)',
            borderColor: 'rgb(255, 153, 51, .6)',
            borderWidth: '1px',
            borderCapStyle: 'round',
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
