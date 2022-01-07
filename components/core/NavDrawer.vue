<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    color="white"
    right
    :width="$vuetify.breakpoint.xs ? '100vw' : 250"
    temporary
    hide-overlay
  >
    <div class="text-right ma-3">
      <v-btn icon large @click="drawer = false">
        <v-icon>{{ mdiClose }}</v-icon>
      </v-btn>
    </div>

    <v-list nav>
      <template v-for="(item, i) in items">
        <v-list-item
          v-if="!item.isLast"
          :key="i"
          :to="item.to"
          exact
          active-class="secondary--text font-weight-bold"
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>

    <div v-if="items.at(-1).isLast" class="mt-10 px-3">
      <v-btn block large depressed color="primary" :to="items.at(-1).to">
        {{ items.at(-1).title }}
      </v-btn>
    </div>
  </v-navigation-drawer>
</template>

<script>
import { mdiClose } from '@mdi/js'
import { getInitials } from '~/assets/utils'

export default {
  props: {
    value: { type: Boolean, default: false },
    items: { type: Array, default: () => [] },
  },
  data: () => ({
    mdiClose,
  }),
  computed: {
    drawer: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
    isLoggedIn() {
      return this.$store.getters['user/authenticated']
    },
    user() {
      return this.$store.getters['user/profile']
    },
  },
  methods: {
    getInitials,
  },
}
</script>
