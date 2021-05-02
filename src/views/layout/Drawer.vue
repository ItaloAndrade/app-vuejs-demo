<template>
  <v-navigation-drawer dark fixed app width="250" :src="barImage"  :value="navbarShow"  @input="stateNavbarShow">
    <template v-slot:img="props">
      <v-img :gradient="`to bottom, ${barColor}`" v-bind="props"    />
    </template>
    <perfect-scrollbar ref="scroll" >
      <v-divider class="mb-1" v-if="navbarLogo" />
      <v-list   nav   v-if="navbarLogo" :dense="toolbarDense">
        <v-list-item>
          <v-list-item-avatar class="align-self-center" color="white"  width = "50" height = "50" contain>
            <v-img :src="logoImg" width = "50" height = "50"   />
          </v-list-item-avatar> 
          <v-list-item-content>
          {{title}}
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider class="mb-2" />
      <div />
      <drawer-list :dense="navbarDense" :routes="permissionRoutes" icon-show />
    </perfect-scrollbar>
  </v-navigation-drawer>
</template>

<script>
  // Utilities
  import { 
    mapGetters
  } from 'vuex'
  import {
    PerfectScrollbar
  } from 'vue2-perfect-scrollbar';


  export default {
    name: 'DashboardCoreDrawer',
    components: {
      PerfectScrollbar,
      DrawerList: () => import('@/views/layout/DrawerList'),
    },
    props: {
       
    },
    computed: {
      ...mapGetters("settings", ['navbarLogo','title', 'toolbarDense','logoImg', 'navbarShow', 'navbarDense', 'routes','barColor','barImage' ], ),
      ...mapGetters("user", ['permissionRoutes'], ),
      
    }, 
    methods: {
       stateNavbarShow(state) {
      this.$store.dispatch('settings/NavbarState', { state });
    },
    },
  }
</script>

<style scoped lang="scss"> 
  .ps {
    height: 100vh;
  } 
</style>