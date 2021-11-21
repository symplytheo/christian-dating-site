<template>
  <v-container fluid>
    <v-card flat>
      <v-card-title class="font-weight-bold">
        <v-btn color="black" class="mr-2" icon @click="$router.go(-1)">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        Message
      </v-card-title>
      <v-divider />
      <v-card-text class="px-0 text--primary">
        <v-list two-line class="py-0">
          <v-list-item
            v-for="n in 12"
            :key="n"
            link
            :style="n < 12 && 'border-bottom: 1px solid #ddd'"
          >
            <v-list-item-avatar color="primary"></v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title> Meghan, 24 </v-list-item-title>
              <v-list-item-subtitle>
                You: Thanks for letting me know
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <i>2 mins ago</i>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  head() {
    return { title: 'Messages' }
  },
}
</script>

<style></style>
