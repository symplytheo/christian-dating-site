<template>
  <v-app>
    <core-nav-drawer
      v-model="drawer"
      :items="isLoggedIn ? loggedNav : navLinks"
    />

    <core-app-bar
      :items="isLoggedIn ? loggedNav : navLinks"
      @toggle-drawer="drawer = !drawer"
    />

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
  data() {
    return {
      drawer: false,
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters['user/authenticated']
    },
    navLinks() {
      return this.$store.state.navLinks
    },
  },
}
</script>
