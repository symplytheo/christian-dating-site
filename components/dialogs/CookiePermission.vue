<template>
  <v-dialog
    v-model="dialog"
    max-width="100%"
    hide-overlay
    persistent
    content-class="dialog-cookie"
  >
    <v-card tile flat width="100%" class="border-0">
      <v-card-title class="font-weight-bold subtitle-1 px-5">
        Cookie Permission
      </v-card-title>
      <v-card-text class="text--primary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptas
        nisi ut impedit doloremque aperiam delectus tempore sit perferendis
        necessitatibus, voluptatibus fugiat. Vel sed nulla quod ipsam repellat
        dolor eum.
      </v-card-text>
      <v-card-actions class="pt-0">
        <v-spacer />
        <v-btn depressed color="primary" @click="close">OK</v-btn>
      </v-card-actions>
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
