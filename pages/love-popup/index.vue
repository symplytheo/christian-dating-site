<template>
  <v-container class="my-10">
    <v-card flat class="pa-3 mb-5">
      <div class="d-inline-flex align-center mb-3">
        <v-avatar size="62" color="grey">
          <img />
        </v-avatar>
        <div class="ml-2">
          <div class="font-weight-medium">Admin</div>
          <div class="caption">2{{ t }} mins</div>
        </div>
      </div>
      <div class="px-2">
        You suspect that your partner has been calling someone of the opposite
        sex and you're worried that they may be having an affair. What would you
        do?
      </div>
      <div class="mt-2">
        <v-divider />
        <div class="text-right py-1">
          <v-btn text color="grey">View 44 Comments</v-btn>
        </div>
      </div>

      <!-- comment form -->
      <div class="d-flex align-start my-3 px-2">
        <v-avatar size="60" color="grey">
          <img src="/images/person-2.png" alt="" />
        </v-avatar>
        <div class="ml-4 fill-width">
          <v-textarea
            rows="3"
            solo
            flat
            placeholder="Enter comment"
            background-color="#f0f0f0"
          />
        </div>
      </div>

      <!-- comments -->
      <div
        v-for="(el, l) in ['Promise, 28', 'David 24']"
        :key="l"
        class="d-flex align-start my-3 px-2"
      >
        <v-avatar size="60" color="grey">
          <img :src="`/images/person-${l + 3}.png`" alt="" />
        </v-avatar>
        <div class="ml-4 fill-width">
          <v-card flat color="#f0f0f0" class="pa-3">
            <div class="font-weight-medium">{{ el }}</div>
            <div class="subtitle-2 font-weight-regular">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut
              quam et massa nullam nulla dolor penatibus eget. Ipsum tempor
              purus augue egestas. Feugiat dui scelerisque tristique convallis
              vulputate ut elit. Tellus scelerisque tellus dolor a viverra
              elementum. Accumsan molestie vivamus scelerisque nulla in. Ut
              pulvinar pellentesque sollicitudin vitae.
            </div>
          </v-card>
          <div class="caption">10 mins</div>
        </div>
      </div>
    </v-card>

    <!-- others -->
    <v-card v-for="t in 3" :key="t" flat class="pa-3 my-5">
      <div class="d-inline-flex align-center mb-3">
        <v-avatar size="62" color="grey">
          <img />
        </v-avatar>
        <div class="ml-2">
          <div class="font-weight-medium">Admin</div>
          <div class="caption">2{{ t }} mins</div>
        </div>
      </div>
      <div class="px-2">
        You suspect that your partner has been calling someone of the opposite
        sex and you're worried that they may be having an affair. What would you
        do?
      </div>
      <div class="mt-2">
        <v-divider />
        <div class="text-right py-1">
          <v-btn text color="grey">View 44 Comments</v-btn>
        </div>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  layout: 'secondary',
}
</script>

<style></style>
