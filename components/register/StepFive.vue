<template>
  <v-card class="mt-2 py-2 px-5" flat>
    <v-card-title class="subtitle-1 font-weight-bold justify-center pb-2 pt-1">
      You're almost there, answer a few question
    </v-card-title>
    <v-divider class="mb-5" />
    <v-form>
      <v-row dense>
        <v-col cols="12" md="6">
          <div class="mb-1">Faith Status</div>
          <v-select
            v-model="form.faith_status"
            outlined
            :items="[]"
            placeholder="Select"
            :rules="[(v) => !!v || 'Your faith status is required']"
            required
          />
        </v-col>
        <v-col cols="12" md="6">
          <div class="mb-1">What role do you play in your church?</div>
          <v-select
            v-model="form.church_role"
            outlined
            :items="[]"
            placeholder="Select"
            :rules="[(v) => !!v || 'Your role in church is required']"
            required
          />
        </v-col>
        <v-col cols="12">
          <div class="mb-1">Essay About my Christian faith</div>
          <v-textarea
            v-model="form.about_faith"
            outlined
            rows="3"
            placeholder="Tell us about your christian faith"
            :rules="[(v) => !!v || 'An essay about your faith is required']"
            required
          />
        </v-col>
        <v-col cols="12">
          <div class="mb-1">
            What three Bible verses mostly inspire you on your spiritual
            journey? Please include texts of the Bible verses.
          </div>
          <v-textarea
            v-model="form.favorite_verse"
            outlined
            rows="3"
            placeholder="Enter text"
            :rules="[
              (v) =>
                !!v || 'An essay about your favourite Bible verses is required',
            ]"
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
      faith_status: '',
      church_role: '',
      about_faith: '',
      favorite_verse: '',
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
