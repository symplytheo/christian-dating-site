<template>
  <v-card class="mt-2 py-2 px-5" flat>
    <v-card-title class="subtitle-1 font-weight-bold justify-center pb-2 pt-1">
      You're almost there, answer a few question
    </v-card-title>
    <v-divider class="mb-5" />
    <v-form>
      <v-row>
        <v-col cols="12" md="6">
          <div class="mb-1">What is your approach to planning?</div>
          <v-select
            v-model="form.planning_approach"
            outlined
            :items="[]"
            placeholder="Select"
          />
        </v-col>
        <v-col cols="12" md="6">
          <div class="mb-1">
            Is it important that the house is kept clean always?
          </div>
          <v-select
            v-model="form.cleaning"
            outlined
            :items="[]"
            placeholder="Select"
          />
        </v-col>
        <v-col cols="12" md="6">
          <div class="mb-1">
            Is it important that everything is in its proper place?
          </div>
          <v-select
            v-model="form.organizing"
            outlined
            :items="[]"
            placeholder="Select"
          />
        </v-col>
        <v-col cols="12" md="6">
          <div class="mb-1">Are regular mealtime important to you?</div>
          <v-select
            v-model="form.regular_mealtime"
            outlined
            :items="[]"
            placeholder="Select"
          />
        </v-col>
        <v-col cols="12" md="6">
          <div class="mb-1">How often do you exercise?</div>
          <v-select
            v-model="form.exercise"
            outlined
            :items="[]"
            placeholder="Select"
          />
        </v-col>
        <v-col cols="12" md="6">
          <div class="mb-1">Rank your ideal holiday types?</div>
          <v-select
            v-model="form.ideal_holiday"
            outlined
            :items="[]"
            placeholder="Select"
          />
        </v-col>
        <v-col cols="12" md="6">
          <div class="mb-1">
            When do you feel most at ease with your partner?
          </div>
          <v-select
            v-model="form.most_ease"
            outlined
            :items="[]"
            placeholder="Select"
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
      marriage_view: '',
      marriage_gender_roles: '',
      regular_sex: '',
      gravest_offence: '',
      relationship_goal: '',
      cooking_important: '',
      cooking: '',
      cooking_frequency: '',
      age_gap: '',
      man_older_than_woman: '',
      drinking: '',
      smoking: '',
      pets: '',
      pets_tolerant: '',
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
