<template>
  <v-app>
    <v-main>
      <Snackbar />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    components: {
      Snackbar: () => import('@/views/components/Snackbar'),
    },
    data: () => ({}),
  };
</script>