<template>
  <v-card class="mt-2 py-2 px-5" flat>
    <v-card-title class="subtitle-1 font-weight-bold justify-center pb-2 pt-1">
      You're almost there, answer a few question
    </v-card-title>
    <v-divider class="mb-5" />
    <v-form>
      <v-row>
        <v-col cols="12" md="6">
          <div class="mb-1">
            What would bother you about those close to your partner?
          </div>
          <v-select
            v-model="form.bother_partner_friends"
            outlined
            :items="[]"
            placeholder="Select"
          />
        </v-col>
        <v-col cols="12" md="6">
          <div class="mb-1">
            Would you be comfortable if you partner keep friends with opposite
            sex that you don't know?
          </div>
          <v-select
            v-model="form.partner_opposite_sex_friends"
            outlined
            :items="[]"
            placeholder="Select"
          />
        </v-col>
        <v-col cols="12" md="6">
          <div class="mb-1">
            Would you be comfortable if your partner still maintain a close
            friendship with their ex?
          </div>
          <v-select
            v-model="form.partner_ex_friendship"
            outlined
            :items="[]"
            placeholder="Select"
          />
        </v-col>
        <v-col cols="12" md="6">
          <div class="mb-1">
            Imagine you're at a party with your partner and you notice they're
            filrting with someone else. How would you react?
          </div>
          <v-select
            v-model="form.partner_flirting_reaction"
            outlined
            :items="[]"
            placeholder="Select"
          />
        </v-col>
        <v-col cols="12" md="6">
          <div class="mb-1">
            You suspect that your partner has been calling someone of the
            opposite sex and you're worried that they may be having an affair.
            What would you do?
          </div>
          <v-select
            v-model="form.partner_suspected_affair"
            outlined
            :items="[]"
            placeholder="Select"
          />
        </v-col>
        <v-col cols="12">
          <v-btn
            color="primary"
            block
            large
            depressed
            :loading="loading"
            @click="handleSubmit"
          >
            Submit
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
  props: {
    loading: { type: Boolean, default: false },
  },
  data: () => ({
    form: {
      bother_partner_friends: '',
      partner_opposite_sex_friends: '',
      partner_ex_friendship: '',
      partner_flirting_reaction: '',
      partner_suspected_affair: '',
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
