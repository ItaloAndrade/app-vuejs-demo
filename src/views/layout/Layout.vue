<template>
    <v-app>
        <appBar />
        <drawer />
        <content-view />
        <fab-thema />
        <the-layout-fab />
    </v-app>
</template>

<script>
    export default {
        name: 'Layout',
        components: {
            AppBar: () => import('./AppBar'),
            Drawer: () => import('./Drawer'),
            ContentView: () => import('./Content'),
            FabThema: () => import('./FabThema'),
            TheLayoutFab: () => import('./TheLayoutFab'),
        },
        data: () => ({
            expandOnHover: false,
        }),
    }
</script>