<template>

  <v-container id="auth" fluid tag="section" fill-height fill-width>
    <v-row class="mt-15" justify="center">
      <v-col cols="12" md="4">
        <base-material-card
          avatar="https://mir-s3-cdn-cf.behance.net/project_modules/disp/64838738650505.598fa28916115.png">
          <v-form>
            <v-container class="py-0 px-8">
              <v-row>
                <v-col cols="12" md="12">
                  <v-text-field label="Email" />
                </v-col>
                <v-col cols="12">
                  <v-text-field type="password" label="Senha" />
                </v-col>
                <v-col cols="6" md="6" class="text-left">
                  <v-btn @click="op" color="success">Login</v-btn>
                </v-col>
                <v-col cols="6" md="6" class="text-right">
                  <h4>Você não tem uma conta
                    <router-link to="/register">Cadastre-se</router-link>
                  </h4>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script> 

 
import { mapActions } from "vuex";
export default {

 
    components: {
      BaseMaterialCard: () => import('@/views/components/MaterialCard'),
    },

    name: "SignIn",
    methods: {
      ...mapActions( {'showAlert': 'user/getCurrent'}),
     
    op(){
      this.showAlert();
    }
    },
    created() {
      this.$store.subscribe((mutation, state) => {

        if (mutation.type === "user/SET_CURRENT_USER") {
          console.log(state.user.email);
        }
      });
    }
  }
</script>

<style lang="sass">

</style>