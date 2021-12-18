<template>
  <v-card flat>
    <nuxt-link class="text-decoration-none" to="/meetups/1">
      <v-img :src="meetup.image" height="200" class="grey lighten-4 rounded-t">
        <template #placeholder>
          <image-placeholder />
        </template>
      </v-img>
    </nuxt-link>
    <v-card-text class="text--primary">
      <div class="secondary--text subtitle-2 text-uppercase">
        {{ meetup.date }}
        <span class="ml-4">{{ meetup.time }}</span>
      </div>
      <h4 class="subtitle-1 font-weight-bold text-truncate text-capitalize">
        {{ meetup.title }}
      </h4>
      <div class="font-weight-medium">{{ meetup.type }}</div>
      <div class="d-flex align-center text--secondary">
        <div class="text-truncate">{{ meetup.interested }} Interested</div>
        <div class="text-truncate ml-2">{{ meetup.likes }} Likes</div>
      </div>
      <v-row v-if="!noAction" dense class="mt-1">
        <v-col cols="6">
          <v-btn block depressed>Interested</v-btn>
        </v-col>
        <v-col cols="6">
          <v-btn block depressed>Like</v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    meetup: { type: Object, default: () => ({}) },
    noAction: { type: Boolean, default: false },
  },
}
</script>

<style></style>
