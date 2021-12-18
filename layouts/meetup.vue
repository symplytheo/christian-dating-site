<template>
  <v-app>
    <core-app-bar extended :tabs="tabs" :items="loggedNav" />

    <v-main class="grey lighten-3">
      <!-- <v-container fluid class="pa-0 ma-0">
        <nuxt />
      </v-container> -->
      <v-container fluid>
        <v-row justify="center">
          <v-col cols="12" md="10" lg="11">
            <v-card flat class="pa-5">
              <v-row align="center">
                <v-col cols="12" md="7" lg="8">
                  <div>
                    Create and attend new meetups, show your interest and
                    attend. Your date is waiting for you.
                  </div>
                </v-col>
                <v-col cols="12" md="5" lg="4">
                  <v-btn
                    depressed
                    rounded
                    color="primary"
                    block
                    large
                    @click="create = true"
                  >
                    <v-icon left>mdi-plus-circle-outline</v-icon>
                    New Meetup
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="12" md="10" lg="11">
            <v-card flat class="mb-2">
              <v-row no-gutters align="center">
                <v-col v-if="!isMobile" md="4">
                  <div class="subtitle-1 font-weight-bold py-1 px-3">
                    Discover Meetups
                  </div>
                </v-col>
                <v-col cols="12" md="8">
                  <v-tabs
                    v-model="tab"
                    grow
                    :show-arrows="false"
                    color="secondary"
                    background-color="transparent"
                  >
                    <v-tab
                      v-for="el in meetupTabs"
                      :key="el.title"
                      :to="el.href"
                      class="transparent text-capitalize"
                    >
                      {{ el.title }}
                    </v-tab>
                  </v-tabs>
                </v-col>
              </v-row>
            </v-card>

            <div class="py-5">
              <nuxt />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <core-footer />

    <dialogs-cookie-permission />
    <dialogs-create-meetup v-model="create" />
  </v-app>
</template>

<script>
export default {
  middleware: 'auth',
  data: () => ({
    tab: null,
    meetupTabs: [
      { title: 'Upcoming', href: '/meetups' },
      { title: 'Interested', href: '/meetups/interested' },
      { title: 'Past', href: '/meetups/past' },
      { title: 'My Meetups', href: '/meetups/me' },
    ],
    create: false,
  }),
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
}
</script>
