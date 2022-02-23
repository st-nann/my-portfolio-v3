<script>
import _ from 'lodash'
import { HorizontalBar } from 'vue-chartjs'

export default {
  extends: HorizontalBar,
  props: ['chartData', 'level'],
  watch: {
    chartData: {
      handler() {
        this.renderChart(this.chartData, this.options)
      },
      deep: true
    }
  },
  computed: {
    options() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              ticks: {
                beginAtZero: true,
                fontColor: ['rgba(160, 160, 160, 1)'],
                callback: (value, index, values) => {
                  const found = _.find(this.level, (item) => item.value === value)
                  return found ? found.text : ''
                }
              }
            }
          ]
        }
      }
    }
  },
  mounted() {
    this.renderChart(this.chartData, this.options)
  }
}
</script>
