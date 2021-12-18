<template>
  <v-card flat>
    <nuxt-link class="text-decoration-none" to="/events/1">
      <v-img :src="event.image" height="200" class="grey lighten-4 rounded-t">
        <template #placeholder>
          <image-placeholder />
        </template>
      </v-img>
    </nuxt-link>
    <v-card-text class="text--primary">
      <div class="d-flex justify-space-between secondary--text subtitle-2">
        <div class="subtitle-2 text-uppercase">
          {{ event.date }}
          <span class="ml-1">{{ event.time }}</span>
        </div>

        <div class="font-weight-bold">$150</div>
      </div>
      <h4 class="subtitle-1 font-weight-bold text-truncate text-capitalize">
        {{ event.title }}
      </h4>
      <div class="font-weight-medium">{{ event.type }}</div>
      <div class="d-flex align-center text--secondary">
        <div class="text-truncate">{{ event.interested }} Interested</div>
        <div class="text-truncate ml-2">{{ event.likes }} Likes</div>
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
    event: { type: Object, default: () => ({}) },
    noAction: { type: Boolean, default: false },
  },
}
</script>

<style></style>
