<template>
  <v-menu offset-y origin="center center" :nudge-bottom="10" transition="scale-transition">
    <template v-slot:activator="{on}">
      <v-btn icon text v-on="on">
        <v-icon>mdi-bell</v-icon>
      </v-btn>
    </template>
    <v-list class="pa-0" two-line subheader>
      <v-subheader> {{ $t("dashboard.notification") }}</v-subheader>
      <v-divider /> 
      <v-list-item v-for="item in items" :key="item.title" avatar @click="1">
        <v-list-item-avatar>
          <v-icon :class="[item.iconClass]">
            {{ item.icon }}
          </v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon ripple>
            <v-icon color="grey lighten-1">
              mdi-information
            </v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-divider />

  </v-menu>
</template>

<script>
  export default {
    name: 'AppBarNotification',
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