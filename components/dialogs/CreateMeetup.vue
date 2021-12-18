<template>
  <v-dialog v-model="dialog" persistent max-width="650">
    <v-card tile flat>
      <v-card-title class="justify-center font-weight-bold">
        Create Meetup
      </v-card-title>
      <v-card-text>
        <v-form v-model="isValid">
          <v-row no-gutters>
            <v-col cols="12">
              <div class="mb-1 subtitle-2">Meetup Title</div>
              <v-text-field
                v-model="form.title"
                required
                outlined
                placeholder="Enter meetup title"
                :rules="[(v) => !!v || 'Meetup title is required']"
              />
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <div class="mb-1 subtitle-2">Date</div>
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="form.date"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template #activator="{ on, attrs }">
                  <v-text-field
                    v-model="form.date"
                    placeholder="Set date"
                    append-icon="mdi-calendar"
                    readonly
                    required
                    outlined
                    :rules="[(v) => !!v || 'Date is required']"
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="form.date"
                  color="primary"
                  no-title
                  scrollable
                >
                  <v-spacer></v-spacer>
                  <v-btn text color="primary_alt" @click="menu = false">
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary_alt"
                    @click="$refs.menu.save(form.date)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="12" sm="6" md="4" class="px-sm-2">
              <div class="mb-1 subtitle-2">Time</div>
              <v-menu
                ref="menu2"
                v-model="menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                :return-value.sync="form.time"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
              >
                <template #activator="{ on, attrs }">
                  <v-text-field
                    v-model="form.time"
                    placeholder="Set time"
                    append-icon="mdi-clock-time-four-outline"
                    readonly
                    outlined
                    :rules="[(v) => !!v || 'Time is required']"
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-time-picker
                  v-if="menu2"
                  v-model="form.time"
                  full-width
                  color="primary"
                >
                  <v-spacer></v-spacer>
                  <v-btn text color="primary_alt" @click="menu2 = false">
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary_alt"
                    @click="$refs.menu2.save(form.time)"
                  >
                    OK
                  </v-btn>
                </v-time-picker>
              </v-menu>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <div class="mb-1 subtitle-2">Medium</div>
              <v-select
                v-model.number="form.medium"
                :items="mediums"
                placeholder="Select medium"
                outlined
                required
                :rules="[(v) => !!v || 'Medium is required']"
              ></v-select>
            </v-col>
            <v-col cols="12">
              <div class="mb-1 subtitle-2">Address</div>
              <v-text-field
                v-model="form.address"
                required
                outlined
                placeholder="Enter address for the meetup"
                :rules="[(v) => !!v || 'Address is required']"
              />
            </v-col>
            <v-col cols="12">
              <div class="mb-1 subtitle-2">Summary</div>
              <v-textarea
                v-model="form.summary"
                required
                rows="4"
                outlined
                placeholder="What is this meetup all about?"
                :rules="[(v) => !!v || 'Summary is required']"
              />
            </v-col>
            <v-col cols="12">
              <div class="subtitle-2">
                Note that meetup must be submitted for approval 14 days before
                the meetup
              </div>
            </v-col>
            <v-col cols="12">
              <v-row justify="center" class="py-3">
                <v-col cols="5">
                  <v-btn depressed large block @click="close">Cancel</v-btn>
                </v-col>
                <v-col cols="7">
                  <v-btn
                    color="primary"
                    block
                    depressed
                    large
                    :disabled="!isValid"
                    :loading="loading"
                  >
                    Create Meetup
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: { type: Boolean, default: false },
  },
  data: () => ({
    form: {
      title: '',
      address: '',
      summary: '',
      date: '',
      time: '',
      medium: null,
    },
    menu: false,
    menu2: false,
    isValid: false,
    loading: false,
    mediums: [
      { text: 'Virtual', value: 0 },
      { text: 'Physical', value: 1 },
    ],
  }),
  computed: {
    dialog: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },
  methods: {
    close() {
      this.dialog = false
    },
  },
}
</script>
