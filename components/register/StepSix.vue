<template>
  <v-card class="mt-2 py-2 px-5" flat>
    <v-card-title class="subtitle-1 font-weight-bold justify-center pb-2 pt-1">
      You're almost there, answer a few question
    </v-card-title>
    <v-divider class="mb-5" />
    <v-form>
      <v-row>
        <v-col cols="12" md="6">
          <div class="mb-1">What is your view about marriage?</div>
          <v-select
            v-model="form.marriage_view"
            outlined
            :items="[]"
            placeholder="Select"
          />
        </v-col>
        <v-col cols="12" md="6">
          <div class="mb-1">
            What do you think about gender role in a marriage?
          </div>
          <v-select
            v-model="form.marriage_gender_roles"
            outlined
            :items="[]"
            placeholder="Select"
          />
        </v-col>
        <v-col cols="12" md="6">
          <div class="mb-1">How important is regular sex to you?</div>
          <v-select
            v-model="form.regular_sex"
            outlined
            :items="[]"
            placeholder="Select"
          />
        </v-col>
        <v-col cols="12" md="6">
          <div class="mb-1">
            What is the gravest offence your partner can commit?
          </div>
          <v-select
            v-model="form.gravest_offence"
            outlined
            :items="[]"
            placeholder="Select"
          />
        </v-col>
        <v-col cols="12" md="6">
          <div class="mb-1">
            Do you believe that marriage should be the goal of every
            relationship?
          </div>
          <v-select
            v-model="form.relationship_goal"
            outlined
            :items="[]"
            placeholder="Select"
          />
        </v-col>
        <v-col cols="12" md="6">
          <div class="mb-1">
            Would you prefer that in a relationship the man should be older than
            the woman?
          </div>
          <v-select
            v-model="form.man_older_than_woman"
            outlined
            :items="[]"
            placeholder="Select"
          />
        </v-col>
        <v-col cols="12" md="6">
          <div class="mb-1">
            What is your tolerable age gap between the man and the woman in a
            relationship
          </div>
          <v-select
            v-model="form.age_gap"
            outlined
            :items="[]"
            placeholder="Select"
          />
        </v-col>
        <v-col cols="12" md="6">
          <div class="mb-1">
            Is it important to you that your partner knows how to cook and enjoy
            cooking?
          </div>
          <v-select
            v-model="form.cooking_important"
            outlined
            :items="[]"
            placeholder="Select"
          />
        </v-col>
        <v-col cols="12" md="6">
          <div class="mb-1">Do you cook?</div>
          <v-select
            v-model="form.cooking"
            outlined
            :items="[]"
            placeholder="Select"
          />
        </v-col>
        <v-col cols="12" md="6">
          <div class="mb-1">How often do you like to cook?</div>
          <v-select
            v-model="form.cooking_frequency"
            outlined
            :items="[]"
            placeholder="Select"
          />
        </v-col>
        <v-col cols="12" md="6">
          <div class="mb-1">Do you drink alcohol?</div>
          <v-select
            v-model="form.drinking"
            outlined
            :items="[]"
            placeholder="Select"
          />
        </v-col>
        <v-col cols="12" md="6">
          <div class="mb-1">Do you smoke?</div>
          <v-select
            v-model="form.smoking"
            outlined
            :items="[]"
            placeholder="Select"
          />
        </v-col>
        <v-col cols="12" md="6">
          <div class="mb-1">Do you have pets?</div>
          <v-select
            v-model="form.pets"
            outlined
            :items="[]"
            placeholder="Select"
          />
        </v-col>
        <v-col cols="12" md="6">
          <div class="mb-1">Would you live with someone who keeps pet?</div>
          <v-select
            v-model="form.pets_tolerant"
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
