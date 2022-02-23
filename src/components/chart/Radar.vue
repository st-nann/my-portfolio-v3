<script>
import { Radar } from 'vue-chartjs'

export default {
  extends: Radar,
  props: ['chartData', 'level'],
  watch: {
    chartData: {
      handler() {
        // this.$data._chart.update()
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
        scale: {
          angleLines: {
            display: true
          },
          ticks: {
            suggestedMin: 1,
            suggestedMax: 5,
            beginAtZero: true,
            stepSize: 1,
            fontColor: ['rgba(180, 180, 180, 1)'],
            callback: (value, index, values) => {
              const found = _.find(this.level, (item) => item.value === value)
              return found ? found.text : ''
            }
          }
        }
      }
    }
  },
  mounted() {
    this.renderChart(this.chartData, this.options)
  }
}
</script>
