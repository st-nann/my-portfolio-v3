<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card color="white">
        <v-layout row wrap class="py-5">
          <v-flex
            xs12
            md2
            lg3
            :class="{ 'text-xs-right': $vuetify.breakpoint.mdAndUp }"
          >
            <v-icon
              class="display-4"
              :class="{ 'pt-1': $vuetify.breakpoint.mdAndUp }"
              color="lightgrey"
            >
              mdi-format-quote-open
            </v-icon>
          </v-flex>
          <v-flex
            xs10
            offset-xs1
            md8
            offset-md0
            lg6
            offset-lg0
            class="text-xs-center"
            :class="{
              'mt-1 pt-5 headline': $vuetify.breakpoint.mdAndUp,
              title: $vuetify.breakpoint.smAndDown
            }"
          >
            <span class="display-3"> H</span>ello My name is
            <span class="cinnamon--text">
              Sanyanee Thawinvongrak (Nan).
            </span>
            <p class="font-weight-thin subheading">
              I'm a web developer. I graduated from King Mongkut's Institute of
              Technology Ladkrabang in Bachelor Degree (Second Class Honors).
              Faculty of Science, Department of Computer Science.
            </p>
          </v-flex>
          <v-flex
            xs12
            md2
            lg3
            :class="{
              'pt-5 mt-5': $vuetify.breakpoint.mdAndUp,
              'text-xs-right': $vuetify.breakpoint.smAndDown
            }"
          >
            <v-icon
              class="display-4"
              :class="{ 'pt-4 mt-5': $vuetify.breakpoint.mdAndUp }"
              color="lightgrey"
            >
              mdi-format-quote-close
            </v-icon>
          </v-flex>
        </v-layout>
        <v-divider class="mx-4"></v-divider>
        <Characters></Characters>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Characters from '@/views/main/aboutme/Characters'

export default {
  components: {
    Characters
  }
}
</script>
