<template>
  <v-app-bar app absolute color="white" flat height="80">
    <!-- Logo -->
    <nuxt-link to="/" aria-label="Home">
      <core-logo />
    </nuxt-link>

    <template v-if="isLoggedIn">
      <v-text-field
        solo
        background-color="grey lighten-3"
        flat
        hide-details
        class="mx-1 d-none d-sm-block"
        placeholder="Search for someone"
        append-icon="mdi-magnify"
        style="max-width: 400px"
      />

      <v-spacer />

      <template v-if="isMobile">
        <v-btn icon color="secondary">
          <v-icon size="30">mdi-magnify</v-icon>
        </v-btn>

        <v-badge offset-x="20" offset-y="20" bordered dot>
          <v-btn to="/account/inbox" icon color="secondary" class="mx-1">
            <v-icon size="30">mdi-chat-processing-outline</v-icon>
          </v-btn>
        </v-badge>
      </template>

      <template v-else>
        <template v-for="item in items">
          <v-btn
            v-if="!item.hasBadge"
            :key="item.title"
            text
            color="secondary"
            :to="item.to"
            exact
            active-class="primary--text"
          >
            {{ item.title }}
          </v-btn>
          <v-badge
            v-else
            :key="item.title"
            offset-x="19"
            offset-y="18"
            bordered
            dot
          >
            <v-btn
              text
              color="secondary"
              :to="item.to"
              exact
              active-class="primary--text"
            >
              {{ item.title }}
            </v-btn>
          </v-badge>
        </template>
      </template>

      <v-menu offset-y>
        <template #activator="{ on, attrs }">
          <v-avatar
            v-if="isMobile"
            color="primary"
            class="justify-center"
            v-bind="attrs"
            v-on="on"
          >
            <span class="white--text text-h6 font-weight-black">
              {{ getInitials(user.name) }}
            </span>
          </v-avatar>
          <v-list-item
            v-else
            class="px-1"
            style="max-width: 180px"
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-avatar color="primary" class="mr-1 justify-center">
              <span class="white--text text-h6 font-weight-black">
                {{ getInitials(user.name) }}
              </span>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{ user.name }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon color="black">mdi-menu-down</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </template>

        <v-list dense>
          <v-list-item v-for="(item, i) in userMenu" :key="i">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
          <v-list-item link @click="logOut">
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn class="hidden-sm-and-down" depressed color="primary">
        Premium
      </v-btn>
    </template>

    <template v-else>
      <v-spacer />
      <div class="d-none d-md-flex align-center">
        <template v-for="(item, n) in items">
          <v-btn
            v-if="!item.isLast"
            :key="n"
            text
            color="secondary"
            :to="item.to"
            class="mx-1"
          >
            {{ item.title }}
          </v-btn>
          <v-btn v-else :key="n" color="primary" depressed :to="item.to">
            {{ item.title }}
          </v-btn>
        </template>
      </div>

      <v-app-bar-nav-icon
        color="primary"
        class="d-inline-flex d-md-none"
        @click.stop="$emit('toggle-drawer')"
      />
    </template>

    <template v-if="extended" #extension>
      <v-tabs color="secondary" optional align-with-title grow center-active>
        <v-tab
          v-for="tab in tabs"
          :key="tab.title"
          :to="tab.to"
          class="text-capitalize"
        >
          {{ tab.title }}
        </v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
import { getInitials } from '~/assets/utils'

export default {
  props: {
    extended: { type: Boolean, default: false },
    items: { type: Array, default: () => [] },
    tabs: { type: Array, default: () => [] },
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters['user/authenticated']
    },
    user() {
      return this.$store.getters['user/profile']
    },
    userMenu() {
      return this.$store.state.user.userMenu
    },
    isMobile() {
      return this.$vuetify.breakpoint.mobile
    },
  },
  methods: {
    getInitials,
    logOut() {
      this.$store.dispatch('user/logOut')
    },
  },
}
</script>
