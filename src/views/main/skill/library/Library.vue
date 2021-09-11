<template>
  <v-card class="my-2 pa-2 card-border card-frame" height="100%" flat>
    <TitleMenu :title="title"></TitleMenu>
    <Lists category="library"></Lists>
  </v-card>
</template>

<script>
import TitleMenu from '@/components/title/Menu'
import Lists from '@/components/data/List'

export default {
  components: {
    TitleMenu,
    Lists
  },
  computed: {
    title() {
      return 'Libaries'
    }
  }
}
</script>
