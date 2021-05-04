import Vue from 'vue';
import VueI18n from 'vue-i18n';

import { settings } from '@/config';
import vuetify from '@/locate/vuetify';
import en from './en_US'; 
import pt from './pt_BR'; 

Vue.use(VueI18n);

const messages = {
  en: {
    ...en,
    $vuetify: vuetify.en,
  },
  pt: {
    ...pt,
    $vuetify: vuetify.pt,
  }
};


export const locales = [
  {
    title: 'English',
    locale: 'en',
    abbr: 'ENG',
  },  
  {
    title: 'Português',
    locale: 'pt',
    abbr: 'BRA',
  },  
];


const i18n = new VueI18n({
  locale: settings.locale,
  messages,
});

export async function setLocale(locale) {
  if (i18n.locale !== locale) {
    console.log(`[Locale] Set to "${locale}"`);
    i18n.locale = locale || settings.locale;
  } else {
    console.warn(`[Locale] "${locale}" is current`);
  }
}


export default i18n;