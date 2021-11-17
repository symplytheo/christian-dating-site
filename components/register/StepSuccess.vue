<template>
  <v-card class="pa-5 text-center" flat>
    <v-img
      src="/svgs/happy_couple.svg"
      class="mx-auto"
      height="200"
      width="200"
    />
    <h4 class="text-h6 font-weight-bold mb-2">
      Welcome to Christian Dating & Social Networking!
    </h4>
    <p>
      You are now part of the world’s fastest growing community of Christian
      singles. In almost no time, you’ll be connecting with other like-minded
      Christians. But before that, we need to know you a bit about you!
    </p>
    <v-btn block color="primary" depressed large @click="$emit('submit')">
      Continue
    </v-btn>
  </v-card>
</template>

<script>
export default {}
</script>
