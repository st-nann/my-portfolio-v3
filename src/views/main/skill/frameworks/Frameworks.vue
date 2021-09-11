<template>
  <v-card class="my-2 pa-2 card-border card-frame card-size" height="100%" flat>
    <TitleMenuToggle
      ref="menu"
      default="frontend"
      :title="title"
      :tabs="frameworks"
    ></TitleMenuToggle>
    <List :title="title" :selected="selected"></List>
  </v-card>
</template>

<script>
import data from '@/services/data/Skill'
import TitleMenuToggle from '@/components/title/Toggle'
import List from '@/views/main/skill/frameworks/tabs/List'

export default {
  data() {
    return {
      selected: null
    }
  },
  components: {
    TitleMenuToggle,
    List
  },
  computed: {
    title() {
      return 'Frameworks'
    },
    frameworks() {
      return data.menu.frameworks
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
