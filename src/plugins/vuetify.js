import '@mdi/font/css/materialdesignicons.css';
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import { settings } from '@/config';
import i18n from '@/locate/index';
import locales from '@/locate/vuetify'
import themes from './vuetifyThemes';

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    dark: true,
    themes: themes[0],
  },
  icons: {
    iconfont: 'mdi',
  },
  lang: {
    locales,
    current: settings.locale,
    t: (key, ...params) => i18n.t(key, params),
  },
});

/**
 * Set theme with number for Vuetify class object
 *
 * @param {Number} index new value
 */
export async function setVuetifyTheme(index) {
  if (vuetify.framework.theme.themes !== themes[index]) {
    console.log(`[Vuetify] Change theme to "${index}"`);
    vuetify.framework.theme.themes.light = themes[index].light || themes[0].light;
    vuetify.framework.theme.themes.dark = themes[index].dark || themes[0].dark;
  } else {
    console.warn(`[Vuetify] "${index}" is current theme `);
  }
}

/**
 * Set the mode to dark/light for the Vuetify class object.
 *
 * @param {Boolean} dark new value
 */
export async function setVuetifyThemeDark(dark) { 
  vuetify.framework.theme.dark = dark;
}

export default vuetify;