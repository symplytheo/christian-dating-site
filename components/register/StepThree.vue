<template>
  <v-card class="mt-2 py-2 px-5" flat>
    <v-card-title class="subtitle-1 font-weight-bold justify-center pb-2 pt-1">
      You're almost there, tell us about you
    </v-card-title>
    <v-divider class="mb-5" />
    <v-form>
      <v-row dense>
        <v-col cols="12" md="6">
          <div class="mb-1">Relationship Status</div>
          <v-select
            v-model="form.relationship_status"
            outlined
            :items="['Married', 'Single', 'Divorced', 'Widowed']"
            placeholder="Select"
            :rules="[(v) => !!v || 'Relationship status is required']"
            required
          />
        </v-col>
        <v-col cols="12" md="6">
          <div class="mb-1">Ethnic Background</div>
          <v-select
            v-model="form.ethnic"
            outlined
            placeholder="Select"
            :items="[]"
            :rules="[(v) => !!v || 'Ethnic background is required']"
            required
          />
        </v-col>
        <v-col cols="12" md="6">
          <div class="mb-1">Employment Status</div>
          <v-select
            v-model="form.employment_status"
            outlined
            :items="[]"
            placeholder="Select"
            :rules="[(v) => !!v || 'Employment status is required']"
            required
          />
        </v-col>
        <v-col cols="12" md="6">
          <div class="mb-1">Highest Education Attainment</div>
          <v-select
            v-model="form.education"
            outlined
            :items="[]"
            placeholder="Select"
            :rules="[(v) => !!v || 'Highest education attainment is required']"
            required
          />
        </v-col>
        <v-col cols="12" md="6">
          <div class="mb-1">
            What kind of work do you do currently? If unemployed, enter none
          </div>
          <v-text-field
            v-model="form.occupation"
            outlined
            placeholder="Enter occupation"
            :rules="[(v) => !!v || 'Occupation is required']"
            required
          />
        </v-col>
        <v-col cols="12" md="6">
          <div class="mb-1">
            What kind of work are you aiming or planning to do in the future?
          </div>
          <v-text-field
            v-model="form.future_work"
            outlined
            placeholder="Enter future work"
            :rules="[(v) => !!v || 'Future work is required']"
            required
          />
        </v-col>
        <v-col cols="12" md="6">
          <div class="mb-1">Languages Spoken</div>
          <v-select
            v-model="form.languages"
            outlined
            :items="[]"
            placeholder="Select"
            multiple
            :rules="[(v) => !!v || 'Languages spoken is required']"
            required
          />
        </v-col>
        <v-col cols="12" md="6">
          <div class="mb-1">Height</div>
          <v-text-field
            v-model="form.height"
            outlined
            placeholder="Feet/cm"
            :rules="[(v) => !!v || 'Height is required']"
            required
          />
        </v-col>
        <v-col cols="12" md="6">
          <div class="mb-1">Weight</div>
          <v-text-field
            v-model="form.weight"
            outlined
            placeholder="Stone/kg"
            :rules="[(v) => !!v || 'Weight is required']"
            required
          />
        </v-col>
        <v-col cols="12" md="6">
          <div class="mb-1">Body Type</div>
          <v-select
            v-model="form.body"
            outlined
            :items="[]"
            placeholder="Select"
            :rules="[(v) => !!v || 'Body type is required']"
            required
          />
        </v-col>
        <v-col cols="12" md="6">
          <div class="mb-1">Natural Hair Colour</div>
          <v-select
            v-model="form.hair"
            outlined
            :items="[]"
            placeholder="Select"
            :rules="[(v) => !!v || 'Natural hair colour is required']"
            required
          />
        </v-col>

        <v-col cols="12" md="6">
          <div class="mb-1">Eye Colour</div>
          <v-select
            v-model="form.eye"
            outlined
            :items="[]"
            placeholder="Select"
            :rules="[(v) => !!v || 'Eye colour is required']"
            required
          />
        </v-col>
        <v-col cols="12" md="6">
          <div class="mb-1">What is the age of your oldest child?</div>
          <v-text-field
            v-model="form.oldest_child"
            outlined
            placeholder="Enter text"
            :rules="[(v) => !!v || 'Oldest child\'s age is required']"
            required
          />
        </v-col>
        <v-col cols="12" md="6">
          <div class="mb-1">What is the age of your youngest child?</div>
          <v-text-field
            v-model="form.youngest_child"
            outlined
            placeholder="Enter text"
            :rules="[(v) => !!v || 'Youngest child\'s age is required']"
            required
          />
        </v-col>
        <v-col cols="12" md="6">
          <div class="mb-1">How many of your children live with you?</div>
          <v-select
            v-model="form.current_kids"
            outlined
            :items="[]"
            placeholder="Select"
            :rules="[(v) => !!v || 'No. of kids with you is required']"
            required
          />
        </v-col>
        <v-col cols="12" md="6">
          <div class="mb-1">Do you want children/more children?</div>
          <v-select
            v-model="form.more_kids"
            outlined
            :items="[]"
            placeholder="Select"
            :rules="[(v) => !!v || 'No. of more kids you want is required']"
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
      relationship_status: '',
      ethnic: '',
      employment_status: '',
      education: '',
      occupation: '',
      future_work: '',
      languages: [],
      height: '',
      weight: '',
      body: '',
      hair: '',
      eye: '',
      oldest_child: '',
      youngest_child: '',
      current_kids: '',
      more_kids: '',
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
