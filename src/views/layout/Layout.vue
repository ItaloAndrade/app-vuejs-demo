<template>
<v-app>
    <AppBar />
    <Drawer />
    <Content />
</v-app>
</template>

<script>
export default {
    name: 'Layout',
    components: {
        AppBar: () => import('./AppBar'),
        Drawer: () => import('./Drawer'),
        Content: () => import('./Content'),
    },
    data: () => ({
        expandOnHover: false,
    }),
}
</script>
