<template>
  <v-container>
    <v-row>
      <!-- Bio -->
      <v-col cols="12" md="8" order="1" order-md="1">
        <v-card flat>
          <v-img src="/images/person-2.png" alt="" height="381" width="100%" />
          <v-card-text class="text--primary">
            <div class="d-flex justify-space-between align-center mb-2">
              <h2 class="subtitle-1 font-weight-bold">Promise, 28</h2>
              <v-btn text color="primary">Change Photo</v-btn>
            </div>
            <div>
              I am a simple guy, eager to find a christian date that would lead
              to marriage I am a simple guy, eager to find a christian date that
              would lead to marriage
            </div>
            <div
              class="
                mt-5
                fill-width
                d-flex
                flex-column flex-sm-row
                justify-space-between
              "
            >
              <v-btn
                :block="$vuetify.breakpoint.xs"
                large
                color="primary"
                depressed
              >
                Set Compactibility
              </v-btn>

              <v-btn
                :block="$vuetify.breakpoint.xs"
                text
                large
                color="secondary"
                class="mt-2 mt-sm-0"
              >
                Request Verification
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- About -->
      <v-col cols="12" md="4" order="3" order-md="2">
        <v-card class="pa-2" flat>
          <v-card-title class="subtitle-1 font-weight-bold">About</v-card-title>
          <v-card-text class="px-0">
            <v-list>
              <v-list-item v-for="item in about" :key="item.title">
                <v-list-item-avatar
                  size="57"
                  color="grey lighten-3 justify-center"
                >
                  <v-icon color="#272727" large>{{ item.icon }}</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-subtitle>{{ item.title }}</v-list-item-subtitle>
                  <v-list-item-title>No Data</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon color="primary">
                    <v-icon>{{ mdiPencilOutline }}</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Photos -->
      <v-col cols="12" md="8" order="2" order-md="3">
        <v-card flat>
          <v-card-title class="subtitle-1 font-weight-bold">
            Photos
            <v-spacer />
            <v-btn text color="primary">Add Photos</v-btn>
          </v-card-title>
          <v-card-text class="text--primary">
            <v-row dense>
              <v-col v-for="x in 6" :key="x" cols="6" sm="4">
                <v-img
                  :src="`/images/person-${x}.png`"
                  alt=""
                  class="grey lighten-3 rounded"
                  height="205"
                  width="100%"
                />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Factfile -->
      <v-col cols="12" md="4" order="4" order-md="4">
        <v-card class="pa-2" flat>
          <v-card-title class="subtitle-1 font-weight-bold">
            Factfile
          </v-card-title>
          <v-card-text class="px-0">
            <v-list>
              <v-list-item v-for="item in factfile" :key="item.title">
                <v-list-item-avatar
                  size="57"
                  color="grey lighten-3 justify-center"
                >
                  <v-icon color="#272727" large>{{ item.icon }}</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-subtitle>{{ item.title }}</v-list-item-subtitle>
                  <v-list-item-title>No Data</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon color="primary">
                    <v-icon>{{ mdiPencilOutline }}</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Hobbies -->
      <v-col cols="12" order="5" order-md="5">
        <v-card flat>
          <v-card-title class="subtitle-1 font-weight-bold">
            Hobbies
            <v-spacer />
            <v-btn text color="primary">Add Hobbies</v-btn>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col
                v-for="(hobby, x) in hobbies"
                :key="x"
                cols="6"
                sm="4"
                md="3"
              >
                <v-card flat color="grey lighten-3" height="200">
                  <v-row class="fill-height" align="center" justify="center">
                    <div class="text-center pa-5">
                      <v-icon size="50" color="#272727">
                        {{ hobby.icon }}
                      </v-icon>
                      <div class="mt-2 subtitle-1">{{ hobby.title }}</div>
                    </div>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {
  mdiPencilOutline,
  mdiHomeOutline,
  mdiBriefcaseOutline,
  mdiSchoolOutline,
  mdiChurch,
  mdiHumanMaleFemale,
  mdiCityVariantOutline,
  mdiWeb,
  mdiSmoking,
  mdiCoffeeOutline,
  mdiPaw,
  mdiDumbbell,
  mdiPoliceStation,
  mdiBasketball,
  mdiDanceBallroom,
  mdiBookOpenPageVariantOutline,
  mdiCameraOutline,
  mdiAirplane,
} from '@mdi/js'

export default {
  data: () => ({
    mdiPencilOutline,
    about: [
      { title: 'Residence', icon: mdiHomeOutline },
      { title: 'Occupation', icon: mdiBriefcaseOutline },
      { title: 'Degree', icon: mdiSchoolOutline },
      { title: 'University', icon: mdiCityVariantOutline },
      { title: 'Marital Status', icon: mdiHumanMaleFemale },
      { title: 'Religion', icon: mdiChurch },
    ],
    factfile: [
      { title: 'Language', icon: mdiWeb },
      { title: 'Smoking', icon: mdiSmoking },
      { title: 'Drinking', icon: mdiCoffeeOutline },
      { title: 'Pets', icon: mdiPaw },
      { title: 'Exercise', icon: mdiDumbbell },
      { title: 'Politics', icon: mdiPoliceStation },
    ],
    hobbies: [
      { title: 'Sports', icon: mdiBasketball },
      { title: 'Dancing', icon: mdiDanceBallroom },
      { title: 'Reading', icon: mdiBookOpenPageVariantOutline },
      { title: 'Photography', icon: mdiCameraOutline },
      { title: 'Travel', icon: mdiAirplane },
      { title: '', icon: '' },
      { title: '', icon: '' },
    ],
  }),
}
</script>
