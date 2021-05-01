<template>
<v-app-bar app :dense="toolbarDense">
    <v-app-bar-nav-icon @click.stop="toggleNavbar">
        <v-icon>{{ toggleNavbarIcon }}</v-icon>
    </v-app-bar-nav-icon>
    <app-bar-breadcrumbs />
    <v-spacer />
    <v-spacer />
    <app-bar-full-screen />
    <app-bar-notification />
    <app-bar-language />
    <app-bar-profile />
</v-app-bar>
</template>

<script>
import {
    mapGetters
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
    data: () => ({}),
    computed: {
        ...mapGetters("settings", [
            'toolbarDense',
            'navbarShow',
        ]),
        toggleNavbarIcon() {
            return this.navbarShow ? 'mdi-format-indent-decrease' : 'mdi-format-indent-increase';
        },
    },
    methods: {
        toggleNavbar() {
            this.$store.dispatch('settings/NavbarToggle');
        },
    },
};
</script>
