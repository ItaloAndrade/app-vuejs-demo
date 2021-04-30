<template>
  <v-navigation-drawer dark fixed app :value="navbarShow" width="250" @input="stateNavbarShow">
    <v-app-bar v-if="navbarLogo" :dense="toolbarDense" dark>
      <v-toolbar-title class="text-center">
        <v-avatar size="32px" tile>
          <img src="img/icons/android-icon-36x36.png" alt="VVA">
        </v-avatar>
        <span>{{ $t('toolbar.appname') }}</span>
      </v-toolbar-title>
    </v-app-bar>
    <drawer-list :dense="navbarDense" :routes="permissionRoutes" icon-show />
  </v-navigation-drawer>
</template>

<script>
  import {
    mapGetters
  } from 'vuex';

  export default {
    name: 'Drawer',
    components: {
      DrawerList: () => import('@/views/layout/DrawerList'),
    },
    data: () => ({}),
    computed: {
      ...mapGetters("settings", ['navbarLogo', 'toolbarDense', 'navbarShow', 'navbarDense', 'routes',
        'user/permissionRoutes'
      ], ),
      ...mapGetters("user", ['permissionRoutes'], ),
    },
    created() {
    //  console.log(this['permissionRoutes'])
    },
    methods: {
      stateNavbarShow() {
        //this.$store.dispatch('NavbarState', { state });
      },
    },
  };
</script>