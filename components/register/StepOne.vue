<template>
  <v-card class="mt-2 py-2" flat>
    <h2 class="subtitle-1 font-weight-bold text-center mb-2">
      Register to begin your search for a date
    </h2>
    <v-divider />
    <div class="pa-3">
      <v-form v-model="isValid">
        <v-row no-gutters>
          <v-col cols="12" class="text-center">
            <div class="mb-1">Dating Needs</div>
            <v-chip-group v-model="form.need" column>
              <v-row justify="center" class="py-2">
                <v-chip
                  v-for="need in needs"
                  :key="need.value"
                  color="primary_alt"
                  filter
                  outlined
                  label
                  class="py-5 subtitle-1"
                  :value="need.value"
                >
                  {{ need.title }}
                </v-chip>
              </v-row>
            </v-chip-group>
          </v-col>
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
              @click:append="show = !show"
            />
          </v-col>
          <v-col cols="12">
            <v-btn
              color="primary"
              block
              large
              depressed
              :disabled="!isValid"
              @click="handleSubmit"
            >
              Next
            </v-btn>
          </v-col>
          <v-col cols="12" class="text-center mt-1">
            Already have an account?
            <nuxt-link to="/account/login" class="mb-1">Sign in</nuxt-link>
          </v-col>
        </v-row>
      </v-form>
    </div>
  </v-card>
</template>

<script>
import { emailValidation } from '~/assets/utils'

export default {
  data: () => ({
    form: {
      email: '',
      password: '',
      need: '',
    },
    isValid: false,
    show: false,
    needs: [
      { title: 'Woman seeking man', value: 'woman_man' },
      { title: 'Man seeking woman', value: 'man_woman' },
    ],
  }),
  methods: {
    emailValidation,
    handleSubmit() {
      this.$emit('submit', this.form)
    },
  },
}
</script>
