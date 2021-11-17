<template>
  <v-sheet
    tile
    color="transparent"
    flat
    :height="step === 2 ? 'auto' : '100vh'"
    :class="step === 2 ? 'py-16' : 'py-0'"
  >
    <v-row class="fill-height" justify="center" align="center" no-gutters>
      <v-col cols="11" sm="8" md="6" lg="4">
        <nuxt-link v-if="step === 1" to="/">
          <core-logo class="mx-auto" />
        </nuxt-link>

        <v-stepper v-model="step" flat>
          <v-stepper-items>
            <v-stepper-content step="1" class="pa-0">
              <register-step-one @submit="(d) => handleSubmit(1, d)" />
            </v-stepper-content>
            <v-stepper-content step="2" class="pa-0">
              <register-step-two
                :loading="loading"
                @prev="step = 1"
                @submit="(d) => handleSubmit(2, d)"
              />
            </v-stepper-content>
            <v-stepper-content step="3" class="pa-0">
              <register-step-success @submit="handleSubmit(3, null)" />
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  layout: 'auth',
  data: () => ({
    form: {},
    loading: false,
    step: 1,
  }),
  methods: {
    handleSubmit(step, data) {
      this.form = { ...this.form, data }
      switch (step) {
        case 1:
          this.step = 2
          break
        case 2:
          this.step = 3
          break
        case 3:
          this.$router.replace('/')
          break
        default:
          // do nothing
          break
      }
    },
  },
}
</script>

<style></style>
