<template>
  <v-container class="py-10">
    <v-row justify="center" align="center" class="fill-height">
      <v-col cols="12" sm="11" md="10">
        <v-card flat class="pa-5">
          <h2 class="text-center font-weight-black text-h5 mb-5">Bump Up</h2>
          <div class="text-center">
            <p>
              Pay a small fee to be on the spotlight for a limited time so
              others can find you quickly
            </p>
            <div class="my-8">
              <v-row justify="center">
                <v-col
                  v-for="item in packages"
                  :key="item.id"
                  cols="10"
                  sm="6"
                  md="5"
                  lg="4"
                >
                  <v-card color="secondary" dark flat class="pa-5">
                    <div>{{ item.title }}</div>
                    <div class="text-h5 font-weight-bold my-5">
                      &#36;{{ item.price }}
                    </div>
                    <v-btn block large color="primary" depressed>Pay</v-btn>
                  </v-card>
                </v-col>
              </v-row>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    packages: [
      { id: 1, title: 'Be on the spotlight for 7 Days', price: 40 },
      { id: 2, title: 'Be on the spotlight for 7 Days', price: 70 },
    ],
  }),
  head() {
    return { title: 'Bump Up' }
  },
}
</script>
