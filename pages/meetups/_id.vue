<template>
  <v-container>
    <v-card flat>
      <v-img
        src="/images/meetup-1.png"
        :aspect-ratio="16 / 9"
        class="grey lighten-5"
      >
        <template #placeholder>
          <image-placeholder />
        </template>
      </v-img>
      <div class="pa-4">
        <div class="secondary--text font-weight-bold text-uppercase">
          Fri, 3 Sept &nbsp; 10:00PM WAT
        </div>
        <h3 class="font-weight-bold text-capitalize text-h5 text-md-h4 mb-1">
          Getting to know you
        </h3>
        <div>Online</div>
      </div>
      <v-card-actions class="pt-0">
        <v-btn large depressed>Interested</v-btn>
        <v-btn large depressed>Like</v-btn>
        <v-spacer />
        <v-btn text color="primary_alt"> Report </v-btn>
      </v-card-actions>
    </v-card>

    <div class="my-5">
      <v-row>
        <v-col cols="12" md="7" lg="8">
          <v-card flat>
            <v-card-title class="py-2 px-4 subtitle-1 font-weight-medium">
              Details
            </v-card-title>
            <v-card-text>
              <div>
                <div>Host</div>
                <div class="text--primary">Promise</div>
              </div>

              <div class="my-5">
                <div>Time</div>
                <div class="text--primary">10:00PM WAT</div>
              </div>

              <div>
                <div>Link</div>
                <div class="text--primary">zoom.co/gettingtoknowyou</div>
              </div>

              <div class="mt-5">
                <div>Summary</div>
                <div class="text--primary">
                  Promise Lectus a placerat interdum diam porttitor ultrices.
                  Lectus a placerat interdum diam porttitor ultrices. Lectus a
                  placerat interdum diam porttitor ultrices.
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="7" lg="4">
          <v-card flat>
            <v-card-title class="py-2 px-4 subtitle-1 font-weight-medium">
              Reaction
            </v-card-title>
            <v-card-text>
              <v-tabs v-model="tab" hide-slider grow color="black">
                <v-tab
                  class="text-capitalize"
                  active-class="grey lighten-3 rounded"
                >
                  500 <br />
                  Likes
                </v-tab>
                <v-tab
                  class="text-capitalize"
                  active-class="grey lighten-3 rounded"
                >
                  2146 <br />
                  Interested
                </v-tab>
              </v-tabs>

              <v-tabs-items v-model="tab">
                <v-tab-item>
                  <v-list>
                    <v-list-item v-for="n in 5" :key="n">
                      <v-list-item-avatar color="grey">
                        <img src="/images/person-2.png" alt="" />
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title>Meghan, 2{{ n }}</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-tab-item>
                <v-tab-item>
                  <v-list>
                    <v-list-item v-for="n in 5" :key="n">
                      <v-list-item-avatar color="grey">
                        <img src="/images/person-1.png" alt="" />
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title>Tracy, 2{{ n }}</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-tab-item>
              </v-tabs-items>
            </v-card-text>
            <v-card-actions class="pt-0">
              <v-btn text block>See all</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  layout: 'secondary',
  data: () => ({
    tab: null,
  }),
}
</script>
