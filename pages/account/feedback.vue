<template>
  <v-container class="py-10">
    <v-row justify="center" align="center" class="fill-height">
      <v-col cols="12" sm="11" md="10">
        <v-card flat class="pa-5">
          <h2 class="text-center font-weight-black text-h5 mb-5">
            Send Feedback
          </h2>
          <form @submit.prevent="sendFeedback">
            <v-row no-gutters justify="center">
              <v-col cols="12">
                <div class="mb-1">Message</div>
                <v-textarea
                  v-model="message"
                  outlined
                  placeholder="Tell us what you think about this platform"
                  required
                  aria-required
                />
              </v-col>
              <v-col cols="12" sm="10" md="8">
                <v-btn
                  type="submit"
                  color="primary"
                  block
                  x-large
                  depressed
                  :loading="loading"
                >
                  Send Feedback
                </v-btn>
              </v-col>
            </v-row>
          </form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    message: '',
    loading: false,
  }),
  head() {
    return { title: 'Send Feedback' }
  },
  methods: {
    sendFeedback() {},
  },
}
</script>
