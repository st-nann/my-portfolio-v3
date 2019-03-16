<template>
  <v-layout row wrap>
    <v-flex xs12>
      <!-- <v-carousel icon="photo" cycle dark>
          <v-carousel-item v-for="(item, index) in items" :key="index" v-bind:src="item.src"></v-carousel-item>
      </v-carousel> -->
      <WhoAmI></WhoAmI>
      <MyInfo></MyInfo>
      <v-layout row wrap>
        <v-flex sm12 md12>
          <Footers></Footers>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import WhoAmI from '@/views/main/aboutme/WhoAmI'
import MyInfo from '@/views/main/aboutme/MyInfo'
import Footers from '@/components/base/Footer'

export default {
  data() {
    return {
      items: [
        // { src: require('../../assets/images/image-4.svg') },
        // { src: require('../../assets/images/image-1.svg') },
        // { src: require('../../assets/images/image-2.svg') },
        // { src: require('../../assets/images/image-5.svg') },
        // { src: require('../../assets/images/image-3.svg') }
      ]
    }
  },
  components: {
    WhoAmI,
    MyInfo,
    Footers
  }
}
</script>

<style lang="stylus" scoped>
.carousel
  height: 600px
</style>
