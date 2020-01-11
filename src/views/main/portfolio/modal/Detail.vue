<template>
  <v-dialog v-model="modal" max-width="400px" persistent scrollable>
    <Modal
      :image="data.image ? data.image.cover : undefined"
      :title="`${data.title} (${data.subtitle}) - Detail`"
      :description="data.description"
      :closeModal="closeModal"
      button="Close"
    >
      <div slot="body">
        <v-layout row wrap>
          <v-flex xs12 class="caption grey--text text--darken-1">
            <v-icon class="mr-1" :size="12">mdi-shape-plus</v-icon>
            <span class="font-weight-bold">Category: </span>{{ data.type }}
            <div v-if="data.detail && data.detail.framework">
              <v-icon class="mr-1" :size="12">mdi-layers</v-icon>
              <span class="font-weight-bold">Framework: </span>
              <span
                v-for="(item, key, index) in data.detail.framework"
                :key="index"
              >
                <!-- <v-icon :size="15">mdi-{{ item.icon }}</v-icon> -->
                {{ item.text }}
                <span class="grey--text text--darken-1">({{ key }})</span>
                <span
                  v-if="Object.keys(data.detail.framework).length - 1 !== index"
                >
                  /
                </span>
              </span>
            </div>
            <div v-if="data.link">
              <a
                :href="data.link"
                class="lightblue--text text--darken-4 text-truncate"
                target="_blank"
              >
                {{ data.link }}
                <v-icon
                  :size="9"
                  color="lightblue darken-4"
                  style="vertical-align: middle !important;"
                >
                  mdi-open-in-new
                </v-icon>
              </a>
            </div>
          </v-flex>
          <v-flex v-if="data.image" xs12 class="my-2 text-xs-center">
            <v-img
              :src="doGetImage(data.image.qrcode.name, data.image.qrcode.token)"
              :lazy-src="
                doGetImage(data.image.qrcode.name, data.image.qrcode.token)
              "
              :width="70"
            />
          </v-flex>
        </v-layout>
      </div>
    </Modal>
  </v-dialog>
</template>

<script>
import { getImageFromStore } from '@/services/functions/Services'
import Modal from '@/components/base/Modal'

export default {
  props: ['data'],
  data() {
    return {
      modal: false
    }
  },
  components: {
    Modal
  },
  methods: {
    doGetImage(name, token) {
      return getImageFromStore(name, token)
    },
    closeModal() {
      this.modal = false
    }
  }
}
</script>
