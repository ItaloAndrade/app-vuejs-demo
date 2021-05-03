<template>
  <v-card>
    <div class="d-flex flex-row">
      <v-avatar v-if="avatar" :size="size" class="mx-auto v-card-material-avatar elevation-20">
        <v-img  max-width="85" :src="avatar" />
      </v-avatar>
    </div>
    <slot />
  </v-card>
</template>

<script>
  export default {
    name: 'ProfileCard',
    props: {
      avatar: {
        type: String,
        default: '',
      },
      size: {
        type: Number,
        default: 100,
      },
    },
    computed: {},
  }
</script>

<style lang="sass" scoped>
  .v-card-material-avatar 
    position: relative 
    top: -64px 
    margin-bottom: -32px  
</style>