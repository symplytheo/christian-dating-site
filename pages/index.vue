<template>
  <div>
    <v-img src="/bg/2.jpg" min-height="500" class="fill-width">
      <v-sheet color="rgba(233, 22, 118, 0.3)" class="pa-10" height="100%" dark>
        <v-row align="center" class="fill-height">
          <v-col cols="11" sm="7" md="5" lg="4">
            <h2 class="text-h4 text-sm-h3 font-weight-black mb-3">
              Building Relationships Building People
            </h2>
            <p class="subtitle-1">
              Join the christian dating and social networking and get the best
              match just for you
            </p>
            <v-btn color="primary" block large depressed to="/account/register">
              Get Started
            </v-btn>
          </v-col>
        </v-row>
      </v-sheet>

      <template #placeholder>
        <image-placeholder size="75" />
      </template>
    </v-img>

    <v-container class="py-10">
      <p class="text-center subtitle-1 text-sm-h6">
        Your No. 1 Christian Singles Dating, relationship building and social
        networking site. Are you a Christian single, searching for love and want
        to improve yourself and have fun whilst searching, you have come to the
        right place! Here, you can meet real single Christians of all ages and
        backgrounds for relationship and/or friendship, and enjoy social
        networking and personal development activities and events all in one
        place.
      </p>
    </v-container>

    <v-container fluid class="grey lighten-4 py-10">
      <v-row justify="center" align="center">
        <v-col cols="11" md="6" lg="6" order="2" order-md="1">
          <h4 class="text-subtitle-1 text-sm-h6 font-weight-bold">
            Having difficulty searching for a christian date?
          </h4>
          <p>
            Use our platform to get the perfect match that best suits your
            personality. Our matching algorithm is top notch amongst others.
          </p>
        </v-col>
        <v-col
          cols="12"
          md="5"
          lg="4"
          order="1"
          order-md="2"
          class="relative text-center"
        >
          <v-avatar
            v-for="el in ['man', 'lady']"
            :key="el"
            size="150"
            color="primary"
            class="mx-1"
          >
            <img :src="`/images/${el}.png`" />
          </v-avatar>
          <div
            class="
              fill-height
              absolute
              d-flex
              align-end
              fill-width
              position-start
            "
          >
            <v-img src="/svgs/heart.svg" height="80" contain class="mx-auto" />
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-img src="/bg/3.jpg" height="350" class="fill-width">
      <v-sheet
        color="rgba(233, 22, 118, 0.9)"
        class="py-10 text-center"
        height="100%"
        dark
      >
        <v-row align="center" justify="center" class="fill-height">
          <v-col cols="11" sm="8" md="6" lg="5" class="text-center">
            <h2 class="text-h5 text-sm-h4 font-weight-black mb-3">
              Join the Single’s Network now
            </h2>
            <p class="subtitle-1">
              Lectus a placerat interdum diam porttitor ultrices. Lectus a
              placerat interdum diam porttitor ultrices.
            </p>
            <v-btn
              color="white"
              outlined
              width="70%"
              large
              depressed
              to="/account/register"
            >
              Get Started
            </v-btn>
          </v-col>
        </v-row>
      </v-sheet>

      <template #placeholder>
        <image-placeholder size="50" />
      </template>
    </v-img>
  </div>
</template>
