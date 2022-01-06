<template>
  <v-app class="bg">
    <main>
      <nuxt />
    </main>
  </v-app>
</template>

<script>
export default {}
</script>

<style scoped>
.bg {
  background-image: linear-gradient(
      rgba(233, 22, 118, 0.3),
      rgba(233, 22, 118, 0.3)
    ),
    url(/bg/1.webp);
  background-blend-mode: 'multiply';
  background-size: 'cover';
  background-position: center;
  background-repeat: no-repeat;
}
</style>
