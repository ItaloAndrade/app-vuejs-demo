<template>
    <v-app-bar app :dense="toolbarDense">
        <v-app-bar-nav-icon @click.stop="toggleNavbar">
            <v-icon>{{ toggleNavbarIcon }}</v-icon>
        </v-app-bar-nav-icon>
        <app-bar-breadcrumbs /> 
        <v-spacer />
        <app-bar-full-screen />
        <v-btn icon  @click.stop="changeModeStyle(!themeDark)">
            <v-icon>{{ !themeDark ? 'mdi-brightness-2' : 'mdi-brightness-7'}}</v-icon>
        </v-btn>
   
         
        <app-bar-notification />
       
        <app-bar-language />
        <app-bar-profile />
    </v-app-bar>
</template>

<script>
    import {
        mapGetters,mapActions
    } from 'vuex';

    export default {
        name: 'AppBar',
        components: {
            AppBarBreadcrumbs: () => import('@/views/components/AppBarBreadcrumbs'),
            AppBarFullScreen: () => import('@/views/components/AppBarFullScreen'),
            AppBarNotification: () => import('@/views/components/AppBarNotification'),
            AppBarLanguage: () => import('@/views/components/AppBarLanguage'),
            AppBarProfile: () => import('@/views/components/AppBarProfile'),
        },
        data: () => ({

        }),
        computed: {
            ...mapGetters("settings", [
                'toolbarDense',
                'navbarShow',
                'themeDark'
            ]),
          
            toggleNavbarIcon() {
                return this.navbarShow ? 'mdi-format-indent-decrease' : 'mdi-menu';
            },
        },
        methods: {
              ...mapActions({  changeModeStyle: "settings/changeModeStyle"}),
            toggleNavbar() {
                this.$store.dispatch('settings/NavbarToggle');
            }, 
        },
    };
</script>