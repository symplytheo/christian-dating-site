<template>
  <v-container class="my-10">
    <v-card flat class="pa-5">
      <form @submit.prevent="handleSendPod">
        <v-row no-gutters>
          <v-col cols="12">
            <div class="mb-2">
              Ask any relationship question that has been bothering you, and get
              answers from our relationship expert
            </div>
            <v-textarea
              outlined
              rows="4"
              placeholder="What's on your mind?"
              required
            />
          </v-col>
          <v-col cols="12">
            <v-btn
              type="submit"
              large
              color="primary"
              class="px-16"
              depressed
              :loading="loading"
            >
              Send
            </v-btn>
          </v-col>
        </v-row>
      </form>
    </v-card>

    <div class="my-10">
      <v-card v-for="t in 10" :key="t" flat class="pa-5 my-5">
        <div class="d-flex align-end justify-space-between mb-3">
          <div class="font-weight-medium">Anonymous</div>
          <div class="text-uppercase caption">2{{ t - 1 }} Aug, 2021</div>
        </div>
        <div class="subtitle-2 font-weight-regular">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut quam
          et massa nullam nulla dolor penatibus eget. Ipsum tempor purus augue
          egestas. Feugiat dui scelerisque tristique convallis vulputate ut
          elit. Tellus scelerisque tellus dolor a viverra elementum. Accumsan
          molestie vivamus scelerisque nulla in. Ut pulvinar pellentesque
          sollicitudin vitae.
        </div>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  layout: 'secondary',
  data: () => ({
    message: '',
    loading: false,
  }),
  methods: {
    handleSendPod() {},
  },
}
</script>
