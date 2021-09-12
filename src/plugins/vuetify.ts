import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'
import 'vuetify/src/styles/main.sass'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  },
  theme: {
    dark: false,
    themes: {
      light: {
        offwhite: '#f4efe9',
        lightgrey: '#dfe0e0',
        yellow: '#f1e7b7',
        cinnamon: '#e0b265',
        lightblue: '#d6eff8',
        darkblue: '#3f4559',
        lightpurple: '#3f52ad',
        info: colors.blue.base,
        warning: colors.amber.base,
        error: colors.red.base,
        success: colors.green.base
      },
      dark: {
        offwhite: '#f4efe9',
        lightgrey: '#dfe0e0',
        yellow: '#f1e7b7',
        cinnamon: '#e0b265',
        lightblue: '#d6eff8',
        darkblue: '#3f4559',
        lightpurple: '#3f52ad',
        info: colors.blue.base,
        warning: colors.amber.base,
        error: colors.red.base,
        success: colors.green.base
      }
    }
  }
})
