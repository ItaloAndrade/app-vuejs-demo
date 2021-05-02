import {
  settings as defaultSettings,
  version,
  title
} from '@/config';
import {
  setVuetifyThemeDark,
  setVuetifyTheme
} from '@/plugins/vuetify';
import {
  setLocale
} from '@/locate';

const getDefaultSettings = () => {
  const settings = JSON.parse(JSON.stringify(defaultSettings));
  return settings;
};

export default {
  state: getDefaultSettings(), // Deep Clone
  namespaced: true,
  getters: {
    themeDark: (state) => state.theme.dark,
    fullscreenShow: (state) => state.fullscreen.show,
    toolbarDense: (state) => state.dense,
    /**ok */

    barImage: (state) => state.barImage,
    drawer: (state) => state.drawer,
    logoImg: (state) => state.logoImg,
    barColor: (state) => state.barColor,
    version: () => version,
    title: () => title,
    locale: (state) => state.locale,

    navbarDense: (state) => state.navbar.dense,
    navbarShow: (state) => state.navbar.show,
    navbarLogo: (state) => state.navbar.logo,
    fullscreenBtn: (state) => state.fullscreen.btn,

    settingsPanelBtn: (state) => state.settingsPanel.btn,
    settingsPanelShow: (state) => state.settingsPanel.show,
    footerShow: (state) => state.footer,
    themeIndex: (state) => state.theme.index,

  },

  mutations: {

    SET_SETTINGS_ALL(state, payload) {
      state.locale = payload.locale;
      state.dense = payload.dense;
      state.footer = payload.footer;
      state.navbar = payload.navbar;
      state.fullscreen = payload.fullscreen;
      state.settingsPanel = payload.settingsPanel;
      state.theme = payload.theme;
      // apply settings to plugins
      setVuetifyTheme(state.theme.index);
      setVuetifyThemeDark(state.theme.dark);
      setLocale(state.locale);
    },

    SETTINGS_PANEL_STATE: (state, payload) => {
      state.settingsPanel.show = payload.state;
    },

    SET_SETTINGS: (state, payload) => {
      state.locale = payload.locale || state.locale;
      state.dense = typeof payload.dense === 'boolean' ? payload.dense : state.dense;
      state.footer = typeof payload.dense === 'boolean' ? payload.footer : state.footer;
      state.navbar = payload.navbar || state.navbar;
      state.fullscreen = payload.fullscreen || state.fullscreen;
      state.settingsPanel = payload.settingsPanel || state.settingsPanel;
      state.theme = payload.theme || state.theme;
      // apply settings to plugins
      setVuetifyTheme(state.theme.index);
      setVuetifyThemeDark(state.theme.dark);
      setLocale(state.locale);
    },

    THEME_DARK_TOGGLE: (state) => {
      state.theme.dark = !state.theme.dark;
    },
    

    NAVBAR_DENSE_TOGGLE: (state) => {
      state.navbar.dense = !state.navbar.dense;
    },

    SET_BAR_IMAGE(state, payload) {
      state.barImage = payload
    },
    SET_DRAWER(state, payload) {
      state.drawer = payload
    }, 
   
    SET_LOCALE: (state, payload) => {
      state.locale = payload.locale;
    },
    THEME_TOGGLE: (state, payload) => {
      state.theme.index = payload.index;
    },
    /**OK */

    NAVBAR_LOGO_TOGGLE: (state) => {
      state.navbar.logo = !state.navbar.logo;
    },
    NAVBAR_TOGGLE: (state) => {
      state.navbar.show = !state.navbar.show;
    },
    NAVBAR_STATE: (state, payload) => {
      state.navbar.show = payload.state;
    },
    FULLSCREEN_TOGGLE: (state, payload) => {
      state.fullscreen.show = payload.state;
    },
    FULLSCREEN_BTN: (state, payload) => {
      state.fullscreen.btn = payload.state;
    },
    SETTINGS_PANEL_BTN_TOGGLE: (state) => {
      state.settingsPanel.btn = !state.settingsPanel.btn;
    },
    SETTINGS_PANEL_TOGGLE: (state) => {
      state.settingsPanel.show = !state.settingsPanel.show;
    },
 
    FOOTER_TOGGLE: (state) => {
      state.footer = !state.footer;
    },
 
  },
  actions: {

    changeModeStyle: async ({ commit,state}, payload) => {
      const current = {  ...state};
      current.theme.dark = payload;
      commit('SET_SETTINGS_ALL', current);
      await setVuetifyThemeDark(payload);
    },

    changeFullScreen: ({ commit,state}, payload) => {
      const current = {  ...state}; 
      current.fullscreen.show = payload;
      commit('SET_SETTINGS_ALL', current); 
    },
  
    changeLocale: async ({ commit,state}, payload) => {
      const current = {  ...state};  
      current.locale = payload.locale;
      commit('SET_SETTINGS_ALL', current); 
      await setLocale(payload.locale);
    },
    settingsPanelToggle: async ({ commit,state}) => {
      const current = {  ...state}; 
      current.settingsPanel.show = !current.settingsPanel.show;
      commit('SET_SETTINGS_ALL', current); 
    },
    toolbarDenseToggle: async ({ commit,state}) => {
      const current = {  ...state}; 
      current.dense = !current.dense;
      commit('SET_SETTINGS_ALL', current); 
    },
    settingsPanelState: async (context, payload) => {
      context.commit('SETTINGS_PANEL_STATE', payload);
    },

    themeDarkToggle: async (context) => {
      context.commit('THEME_DARK_TOGGLE');
      await setVuetifyThemeDark(context.state.theme.dark);
    },

    navbarDenseToggle: async (context) => {
      context.commit('NAVBAR_DENSE_TOGGLE');
    },

    
    navbarLogoToggle: async (context, payload) => {
      context.commit('NAVBAR_LOGO_TOGGLE', payload);
    },
    /**ok */
 
    themeToggle: async (context, payload) => {
      context.commit('THEME_TOGGLE', payload);
      await setVuetifyTheme(payload.index);
    },
    NavbarToggle: async (context, payload) => {
      context.commit('NAVBAR_TOGGLE', payload);
    },
    NavbarState: async (context, payload) => {
      context.commit('NAVBAR_STATE', payload);
    },
    FullscreenToggle: async (context, payload) => {
      context.commit('FULLSCREEN_TOGGLE', payload);
    },
    FullscreenBtn: async (context, payload) => {
      context.commit('FULLSCREEN_BTN', payload);
    },
    settingsPanelBtnToggle: async (context, payload) => {
      context.commit('SETTINGS_PANEL_BTN_TOGGLE', payload);
    },
  
    settingsPanelDefault: async (context) => {
      context.commit('SET_SETTINGS', getDefaultSettings());
    },
    footerToggle: async (context) => {
      context.commit('FOOTER_TOGGLE');
    },
  },
};