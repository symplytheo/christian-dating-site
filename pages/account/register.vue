<template>
  <v-sheet
    tile
    color="transparent"
    flat
    :height="isFill ? '100vh' : 'auto'"
    :class="isFill ? 'py-0' : 'py-16'"
  >
    <v-row class="fill-height" justify="center" align="center" no-gutters>
      <v-col
        cols="11"
        sm="8"
        :md="isFill || step === 2 ? 6 : 10"
        :lg="isFill || step === 2 ? 5 : 9"
      >
        <div class="text-center">
          <nuxt-link v-if="step === 1" to="/" aria-label="Logo">
            <core-logo />
          </nuxt-link>
        </div>

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
            <v-stepper-content step="4" class="pa-0">
              <register-step-three
                @prev="step -= 1"
                @submit="(d) => handleSubmit(4, d)"
              />
            </v-stepper-content>
            <v-stepper-content step="5" class="pa-0">
              <register-step-four
                @prev="step -= 1"
                @submit="(d) => handleSubmit(5, d)"
              />
            </v-stepper-content>
            <v-stepper-content step="6" class="pa-0">
              <register-step-five
                :loading="loading"
                @prev="step -= 1"
                @submit="(d) => handleSubmit(6, d)"
              />
            </v-stepper-content>
            <v-stepper-content step="7" class="pa-0">
              <register-step-six
                @prev="step -= 1"
                @submit="(d) => handleSubmit(7, d)"
              />
            </v-stepper-content>
            <v-stepper-content step="8" class="pa-0">
              <register-step-seven
                @prev="step -= 1"
                @submit="(d) => handleSubmit(8, d)"
              />
            </v-stepper-content>
            <v-stepper-content step="9" class="pa-0">
              <register-step-eight
                :loading="loading"
                @prev="step -= 1"
                @submit="(d) => handleSubmit(9, d)"
              />
            </v-stepper-content>
            <v-stepper-content step="10" class="pa-0">
              <register-step-all-set @submit="(d) => handleSubmit(10, d)" />
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
  computed: {
    isFill() {
      return [1, 3, 10, 11].includes(this.step)
    },
  },
  methods: {
    handleSubmit(step, data) {
      this.form = { ...this.form, ...data }
      switch (step) {
        case 1:
          this.step += 1
          break
        case 2:
          this.step += 1
          // register user
          this.form = {}
          break
        case 3:
          this.step += 1
          break
        case 4:
          this.step += 1
          break
        case 5:
          this.step += 1
          break
        case 6:
          this.step += 1
          break
        case 7:
          this.step += 1
          break
        case 8:
          this.step += 1
          break
        case 9:
          // complete dating profile
          this.step += 1
          break
        case 10:
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
