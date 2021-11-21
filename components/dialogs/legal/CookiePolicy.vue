<template>
  <v-dialog v-model="dialog" fullscreen>
    <v-card tile flat>
      <v-card-title class="px-1 font-weight-bold">
        <v-btn icon class="mr-2" @click="close">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        Cookie Policy
      </v-card-title>
      <v-card-text> </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: { type: Boolean, default: false },
  },
  computed: {
    dialog: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },
  methods: {
    close() {
      this.dialog = false
    },
  },
}
</script>

<style></style>
