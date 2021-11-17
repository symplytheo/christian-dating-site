<template>
  <v-snackbar
    v-model="show"
    bottom
    right
    :timeout="timeout"
    :color="color"
    class="mb-5"
  >
    <div class="d-flex">
      <div v-if="icon === 'loading'" class="mr-3">
        <v-progress-circular indeterminate size="28" color="white" />
      </div>
      <div v-else class="mr-3">
        <v-icon v-if="icon === 'success'" color="white">
          mdi-check-circle
        </v-icon>
        <v-icon v-else-if="icon === 'error'" color="white">
          mdi-close-circle
        </v-icon>
        <v-icon v-else-if="icon === 'warning'" color="white">
          mdi-minus-circle
        </v-icon>
      </div>
      <div class="subtitle-1 font-weight-medium">
        {{ message }}
      </div>
    </div>
  </v-snackbar>
</template>

<script>
export default {
  computed: {
    show: {
      get() {
        return this.$store.state.snackbar.show
      },
      set(newVal) {
        this.$store.commit('snackbar/show')
      },
    },
    icon() {
      return this.$store.state.snackbar.icon
    },
    timeout() {
      return this.$store.state.snackbar.timeout
    },
    message() {
      return this.$store.state.snackbar.text
    },
    color() {
      return this.$store.state.snackbar.color
    },
  },
}
</script>
