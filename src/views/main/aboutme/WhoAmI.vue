<template>
  <v-row>
    <v-col cols="12">
      <v-card color="white">
        <v-row class="pt-10 pb-15">
          <v-col
            cols="12"
            xs="12"
            md="2"
            lg="3"
            :class="{ 'text-right': $vuetify.breakpoint.mdAndUp }"
          >
            <v-icon
              class="text-h1"
              :class="{ 'pt-2': $vuetify.breakpoint.mdAndUp }"
              color="lightgrey"
            >
              mdi-format-quote-open
            </v-icon>
          </v-col>
          <v-col
            cols="12"
            xs="10"
            offset-xs="1"
            md="8"
            offset-md="0"
            lg="6"
            offset-lg="0"
            :class="[
              'text-center font-weight-thin ',
              {
                'mt-8 pt-10 text-h5': $vuetify.breakpoint.mdAndUp,
                'text-h5': $vuetify.breakpoint.smAndDown
              }
            ]"
          >
            <span class="text-h2"> H</span>ello My name is
            <span class="cinnamon--text">
              Sanyanee Thawinvongrak (Nan).
            </span>
            <p
              :class="{
                'text-subtitle-1': $vuetify.breakpoint.smAndUp,
                'text-subtitle-2': $vuetify.breakpoint.xs
              }"
            >
              I'm a web developer. I graduated from King Mongkut's Institute of
              Technology Ladkrabang in Bachelor Degree <br />
              (Second Class Honors). Faculty of Science, Department of Computer
              Science.
            </p>
          </v-col>
          <v-col
            cols="12"
            xs="12"
            md="2"
            lg="3"
            :class="{
              'pt-13 mt-13': $vuetify.breakpoint.mdAndUp,
              'text-right': $vuetify.breakpoint.smAndDown
            }"
          >
            <v-icon
              class="text-h1"
              :class="{ 'pt-4 mt-5': $vuetify.breakpoint.mdAndUp }"
              color="lightgrey"
            >
              mdi-format-quote-close
            </v-icon>
          </v-col>
        </v-row>
        <v-divider class="mx-4"></v-divider>
        <Interest></Interest>
        <v-divider class="mx-4"></v-divider>
        <Characters></Characters>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Interest from '@/views/main/aboutme/Interest'
import Characters from '@/views/main/aboutme/Characters'

export default {
  components: {
    Interest,
    Characters
  }
}
</script>
