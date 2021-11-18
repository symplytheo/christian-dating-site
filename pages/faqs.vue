<template>
  <v-container class="rounded my-10">
    <v-card flat class="pa-5">
      <h2 class="text-h5 text-md-h4 font-weight-black mb-5 text-center">
        Frequently Asked Questions
      </h2>

      <div v-for="(item, i) in faqs" :key="i" class="mb-5">
        <h4 class="text-h6 text-md-h5 font-weight-bold">
          {{ item.question }}
        </h4>
        <p>
          {{ item.answer }}
        </p>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    faqs: [
      {
        question: 'What is Christian Dating and Social Networking?',
        answer:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in elementum sit viverra nisl id. Parturient nulla facilisis proin imperdiet. Elit, vestibulum, eu ullamcorper nullam eget pellentesque quis habitant bibendum. Sed nunc dolor at justo vulputate tellus facilisis. Sagittis proin lobortis imperdiet cursus. At est viverra id consequat viverra quis urna. Platea auctor tellus placerat pretium si',
      },
      {
        question: 'Can I get a christian date here?',
        answer:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in elementum sit viverra nisl id. Parturient nulla facilisis proin imperdiet. Elit, vestibulum, eu ullamcorper nullam eget pellentesque quis habitant bibendum. Sed nunc dolor at justo vulputate tellus facilisis. Sagittis proin lobortis imperdiet cursus. At est viverra id consequat viverra quis urna. Platea auctor tellus placerat pretium si',
      },
      {
        question: 'Is this platform paid?',
        answer:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in elementum sit viverra nisl id. Parturient nulla facilisis proin imperdiet. Elit, vestibulum, eu ullamcorper nullam eget pellentesque quis habitant bibendum. Sed nunc dolor at justo vulputate tellus facilisis. Sagittis proin lobortis imperdiet cursus. At est viverra id consequat viverra quis urna. Platea auctor tellus placerat pretium si',
      },
      {
        question: 'What is Christian Dating and Social Networking?',
        answer:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in elementum sit viverra nisl id. Parturient nulla facilisis proin imperdiet. Elit, vestibulum, eu ullamcorper nullam eget pellentesque quis habitant bibendum. Sed nunc dolor at justo vulputate tellus facilisis. Sagittis proin lobortis imperdiet cursus. At est viverra id consequat viverra quis urna. Platea auctor tellus placerat pretium si',
      },
    ],
  }),
  head() {
    return { title: 'Frequently Asked Questions' }
  },
}
</script>
