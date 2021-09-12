<template>
  <v-row align="center">
    <v-col xs="6">
      <v-card-text class="text-h5 mx-0 pa-3">
        {{ title }}
      </v-card-text>
    </v-col>
    <v-col
      v-if="menu"
      xs="6"
      :class="[
        'text-right',
        {
          'menu ma-3': $vuetify.breakpoint.smAndUp,
          'pt-3': $vuetify.breakpoint.xs
        }
      ]"
    >
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn
            v-on="on"
            class="ma-0 text-body-2 font-weight-medium btn-menu-opacity elevation-0 lightpurple--text"
            rounded
            small
          >
            {{ item.text }}
            <v-icon color="lightpurple" :size="15">keyboard_arrow_down</v-icon>
          </v-btn>
        </template>
        <v-list class="clickable" dense>
          <v-list-item
            v-for="(item, index) in menu"
            :key="index"
            class="text-body-2"
            @click.native="doCheangeMenu(item)"
          >
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-col>
  </v-row>
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
