const packageJson = require('../package.json');

module.exports = {
  title: packageJson.title,  
  version: packageJson.version, 
  settings: {
    locale: 'pt',
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: '/static/backhero.jpg',
    logoImg: '/static/logo.jpg',
    drawer: null, 
    dense: true,
    footer: false,
    navbar: {
      show: true,
      dense: false,
      logo: true,
    },
    fullscreen: {
      show: false,
      btn: true,
    },
    settingsPanel: {
      show: false,
      btn: true,
    },
    theme: {
      index: 0,
      dark: false,
    },
  }
};