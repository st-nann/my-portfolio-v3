<template>
  <v-card class="my-2 pa-2 card-border card-frame" height="100%" flat>
    <TitleMenu
      ref="menu"
      default="design"
      :title="title"
      :menu="menu"
    ></TitleMenu>
    <Lists keyName="tools" :category="selected"></Lists>
  </v-card>
</template>

<script>
import data from '@/services/data/Skill'
import TitleMenu from '@/components/title/Menu'
import Lists from '@/components/data/List'

export default {
  data() {
    return {
      selected: null
    }
  },
  components: {
    TitleMenu,
    Lists
  },
  computed: {
    title() {
      return 'Tools'
    },
    menu() {
      return data.menu.tools
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
    margin-top: -10px !important
    margin-bottom: 10px !important
    margin-left: 0px !important
    margin-right: 0px !important

  .card-size
    height: 370px !important

@media only screen and (min-width: 1024px) and (max-width: 1099px)
  .mobile
    margin-left: 0px !important
    margin-right: 0px !important

  .card-size
    height: 350px !important
</style>
