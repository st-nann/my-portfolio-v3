const path = require('path')

process.env.VUE_APP_VERSION = require('./package.json').version

function getImageFromStorse(name) {
  return `https://firebasestorage.googleapis.com/v0/b/my-portfolio-v3.appspot.com/o/${name}.png?alt=media`
}
process.env.VUE_APP_FAVICON = getImageFromStorse(
  process.env.VUE_APP_FAVICON_NAME
)
process.env.VUE_APP_LOGO_BLACK = getImageFromStorse(
  process.env.VUE_APP_LOGO_BLACK_NAME
)
process.env.VUE_APP_LOGO_WHITE = getImageFromStorse(
  process.env.VUE_APP_LOGO_WHITE_NAME
)
process.env.VUE_APP_LOGO_NOTEXT_BLACK = getImageFromStorse(
  process.env.VUE_APP_LOGO_NOTEXT_BLACK_NAME
)
process.env.VUE_APP_LOGO_NOTEXT_WHITE = getImageFromStorse(
  process.env.VUE_APP_LOGO_NOTEXT_WHITE_NAME
)

module.exports = {
  chainWebpack(config) {
    config
      .entry('app')
      .clear()
      .add('./src/main.ts')
      .end()
    config.resolve.alias
      // .set('~', path.join(__dirname, './src'))
      .set('@', path.join(__dirname, './src'))
    // .set('#', path.join(__dirname, './src/modules'))
  },
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: [path.resolve(__dirname, 'src/')],
          indentedSyntax: true
        },
        prependData: '@import "~@/assets/sass/main.scss"'
      }
    }
  },
  assetsDir: '@/assets/',
  transpileDependencies: ['vuetify'],
  configureWebpack: {
    mode: process.env.VUE_APP_MODE
  },
  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
      title: process.env.VUE_APP_TITLE,
      logo: {
        favicon: process.env.VUE_APP_FAVICON,
        black: process.env.VUE_APP_LOGO_BLACK,
        white: process.env.VUE_APP_LOGO_WHITE,
        black_notext: process.env.VUE_APP_LOGO_NOTEXT_BLACK,
        white_notext: process.env.VUE_APP_LOGO_NOTEXT_WHITE
      },
      output: {
        publicPath:
          process.env.VUE_APP_NODE_ENV === 'production'
            ? '/my-portfolio-v3'
            : ''
      }
    }
  }
}
