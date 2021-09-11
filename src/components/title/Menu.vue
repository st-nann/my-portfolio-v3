<template>
  <v-layout row wrap>
    <v-flex xs6>
      <v-card-text class="title mx-0 pa-3">
        {{ title }}
      </v-card-text>
    </v-flex>
    <v-flex
      v-if="menu"
      xs6
      :class="{
        'menu ma-3': $vuetify.breakpoint.smAndUp,
        'text-xs-right pt-3': $vuetify.breakpoint.xs
      }"
    >
      <v-menu offset-y>
        <v-btn
          slot="activator"
          class="ma-0 caption font-weight-medium btn-menu-opacity"
          color="#3f52ad"
          flat
          round
          small
        >
          {{ item.text }}
          <v-icon color="#3f52ad" :size="15">keyboard_arrow_down</v-icon>
        </v-btn>
        <v-list class="clickable" dense>
          <v-list-tile
            v-for="(item, index) in menu"
            :key="index"
            class="caption"
            @click.native="doCheangeMenu(item)"
          >
            <v-list-tile-title>{{ item.text }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['title', 'menu', 'default'],
  data() {
    return {
      item: _.find(this.menu, { value: this.default }),
      selected: this.default
    }
  },
  methods: {
    doCheangeMenu(item) {
      this.selected = item.value
      this.item = item
    }
  }
}
</script>
