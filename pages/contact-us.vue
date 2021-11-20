<template>
  <v-container class="py-10">
    <v-row justify="center" align="center" class="fill-height">
      <v-col cols="12" sm="10" md="6" lg="5">
        <v-card flat class="pa-5">
          <h2 class="text-center font-weight-black text-h5 mb-5">Contact Us</h2>
          <div>
            <v-form v-model="isValid">
              <v-row no-gutters>
                <v-col cols="12">
                  <div class="mb-1">Name</div>
                  <v-text-field
                    v-model="form.name"
                    outlined
                    placeholder="Enter your name"
                    :rules="[(v) => !!v || 'Name is required']"
                    required
                  />
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
                  <div class="mb-1">Message</div>
                  <v-textarea
                    v-model="form.message"
                    outlined
                    placeholder="Enter your message"
                    :rules="[(v) => !!v || 'Message is required']"
                    required
                  />
                </v-col>
                <v-col cols="12">
                  <v-btn
                    color="primary"
                    block
                    large
                    depressed
                    :disabled="!isValid"
                    :loading="loading"
                    @click="sendMessage"
                  >
                    Send
                  </v-btn>
                </v-col>
                <v-col cols="12" class="pa-5 text-center">
                  You can reach out to us via email: example@gmail.com
                </v-col>
              </v-row>
            </v-form>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { emailValidation } from '~/assets/utils'

export default {
  data: () => ({
    form: {
      name: '',
      email: '',
      message: '',
    },
    isValid: false,
    loading: false,
  }),
  head() {
    return { title: 'Contact Us' }
  },
  methods: { emailValidation, sendMessage() {} },
}
</script>
