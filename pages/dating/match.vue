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
  data: () => ({
    users: [
      {
        name: 'Meghan',
        profile_pic: '/images/person-1.png',
        age: 24,
        location: 'Shutterton, England',
        status: 'offline',
        last_seen: '2 mins ago',
      },
      {
        name: 'Promise',
        profile_pic: '/images/person-2.png',
        age: 32,
        location: 'Celtic, Scotland',
        status: 'online',
      },
      {
        name: 'Claire',
        profile_pic: '/images/person-3.png',
        age: 24,
        location: 'Texas, USA',
        status: 'online',
      },
      {
        name: 'Olivia',
        profile_pic: '/images/person-4.png',
        age: 24,
        location: 'Ontawa, Canada',
        status: 'offline',
        last_seen: '1 hour ago',
      },
    ],
  }),
  head() {
    return { title: 'Match | Dating' }
  },
}
</script>
