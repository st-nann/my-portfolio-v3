<template>
  <v-layout row wrap class="mb-2">
    <v-flex xs12 order-xs2 sm3 order-sm1 md4>
      <v-card-text class="title mx-0 pa-3">
        {{ title }}
      </v-card-text>
    </v-flex>
    <v-flex
      xs12
      order-xs1
      sm9
      order-sm2
      md8
      class="ma-3"
      :class="{
        'menu': $vuetify.breakpoint.smAndUp,
        'text-xs-center': $vuetify.breakpoint.xs
      }"
    >
      <v-btn-toggle
        v-model="selected"
        class="bg-round elevation-0"
        dark
      >
        <v-btn
          v-for="(item, index) in tabs"
          :key="index"
          :value="item.value"
          class="ma-0 caption"
          :class="{
            'btn-active elevation-5': selected === item.value
          }"
          small
          :flat="selected !== item.value"
          :round="selected === item.value"
          @click.native="selected = item.value"
        >
          {{ item.text }}
        </v-btn>
      </v-btn-toggle>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['default', 'title', 'tabs'],
  data() {
    return {
      selected: this.default
    }
  }
}
</script>
