<template>
  <v-row class="mb-2 flex-wrap-reverse">
    <v-col
      v-if="title"
      xs="12"
      order-xs="2"
      sm="3"
      order-sm="1"
      md="4"
      order-md="0"
    >
      <v-card-text class="text-h5 pa-3">
        {{ title }}
      </v-card-text>
    </v-col>
    <v-col
      xs="12"
      order-xs="1"
      :sm="!disabled_class_menu ? 9 : ''"
      order-sm="2"
      :md="!disabled_class_menu ? 8 : ''"
      :class="[
        'ma-3',
        {
          'text-right menu':
            $vuetify.breakpoint.smAndUp && !disabled_class_menu,
          'text-center': $vuetify.breakpoint.xs
        }
      ]"
    >
      <v-btn-toggle
        v-model="selected"
        class="bg-round elevation-0 text-right"
        dark
      >
        <v-btn
          v-for="(item, index) in tabs"
          :key="index"
          :value="item.value"
          :class="[
            'ma-0 px-5 text-body-2',
            {
              'btn-active elevation-5': selected === item.value
            }
          ]"
          small
          text
          :rounded="selected === item.value"
          @click.native="selected = item.value"
        >
          {{ item.text }}
        </v-btn>
      </v-btn-toggle>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ['default', 'title', 'tabs', 'disabled_class_menu'],
  data() {
    return {
      selected: this.default
    }
  }
}
</script>

<style lang="scss">
.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn {
  border-color: transparent !important;
}
</style>
