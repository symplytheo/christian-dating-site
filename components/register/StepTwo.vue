<template>
  <v-card class="mt-2 py-2 px-5" flat>
    <v-form>
      <v-row no-gutters>
        <v-col cols="12">
          <div class="mb-1">First Name</div>
          <v-text-field
            v-model="form.first_name"
            outlined
            placeholder="Enter first name"
            :rules="[(v) => !!v || 'First name is required']"
            required
          />
        </v-col>
        <v-col cols="12">
          <div class="mb-1">Last Name</div>
          <v-text-field
            v-model="form.last_name"
            outlined
            placeholder="Enter last name"
            :rules="[(v) => !!v || 'Last name is required']"
            required
          />
        </v-col>
        <v-col cols="12">
          <div class="mb-1">Town/City</div>
          <v-text-field
            v-model="form.city"
            outlined
            placeholder="Enter town/city"
            :rules="[(v) => !!v || 'Town/city is required']"
            required
          />
        </v-col>
        <v-col cols="12">
          <div class="mb-1">Postcode</div>
          <v-text-field
            v-model="form.postcode"
            outlined
            placeholder="Enter postcode"
            :rules="[(v) => !!v || 'Postcode is required']"
            required
          />
        </v-col>
        <v-col cols="12">
          <div class="mb-1">Phone</div>
          <v-text-field
            v-model="form.phone"
            type="tel"
            outlined
            placeholder="Enter phone number"
            :rules="[(v) => !!v || 'Phone number is required']"
            required
          />
        </v-col>
        <v-col cols="12">
          <div class="mb-1">Date of Birth</div>
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="form.date_of_birth"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template #activator="{ on, attrs }">
              <v-text-field
                v-model="form.date_of_birth"
                placeholder="Select date"
                append-icon="mdi-calendar"
                readonly
                outlined
                required
                :rules="[(v) => !!v || 'Date of birth is required']"
                v-bind="attrs"
                v-on="on"
              />
            </template>
            <v-date-picker
              v-model="form.date_of_birth"
              color="primary_alt"
              no-title
              scrollable
            >
              <v-spacer />
              <v-btn text color="primary_alt" @click="menu = false">
                Cancel
              </v-btn>
              <v-btn
                text
                color="primary_alt"
                @click="$refs.menu.save(form.date_of_birth)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
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
            Create Account
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
      first_name: '',
      last_name: '',
      postcode: '',
      phone: '',
      date_of_birth: '',
      city: '',
    },
    isValid: false,
    menu: false,
  }),
  methods: {
    handleSubmit() {
      this.$emit('submit', this.form)
    },
  },
}
</script>
