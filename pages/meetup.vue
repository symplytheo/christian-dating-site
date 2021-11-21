<template>
  <v-container fluid class="mb-5">
    <v-row justify="center">
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
                  v-for="el in tabs"
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

        <div>
          <nuxt-child />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'secondary',
  data: () => ({
    tab: null,
    tabs: [
      { title: 'Upcoming', href: '/meetup' },
      { title: 'Interested', href: '/meetup/interested' },
      { title: 'Past', href: '/meetup/past' },
      { title: 'My Meetups', href: '/meetup/me' },
    ],
  }),
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.mobile
    },
  },
}
</script>

<style></style>
