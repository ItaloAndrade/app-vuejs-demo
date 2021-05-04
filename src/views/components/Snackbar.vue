<template>
  <div name="snackbars">
    <v-snackbar shaped absolute  elevation="24" v-model="show" :color="color" :timeout="timeout"
     right  top>
      {{ message }}

      <template v-slot:action="{ attrs }">
        <v-btn dark text v-bind="attrs" @click="snackbar = false">
          Fechar
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.subscribe((mutation, state) => {
       
      if (mutation.type === "snackbar/SHOW_MESSAGE") {
        this.message = state.snackbar.message;
        this.color = state.snackbar.color;
        this.timeout = state.snackbar.timeout;
        this.show = true; 
      }
    });
  },
  data() {
    return {
      show: false,
      color: "",
      message: "",
      timeout: -1,
    };
  },
};
</script>
