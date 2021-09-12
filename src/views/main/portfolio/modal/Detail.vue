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
        <v-row dense>
          <v-col cols="12" class="text-body-2 grey--text text--darken-1">
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
          </v-col>
          <v-col cols="12" v-if="data.image" class="text-center px-0">
            <v-img
              :src="doGetImage(data.image.qrcode.name)"
              :lazy-src="doGetImage(data.image.qrcode.name)"
              :width="70"
            />
          </v-col>
        </v-row>
      </div>
    </Modal>
  </v-dialog>
</template>

<script>
import { getFileFromStore } from '@/services/functions/Services'
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
    doGetImage(name) {
      return getFileFromStore(name)
    },
    closeModal() {
      this.modal = false
    }
  }
}
</script>
