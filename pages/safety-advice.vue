<template>
  <v-container class="rounded my-10">
    <v-card flat class="pa-5">
      <h2 class="text-h5 text-md-h4 font-weight-black mb-5 text-center">
        Saftey Advice
      </h2>

      <div v-for="(item, i) in advices" :key="i" class="mb-5">
        <h4 class="text-h6 text-md-h5 font-weight-bold">
          {{ item.title }}
        </h4>
        <p>
          {{ item.content }}
        </p>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    advices: [
      {
        title: 'Do not agree to physically meet anyone in an unknown place',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in elementum sit viverra nisl id. Parturient nulla facilisis proin imperdiet. Elit, vestibulum, eu ullamcorper nullam eget pellentesque quis habitant bibendum. Sed nunc dolor at justo vulputate tellus facilisis. Sagittis proin lobortis imperdiet cursus. At est viverra id consequat viverra quis urna. Platea auctor tellus placerat pretium si',
      },
      {
        title: 'Before meeting anyone, ensure you’ve had a video date ',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in elementum sit viverra nisl id. Parturient nulla facilisis proin imperdiet. Elit, vestibulum, eu ullamcorper nullam eget pellentesque quis habitant bibendum. Sed nunc dolor at justo vulputate tellus facilisis. Sagittis proin lobortis imperdiet cursus. At est viverra id consequat viverra quis urna. Platea auctor tellus placerat pretium si',
      },
      {
        title: 'Do not send nude to anyone',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in elementum sit viverra nisl id. Parturient nulla facilisis proin imperdiet. Elit, vestibulum, eu ullamcorper nullam eget pellentesque quis habitant bibendum. Sed nunc dolor at justo vulputate tellus facilisis. Sagittis proin lobortis imperdiet cursus. At est viverra id consequat viverra quis urna. Platea auctor tellus placerat pretium si',
      },
      {
        title: 'Do not reveal your password to anyone',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in elementum sit viverra nisl id. Parturient nulla facilisis proin imperdiet. Elit, vestibulum, eu ullamcorper nullam eget pellentesque quis habitant bibendum. Sed nunc dolor at justo vulputate tellus facilisis. Sagittis proin lobortis imperdiet cursus. At est viverra id consequat viverra quis urna. Platea auctor tellus placerat pretium si',
      },
    ],
  }),
  head() {
    return { title: 'Saftey Advice' }
  },
}
</script>
