<script>
import { Radar } from 'vue-chartjs'

export default {
  extends: Radar,
  props: ['chartData'],
  watch: {
    chartData: {
      handler() {
        this.$data._chart.update()
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
            suggestedMin: 0,
            suggestedMax: 100
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
