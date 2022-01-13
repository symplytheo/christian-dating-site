<template>
  <v-card class="pa-5 text-center" flat>
    <v-img src="/svgs/thumb.svg" class="mx-auto" height="93" width="87" />

    <p>
      You may want to review and edit your profile via the menu. After that,
      you'll be ready to connect with other single Christians.
    </p>
    <p class="my-3">
      Simply browse profiles then use the different features available on our
      website to connect with the people you like. As a trial member, you have
      access to almost all features for a limited time only
    </p>
    <v-btn block color="primary" depressed large @click="$emit('submit')">
      Continue
    </v-btn>
  </v-card>
</template>

<script>
export default {}
</script>
