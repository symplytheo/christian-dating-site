<template>
  <v-sheet tile color="transparent" flat height="100vh">
    <v-row class="fill-height" justify="center" align="center" no-gutters>
      <v-col cols="11" sm="8" md="6" lg="5">
        <div class="text-center">
          <nuxt-link to="/" aria-label="Logo">
            <core-logo />
          </nuxt-link>
        </div>
        <v-card class="mt-2 py-2" flat>
          <h2 class="subtitle-1 font-weight-bold text-center mb-2">
            Begin your search for a date
          </h2>
          <v-divider />
          <div class="pa-5">
            <h4 class="text-h5 font-weight-bold text-center mb-3">Login</h4>
            <v-form v-model="isValid">
              <v-row no-gutters>
                <v-col cols="12">
                  <div class="mb-1">Email</div>
                  <v-text-field
                    v-model="form.email"
                    type="email"
                    required
                    outlined
                    placeholder="Enter email"
                    :rules="[
                      (v) => !!v || 'Email is required',
                      (v) => emailValidation(v) || 'Email is invalid',
                    ]"
                  />
                </v-col>
                <v-col cols="12">
                  <div class="mb-1">Password</div>
                  <v-text-field
                    v-model="form.password"
                    outlined
                    placeholder="Enter password"
                    :type="show ? 'text' : 'password'"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[(v) => !!v || 'Password is required']"
                    required
                    @click:append="show = !show"
                  />
                </v-col>
                <v-col cols="12" class="text-right mb-1">
                  <nuxt-link to="">Forget Password?</nuxt-link>
                </v-col>
                <v-col cols="12">
                  <v-btn
                    color="primary"
                    block
                    large
                    depressed
                    :disabled="!isValid"
                    :loading="loading"
                    @click="handleLogin"
                  >
                    Login
                  </v-btn>
                </v-col>
                <v-col cols="12" class="text-center mt-1">
                  Don’t have an account?
                  <nuxt-link to="/account/register" class="mb-1"
                    >Sign Up</nuxt-link
                  >
                </v-col>
              </v-row>
            </v-form>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
import Cookies from 'js-cookie'
import { emailValidation } from '~/assets/utils'

export default {
  layout: 'auth',
  data: () => ({
    form: {
      email: '',
      password: '',
    },
    isValid: false,
    loading: false,
    show: false,
  }),
  methods: {
    emailValidation,
    handleLogin() {
      Cookies.set('CDSNtoken', 'cdsnuser001')
      this.$store.commit('user/setUser', {
        name: 'Jane Doe',
        email: 'janedoe@gmail.com',
      })
      this.$router.push('/')
    },
  },
}
</script>

<style></style>
