<template>
  <v-container id="auth" fluid tag="section" fill-height fill-width>
    <v-row class="mt-15" justify="center">
      <v-col cols="12" md="4">
        <base-material-card avatar="./static/avatar-hero.png" :size="100">
          <v-form v-model="valid" lazy-validation ref="form"    @submit.prevent="makeLogin">
            <v-container class="py-0 px-8">
              <v-row>
                <v-col cols="12" md="12">
                  <v-text-field :rules="model.emailRules" ref="email" v-model="model.email" append-icon="mdi-account" name="email"
                    :label="$t('auth.email')" type="email" required />
                </v-col>
                <v-col cols="12">
                  <v-text-field :rules="model.passwordRules" v-model="model.password" append-icon="mdi-lock"
                    name="password" :label="$t('auth.password')" type="password" required />
                </v-col>
                <v-col cols="6" md="6" class="text-left">
                  <v-btn :loading="loading" :disabled="!valid"  type="submit" color="success">Login</v-btn>
                </v-col>
                <v-col cols="6" md="6" class="text-right">
                  <h4>{{$t('auth.labelgoregister')}}
                    <router-link to="/register">{{$t('auth.goregister')}}</router-link>
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
  import {
    mapActions
  } from "vuex";
  import $router from '@/router';
  export default {
    name: "SignIn",
    components: {
      BaseMaterialCard: () => import('@/views/components/ProfileCard'),
    },
    data: () => ({
      valid: true,
      loading: false,
      model: {
        email: 'demo@gmail.com',
        emailRules: [
          v => !!v || 'E-mail é obrigatória !',
          v => /.+@.+\..+/.test(v) || 'E-mail inválido',
        ],
        password: 'demo*29',
        passwordRules: [
          v => !!v || 'Senha é obrigatória !',
          v => (v && v.length >= 3) || 'Senha deve ter mínimo de 3 caracteres !',
        ],
      },
    }),
    methods: {
      ...mapActions({
        'login': 'user/login'
      }),
      async makeLogin() {
        this.$refs.form.validate();
        if (!this.$refs.form.validate()) return;
        this.loading = true;
        await this.login({
          email: this.model.email,
          password: this.model.password,
        });
        setTimeout(() => {
          this.loading = false;
          $router.push({
        name: 'Dashboard',
        replace: true
      }).catch(() => {});
        });
      }
    },
    created() {},
    mounted() {
      this.$nextTick(function () {
        setTimeout(() => { 
          this.$refs.email?.focus();
        }, 1000)
      });
    }
  }
</script>

<style lang="sass">

</style>