<template>
  <v-row dense>
    <v-col
      v-for="(item, index) in themes"
      :key="index"
      :cols="cols"
      class="point-click"
      :class="['text-center', {'elevation-20 pa-2 input-has-value-style': themeIndex === index}] "
      @click="toggleTheme(index)"
    >
      <div
        v-for="(color, title) in item.light"
        :key="title"
        class="white--text"
        :style="{background: color}"
      >
        {{ title }}
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex';
import themes from '@/plugins/vuetifyThemes';

export default {
  name: 'AppTheme',
  props: {
    cols: {
      type: String,
      default: '6',
    },
  },
  data: () => ({
    themes,
  }),
  computed: {
    ...mapGetters('settings',[
      'themeIndex',
    ]),
  },
  methods: {
    toggleTheme(index) {
      this.$store.dispatch('settings/themeToggle', { index, vuetify: this.$vuetify });
    },
  },
};
</script>
<style lang="sass"  scoped>
 
   @import '~vuetify/src/styles/styles.sass'
  .point-click
    cursor: pointer

  .input-has-value-style 
    border: 3px solid  var(--v-primary-base)

</style>