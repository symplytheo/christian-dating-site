<template>
  <div>
    <v-carousel
      hide-delimiter-background
      delimiter-icon="mdi-minus"
      cycle
      height="550"
      :show-arrows="!isMobile"
      show-arrows-on-hover
    >
      <v-carousel-item v-for="v in 5" :key="v">
        <v-img
          :src="`/slides/${v}.webp`"
          height="100%"
          width="100%"
          :position="v < 5 ? 'center' : 'top'"
        >
          <v-sheet
            color="rgba(233, 22, 118, 0.3)"
            class="pa-10"
            height="100%"
            dark
          >
            <v-row align="center" class="fill-height">
              <v-col cols="11" sm="7" md="5" lg="4">
                <h2 class="text-h4 text-sm-h3 font-weight-black mb-3">
                  Building Relationships Building People
                </h2>
                <p class="subtitle-1">
                  Join the christian dating and social networking and get the
                  best match just for you
                </p>
                <v-btn
                  color="primary"
                  block
                  large
                  depressed
                  to="/account/register"
                >
                  Get Started
                </v-btn>
              </v-col>
            </v-row>
          </v-sheet>

          <!-- <template #placeholder>
            <image-placeholder size="75" />
          </template> -->
        </v-img>
      </v-carousel-item>
    </v-carousel>

    <div class="white">
      <v-container class="py-10">
        <p class="text-center subtitle-1 text-sm-h6">
          Your No. 1 Christian Singles Dating, relationship building and social
          networking site. Are you a Christian single, searching for love and
          want want to improve yourself and have fun whilst searching, you have
          come to the right place! Here, you can meet real single Christians of
          all ages and backgrounds for relationship and/or friendship, and enjoy
          networking and personal development activities and events all in one
          place.
        </p>
      </v-container>
    </div>

    <v-container fluid class="py-10">
      <v-row justify="center" align="center">
        <v-col
          cols="11"
          md="6"
          lg="6"
          order="2"
          order-md="1"
          class="text-center text-md-left"
        >
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

    <div class="white py-5">
      <v-container>
        <h4 class="secondary--text text-h5 font-weight-black text-center mb-3">
          What Awaits You
        </h4>
        <v-row
          v-for="(item, m) in features"
          :key="m"
          dense
          align="center"
          justify="center"
          justify-md="space-between"
        >
          <v-col
            cols="12"
            md="6"
            lg="5"
            class="pa-5"
            :class="m % 2 === 0 ? 'pl-2 pb-10' : 'pr-2'"
            :order-md="m % 2 === 0 ? 1 : 2"
          >
            <v-card height="250" color="primary" flat class="relative">
              <v-img
                :src="item.image"
                class="absolute rounded grey lighten-1"
                :class="m % 2 === 0 ? 'top-left-20' : 'bottom-right-20'"
                width="100%"
                height="100%"
              >
                <!-- <template #placeholder>
                  <image-placeholder />
                </template> -->
              </v-img>
            </v-card>
          </v-col>
          <v-col
            cols="12"
            md="5"
            class="text-center text-md-left"
            :order-md="m % 2 === 0 ? 2 : 1"
          >
            <h4 class="subtitle-1 text-sm-h6 font-weight-bold mb-1">
              {{ item.title }}
            </h4>
            <p class="subtitle-1">
              {{ item.subtitle }}
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <v-img src="/bg/2.webp" height="350" class="fill-width">
      <v-sheet
        color="rgba(233, 22, 118, 0.9)"
        class="py-10 text-center"
        height="100%"
        dark
      >
        <v-row align="center" justify="center" class="fill-height">
          <v-col cols="11" sm="8" md="6" lg="5" class="text-center">
            <h2 class="text-h5 text-sm-h4 font-weight-black mb-3">
              Join the Singles Network now
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
              Register
            </v-btn>
          </v-col>
        </v-row>
      </v-sheet>

      <!-- <template #placeholder>
        <image-placeholder size="50" />
      </template> -->
    </v-img>

    <!-- testimonials -->
    <div class="py-5 transparent">
      <v-container>
        <h4 class="secondary--text text-h5 font-weight-black text-center mb-3">
          Testimonials
        </h4>
        <v-carousel
          hide-delimiter-background
          show-arrows-on-hover
          delimiter-icon="mdi-minus"
          :show-arrows="!isMobile"
          height="auto"
          cycle
          light
        >
          <template v-for="(item, index) in testimonials">
            <v-carousel-item
              v-if="(index + 1) % columns === 1 || columns === 1"
              :key="index"
              class="pb-10"
            >
              <v-row dense>
                <template v-for="(n, i) in columns">
                  <template v-if="+index + i < testimonials.length">
                    <v-col :key="i" class="pa-5">
                      <v-card
                        v-if="+index + i < testimonials.length"
                        outlined
                        class="relative"
                      >
                        <v-card-text class="subtitle-1 pb-1">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Illum alias doloribus numquam repellat
                          exercitationem aperiam dolorum odit dignissimos
                          laudantium laborum. Sequi reiciendis dolorum animi
                          aspernatur tempora error facere cupiditate assumenda.
                        </v-card-text>
                        <div
                          class="
                            text-center
                            mb-3
                            subtitle-2
                            secondary--text
                            font-weight-bold
                          "
                        >
                          <span class="grey--text">&#8212;</span>
                          Chris Brown
                        </div>
                        <div class="absolute position-start" style="top: -30px">
                          <v-icon size="60" color="secondary">
                            mdi-format-quote-open
                          </v-icon>
                        </div>
                      </v-card>
                    </v-col>
                  </template>
                </template>
              </v-row>
            </v-carousel-item>
          </template>
        </v-carousel>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [1, 2, 3, 4, 5, 6],
      features: [
        {
          title: 'Romantic one-to-one activity',
          subtitle:
            'Lectus a placerat interdum diam porttitor ultrices. Lectus placerat interdum diam porttitor ultrices.',
          image: '/images/meetup-1.png',
        },
        {
          title: 'Love Pod',
          subtitle:
            'Lectus a placerat interdum diam porttitor ultrices. Lectus placerat interdum diam porttitor ultrices.',
          image: '/images/meetup-2.png',
        },
        {
          title: 'Meet Up',
          subtitle:
            'Lectus a placerat interdum diam porttitor ultrices. Lectus placerat interdum diam porttitor ultrices.',
          image: '/images/meetup-3.png',
        },
        {
          title: 'Video Date',
          subtitle:
            'Lectus a placerat interdum diam porttitor ultrices. Lectus placerat interdum diam porttitor ultrices.',
          image: '/images/video-call.png',
        },
      ],
    }
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.mobile
    },
    columns() {
      if (this.isMobile) return 1
      else return 2
    },
  },
}
</script>

<style scoped>
.top-left-20 {
  top: 20px;
  left: 20px;
}
.bottom-right-20 {
  bottom: 20px;
  right: 20px;
}
</style>
