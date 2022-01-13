<template>
  <v-card class="mt-2 py-2 px-5" flat>
    <v-card-title class="subtitle-1 font-weight-bold justify-center pb-2 pt-1">
      You're almost there, tell us about you
    </v-card-title>
    <v-divider class="mb-5" />
    <v-form>
      <v-row dense>
        <v-col cols="12">
          <div class="mb-1">Essay About Me</div>
          <v-textarea
            v-model="form.about"
            outlined
            rows="3"
            placeholder="Tell us a little about yourself and personality."
            :rules="[(v) => !!v || 'A short essay about you is required']"
            required
          />
        </v-col>
        <v-col cols="12" md="6">
          <div class="mb-1">How do you like to spend your free time?</div>
          <v-select
            v-model="form.leisure_activities"
            outlined
            :items="[]"
            placeholder="Select"
            multiple
            :rules="[(v) => !!v || 'How you spend your free time is required']"
            required
          />
        </v-col>
        <v-col cols="12" md="6">
          <div class="mb-1">Where do you like to spend your free time?</div>
          <v-select
            v-model="form.leisure_places"
            outlined
            :items="[]"
            placeholder="Select"
            multiple
            :rules="[(v) => !!v || 'Where you spend your freetime is required']"
            required
          />
        </v-col>
        <v-col cols="12" md="6">
          <div class="mb-1">What kind of music do you listen to?</div>
          <v-text-field
            v-model="form.music"
            outlined
            placeholder="Enter text"
            :rules="[(v) => !!v || 'Your kind of music is required']"
            required
          />
        </v-col>
        <v-col cols="12" md="6">
          <div class="mb-1">What do you want more than anything right now?</div>
          <v-select
            v-model="form.want"
            outlined
            :items="[]"
            placeholder="Select"
            :rules="[(v) => !!v || 'What you want the most is required']"
            required
          />
        </v-col>
        <v-col cols="12" md="6">
          <div class="mb-1">What mantra do you live your life by?</div>
          <v-text-field
            v-model="form.mantra"
            outlined
            placeholder="Enter text"
            :rules="[(v) => !!v || 'Your mantra is required']"
            required
          />
        </v-col>
        <v-col cols="12">
          <v-btn color="primary" block large depressed @click="handleSubmit">
            Continue
          </v-btn>
        </v-col>
        <v-col cols="12" class="text-center">
          <v-btn text @click="$emit('prev')">Back</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    form: {
      about: '',
      leisure_places: [],
      leisure_activities: [],
      mantra: '',
      want: '',
      music: '',
    },
    isValid: false,
  }),
  methods: {
    handleSubmit() {
      this.$emit('submit', this.form)
    },
  },
}
</script>
