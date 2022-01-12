<template>
  <v-container class="py-10">
    <v-row justify="center" align="center" class="fill-height">
      <v-col cols="12" sm="11" md="10">
        <v-card flat class="pa-5">
          <h2 class="text-center font-weight-black text-h5 mb-5">
            Refer a Friend
          </h2>
          <div class="text-center pb-5">
            <p>
              Refer a friend for premium category and get an extra 3-months
              premium membership for free
            </p>
            <p class="secondary--text my-10">
              {{ link }}
            </p>
            <v-btn
              depressed
              large
              color="grey lighten-2"
              @click="copyToClipboard"
            >
              Copy Link
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    link: 'jmmE034KZ9a3T6TzhCLspr/Christian-Dating-SIte?node-id=164%3A19',
  }),
  head() {
    return { title: 'Refer a Friend' }
  },
  methods: {
    copyToClipboard() {
      navigator.clipboard.writeText(this.link)
    },
  },
}
</script>
