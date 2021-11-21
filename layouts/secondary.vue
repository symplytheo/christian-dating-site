<template>
  <v-app>
    <core-app-bar extended :tabs="tabs" :items="loggedNav" />

    <v-main class="grey lighten-3">
      <v-container fluid class="pa-0 ma-0">
        <nuxt />
      </v-container>
    </v-main>

    <core-footer />
  </v-app>
</template>

<script>
export default {
  computed: {
    tabs() {
      return this.$store.state.tabs
    },
    isMobile() {
      return this.$vuetify.breakpoint.mobile
    },
    userMenu() {
      return this.$store.state.user.userMenu
    },
    loggedNav() {
      return this.$store.state.loggedNav
    },
  },
  mounted() {
    this.$store.commit('user/setUser', { name: 'Jane Doe' })
  },
}
</script>
