<template>
  <v-app>
    <v-container id="user-profile" fluid tag="section">
      <v-row class="mt-15" justify="center">
        <v-col cols="12" md="4">
          <base-material-card 
            avatar="https://mir-s3-cdn-cf.behance.net/project_modules/disp/64838738650505.598fa28916115.png">
            <v-form >
              <v-container class="py-0">
                <v-row>
                  <v-col cols="12" md="12">
                    <v-text-field label="Email"  />
                  </v-col>
                  <v-col cols="12">
                    <v-text-field type="password" label="Senha"  />
                  </v-col>
                  <v-col cols="6" md="6" class="text-left">
                    <v-btn to="/Dashboard" color="success" >Login</v-btn>
                  </v-col>
                  <v-col cols="6" md="6" class="text-right">
                    <h4>Você não tem uma conta 
                      <router-link to="/register">Cadastre-se</router-link> </h4>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </base-material-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  export default {
    components: {
      BaseMaterialCard: () => import('@/views/components/MaterialCard'),
    },
    name: "SignIn",
  }
</script>

<style lang="sass">

</style>