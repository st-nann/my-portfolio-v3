<template>
  <v-card class="card-modal">
    <v-img
      v-if="image"
      :src="doGetImage(image.name)"
      :lazy-src="doGetImage(image.name)"
    />
    <v-card-title class="pb-0">
      <div class="text-subtitle-1 font-weight-bold">{{ title }}</div>
    </v-card-title>
    <v-card-text class="pt-0" v-if="description !== ''">
      <span class="text-body-2 grey--text text--darken-2">
        {{ description }}
      </span>
      <div class="mt-2">
        <slot name="body"></slot>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        class="cinnamon--text darken-1 text-body-2 font-weight-bold"
        text
        @click.native.stop="closeModal"
      >
        {{ button }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { getFileFromStore } from '@/services/functions/Services'

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
    doGetImage(name) {
      return getFileFromStore(name)
    },
    doClickOk(event) {
      this.okCallback(event)
    }
  }
}
</script>

<style lang="stylus" scoped>
.card-modal
  border-radius: 15px
</style>
