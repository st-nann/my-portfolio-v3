<template>
  <v-card class="card-modal">
    <v-img
      v-if="image"
      :src="doGetImage(image.name, image.token)"
      :lazy-src="doGetImage(image.name, image.token)"
    />
    <v-card-title class="pb-0">
      <div class="subheading font-weight-bold">{{ title }}</div>
    </v-card-title>
    <v-card-text class="py-0" v-if="description !== ''">
      <span class="caption grey--text text--darken-2">{{ description }}</span>
      <div class="mt-2">
        <slot name="body"></slot>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        class="cinnamon--text darken-1 caption font-weight-bold"
        flat
        @click.native.stop="closeModal"
      >
        {{ button }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { getImageFromStore } from '@/services/functions/Services'

export default {
  props: [
    'image',
    'title',
    'description',
    'button',
    'okCallback',
    'closeModal',
    'danger',
    'disable'
  ],
  methods: {
    doGetImage(name, token) {
      return getImageFromStore(name, token)
    },
    doClickOk: function(event) {
      this.okCallback(event)
    }
  }
}
</script>

<style lang="stylus" scoped>
.card-modal
  border-radius: 15px
</style>
