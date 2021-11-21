<template>
  <v-container fluid class="my-3 my-md-10">
    <v-row justify="center">
      <v-col cols="12" md="10" lg="11">
        <v-row justify="center">
          <v-col
            v-for="(user, u) in [...users, ...users, ...users]"
            :key="u"
            cols="12"
            sm="6"
            lg="4"
          >
            <cards-user :user="user" />
          </v-col>
          <v-col cols="12" sm="8" md="6" lg="4" class="text-center">
            <v-btn block large color="primary" depressed>See More</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'secondary',
  head() {
    return { title: 'New | Dating' }
  },
  computed: {
    users() {
      return this.$store.state.users
    },
  },
}
</script>
