<template>
  <div>
    <v-row>
      <v-col v-for="(item, n) in meetups" :key="n" cols="12" sm="6" lg="4">
        <cards-meetup :meetup="item" />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6" lg="4" class="text-center">
        <v-btn block large color="primary" depressed>See More</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  layout: 'meetup',
  head() {
    return { title: 'Upcoming | Meetups' }
  },
  computed: {
    meetups() {
      const arr = this.$store.state.meetups
      return [...arr, ...arr, ...arr]
    },
  },
}
</script>

<style></style>
