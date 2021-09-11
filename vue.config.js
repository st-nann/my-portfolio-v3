process.env.VUE_APP_VERSION = require('./package.json').version

function getImageFromStorse(name, token) {
    return `https://firebasestorage.googleapis.com/v0/b/my-portfolio-v2.appspot.com/o/${name}.png?alt=media&token=${token}`
}
process.env.VUE_APP_FAVICON = getImageFromStorse(process.env.VUE_APP_FAVICON_NAME, process.env.VUE_APP_FAVICON_TOKEN)
process.env.VUE_APP_LOGO_BLACK = getImageFromStorse(process.env.VUE_APP_LOGO_BLACK_NAME, process.env.VUE_APP_LOGO_BLACK_TOKEN)
process.env.VUE_APP_LOGO_WHITE = getImageFromStorse(process.env.VUE_APP_LOGO_WHITE_NAME, process.env.VUE_APP_LOGO_WHITE_TOKEN)
process.env.VUE_APP_LOGO_NOTEXT_BLACK = getImageFromStorse(process.env.VUE_APP_LOGO_NOTEXT_BLACK_NAME, process.env.VUE_APP_LOGO_NOTEXT_BLACK_TOKEN)
process.env.VUE_APP_LOGO_NOTEXT_WHITE = getImageFromStorse(process.env.VUE_APP_LOGO_NOTEXT_WHITE_NAME, process.env.VUE_APP_LOGO_NOTEXT_WHITE_TOKEN)

module.exports = {
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
                publicPath: process.env.VUE_APP_NODE_ENV === 'production'
                ? '/My-Portfolio-v2'
                : ''
            }
        }
    }
}