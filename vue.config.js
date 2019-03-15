process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
    pages: {
        index: {
            entry: 'src/main.ts',
            template: 'public/index.html',
            filename: 'index.html',
            title: process.env.VUE_APP_TITLE,
            logo: {
                favicon: process.env.VUE_APP_FAVICON
            },
            output: {
                publicPath: process.env.VUE_APP_NODE_ENV === 'production'
                ? '/My-Portfolio-v2'
                : ''
            }
        }
    }
}