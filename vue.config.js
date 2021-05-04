const config = require('./src/config.js');


module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  chainWebpack: con => {
    con
    .plugin('html')
    .tap(args => {
      args[0].title = config.title
      return args
    })
  }
}
