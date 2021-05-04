<template>
  <v-container id="auth" fluid tag="section" fill-height fill-width>
    <v-row class="mt-15" justify="center">
      <v-col cols="12" md="4">
        <base-material-card avatar="./static/avatar-hero.png" :size="100">
          <v-form
            v-model="valid"
            lazy-validation
            ref="form"
            @submit.prevent="makeRegister"
          >
            <v-container class="py-0 px-8">
              <v-row>
                <v-col cols="12" md="12">
                  <v-text-field
                    ref="nome"
                    :rules="model.nomeRules"
                    v-model="model.name"
                    append-icon="mdi-account"
                    name="name"
                    :label="$t('auth.name')"
                    type="text"
                    required
                  />
                </v-col>
                <v-col cols="12" md="12">
                  <v-text-field
                    :rules="model.emailRules"
                    v-model="model.email"
                    append-icon="mdi-account"
                    name="email"
                    :label="$t('auth.email')"
                    type="email"
                    required
                  />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    :rules="model.passwordRules"
                    v-model="model.password"
                    append-icon="mdi-lock"
                    name="password"
                    :label="$t('auth.password')"
                    type="password"
                    required
                  />
                </v-col>
                <v-col cols="6" md="6" class="text-left">
                  <v-btn
                    :loading="loading"
                    type="submit"
                    :disabled="!valid"
                    color="success"
                  >
                    {{ $t("auth.btnregister") }}</v-btn
                  >
                </v-col>
                <v-col cols="6" md="6" class="text-right">
                  <h4>
                    <a @click="voltar">{{ $t("auth.back") }}</a>
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
import $router from '@/router';

export default {
  components: {
    BaseMaterialCard: () => import("@/views/components/ProfileCard"),
  },
  name: "SignUp",
  data: () => ({
    valid: true,
    loading: false,
    model: {
      nome: "",
      nomeRules: [(v) => !!v || "Nome é obrigatória !"],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail é obrigatória !",
        (v) => /.+@.+\..+/.test(v) || "E-mail inválido",
      ],
      password: "",
      passwordRules: [
        (v) => !!v || "Senha é obrigatória !",
        (v) =>
          (v && v.length >= 3) || "Senha deve ter mínimo de 3 caracteres !",
      ],
    },
  }),
  methods: {
    voltar() {
      this.$router.go(-1);
    },
    ...mapActions({
      register: "user/register",
    }),
    async makeRegister() {
      this.$refs.form.validate();
      if (!this.$refs.form.validate()) return;
      this.loading = true;
      await this.register({
        email: this.model.email,
        password: this.model.password,
        name: this.model.name,
      });
      setTimeout(() => {
        this.loading = false;
        $router.push({
        name: 'Dashboard',
        replace: true
      }).catch(() => {});
      });
    },
  },
  mounted() {
    this.$nextTick(function () {
      setTimeout(() => {
        this.$refs.nome?.focus();
      }, 500);
    });
  },
};
</script>

<style lang="sass">
a
  text-decoration: underline
</style>
