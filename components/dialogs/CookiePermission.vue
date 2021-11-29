<template>
  <v-dialog
    v-model="dialog"
    max-width="100%"
    hide-overlay
    persistent
    content-class="dialog-cookie"
  >
    <v-card color="primary" dark tile flat width="100%" class="border-0">
      <div class="pa-5">
        <v-row align="center">
          <v-col cols="12" md="8" lg="9">
            We use cookies to provide our services and for analytics and
            marketing. To find out more about our use of cookies, please see our
            <nuxt-link to="/legal#privacy-policy" class="secondary--text"
              >Privacy Policy</nuxt-link
            >
            and
            <nuxt-link to="/legal#cookie-policy" class="secondary--text"
              >Cookie Policy</nuxt-link
            >. By continuing to browse our website, you agree to our use of
            cookies.
          </v-col>
          <v-col cols="12" md="4" lg="3">
            <v-btn depressed large block color="secondary" @click="close">
              I understand
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import Cookies from 'js-cookie'

export default {
  computed: {
    dialog: {
      get() {
        return this.$store.state.cookiePermission
      },
      set(val) {
        this.$store.commit('setCookiePermission', val)
      },
    },
  },
  methods: {
    close() {
      Cookies.set('allowCookie', true)
      this.dialog = false
    },
  },
}
</script>

<style>
.v-dialog.dialog-cookie {
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 0px;
  border-radius: 0;
}
</style>
