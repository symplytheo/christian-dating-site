<template>
  <v-app-bar app absolute color="white" elevation="1" height="80">
    <!-- Logo -->
    <nuxt-link to="/">
      <core-logo />
    </nuxt-link>

    <v-spacer />

    <template v-if="isLoggedIn">
      <div class="d-none d-md-flex ml-5">
        <v-text-field
          solo
          solo-inverted
          dense
          hide-details
          placeholder="Search..."
          append-icon="mdi-magnify"
          style="max-width: 400px"
        />
      </div>

      <div class="d-none d-md-flex">
        <template v-for="item in items">
          <v-btn
            v-if="item.to"
            :key="item.title"
            text
            color="primary"
            :to="item.to"
            active-class="secondary--text"
          >
            {{ item.title }}
          </v-btn>
          <v-btn
            v-else
            :key="item.title"
            text
            color="primary"
            active-class="secondary--text"
            @click="item.action"
          >
            {{ item.title }}
          </v-btn>
        </template>
      </div>
      <v-menu open-on-hover offset-y max-width="200">
        <template #activator="{ on, attrs }">
          <v-avatar color="primary" class="mx-2" v-bind="attrs" v-on="on">
            <img v-if="user.avatar" :src="user.avatar" />
            <span
              v-else
              class="text-h6 text-uppercase font-weight-bold white--text"
            >
              {{ getInitials(user.name) }}
            </span>
          </v-avatar>
        </template>
        <v-list dense class="py-0">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="text-capitalize">
                {{ user.name }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ user.email }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider />
          <v-list-item
            v-for="(item, n) in userMenu"
            :key="n"
            active-class="primary--text"
            :to="item.href"
            style="border-bottom: 1px solid #eee"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="logOut">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn depressed color="primary">Premium</v-btn>
    </template>
    <template v-else>
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
    </template>

    <v-app-bar-nav-icon
      color="primary"
      class="d-inline-flex d-md-none"
      @click.stop="$emit('toggle-drawer')"
    />
  </v-app-bar>
</template>

<script>
import { getInitials } from '~/assets/utils'

export default {
  props: {
    items: { type: Array, default: () => [] },
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
  },
  methods: {
    getInitials,
    logOut() {
      this.$store.dispatch('user/logOut')
    },
  },
}
</script>
