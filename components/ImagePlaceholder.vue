<template>
  <v-row class="fill-height" justify="center" align="center">
    <v-progress-circular
      :color="color"
      :indeterminate="indeterminate"
      v-bind="$attrs"
    />
  </v-row>
</template>

<script>
export default {
  props: {
    color: { type: String, default: 'secondary' },
    indeterminate: { type: Boolean, default: true },
  },
}
</script>
