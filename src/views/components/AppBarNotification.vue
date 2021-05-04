<template>
<div>
  <v-badge   v-if="getFavoritos.length"
        bordered
        bottom
        color="deep-purple accent-4"
          
        offset-x="-30"
        offset-y="20"
        :content="getFavoritos.length"
        > 
   </v-badge>
  <v-menu max-width="280" offset-y origin="center center" :nudge-bottom="10" transition="scale-transition">
       
    <template v-slot:activator="{on}">
      <v-btn icon text v-on="on">
        <v-icon>mdi-bell</v-icon>
      </v-btn>
    </template>
    <v-list class="pa-0" two-line subheader>
      <v-subheader> {{ $t("dashboard.notification") }}</v-subheader>
      <v-divider /> 
      <v-list-item v-for="item in getFavoritos" :key="item._id" avatar @click="1">
      <v-avatar size="40">
      <img
        :src="item.img"
        alt="John"
      >
    </v-avatar>

        <v-list-item-content class="ml-3">
          <v-list-item-title>{{ item.nomeComic }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.nomeComic }}</v-list-item-subtitle>
        </v-list-item-content> 
        
      </v-list-item>
    </v-list>
    <v-divider />

  </v-menu>
   </div>
</template>

<script>
import { 
    mapGetters 
} from "vuex";
  export default {
    name: 'AppBarNotification',
      computed: {
        ...mapGetters("favorito", [
            'getFavoritos',
        ]),
    },
    data: () => ({
      items: [{
          icon: 'mdi-message',
          iconClass: 'blue white--text',
          title: 'Mussum Ipsum, cacilds',
          subtitle: 'Jan 20, 2021',
        },
        {
          icon: 'mdi-alarm',
          iconClass: 'amber white--text',
          title: 'Posuere libero varius.',
          subtitle: 'Jan 10, 2021',
        },
      ],

    }),
  };
</script>

<style scoped>

</style>