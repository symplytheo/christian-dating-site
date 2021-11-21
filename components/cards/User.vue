<template>
  <v-card flat>
    <v-img :src="user.profile_pic" class="grey lighten-4" height="200">
      <template #placeholder>
        <image-placeholder />
      </template>
    </v-img>
    <v-card-text class="pa-1 text--primary">
      <div class="d-flex">
        <v-btn text class="font-weight-medium">
          <v-icon left>mdi-heart-outline</v-icon>
          Like
        </v-btn>
        <v-spacer />
        <v-btn text class="font-weight-medium">
          <v-icon left>mdi-emoticon-outline</v-icon>
          Smile
        </v-btn>
        <v-spacer />
        <v-btn text class="font-weight-medium">
          <v-icon left>mdi-hand-wave-outline</v-icon>
          Wave
        </v-btn>
      </div>
    </v-card-text>

    <v-divider />

    <v-card-text class="pa-2 text--primary">
      <div class="font-weight-bold subtitle-1">
        {{ user.name }}, {{ user.age }}
      </div>
      <div class="font-weight-medium">{{ user.location }}</div>
      <div class="d-flex caption align-center text-truncate fill-width">
        <span
          class="text-h6 font-weight-bold mr-1"
          :class="user.status === 'online' ? 'secondary--text' : 'grey--text'"
        >
          &bull;
        </span>
        {{ user.status === 'online' ? 'Online' : user.last_seen }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    user: { type: Object, default: () => ({}) },
  },
}
</script>
