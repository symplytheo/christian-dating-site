<template>
  <v-app>
    <div style="height: 100vh">
      <v-row class="fill-height" align="center" justify="center">
        <v-col cols="10" sm="9" md="6" lg="5" class="text-center">
          <div>
            <div class="text-h2 text-sm-h1 font-weight-black">
              {{ error.statusCode }}
            </div>
            <h1 class="text-h5 text-sm-h4 font-weight-black">
              {{ error.statusCode === 404 ? pageNotFound : otherError }}
            </h1>
          </div>
          <div class="mt-2">
            <v-btn text @click="$router.go(-1)"> Back </v-btn>
            <v-btn color="primary" depressed to="/">Home</v-btn>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: 'Page Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>
