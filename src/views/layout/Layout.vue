<template>
    <v-app>
        <appBar />
        <drawer />
        <content-view />
        <fab-page-back />
        <fab-thema-right />
    </v-app>
</template>

<script>
    export default {
        name: 'Layout',
        components: {
            AppBar: () => import('./AppBar'),
            Drawer: () => import('./Drawer'),
            ContentView: () => import('./Content'),
            FabPageBack: () => import('./FabPageBack'),
            FabThemaRight: () => import('./FabThemaRight'),
        },
        data: () => ({
            expandOnHover: false,
        }),
    }
</script>