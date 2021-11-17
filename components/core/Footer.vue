<template>
  <v-footer padless>
    <v-container fluid class="pt-10">
      <v-row justify="space-between">
        <v-col cols="12" md="4" lg="3">
          <nuxt-link to="/">
            <core-logo />
          </nuxt-link>
        </v-col>
        <v-col cols="12" md="8" lg="9">
          <v-row dense>
            <v-col cols="6" md="3">
              <div class="subtitle-1 font-weight-bold">Our Services</div>
              <v-list dense color="transparent">
                <v-list-item
                  v-for="item in services"
                  :key="item.title"
                  :to="item.href"
                  link
                  class="pl-0"
                >
                  <v-list-item-content>
                    <v-list-item-title v-text="item.title" />
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="6" md="3">
              <div class="subtitle-1 font-weight-bold">About Us</div>
              <v-list dense color="transparent">
                <v-list-item
                  v-for="item in about"
                  :key="item.title"
                  :to="item.href"
                  link
                  class="pl-0"
                >
                  <v-list-item-content>
                    <v-list-item-title v-text="item.title" />
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="6" md="3">
              <div class="subtitle-1 font-weight-bold">Legal</div>
              <v-list dense color="transparent">
                <v-list-item
                  v-for="item in legal"
                  :key="item.title"
                  :to="item.href"
                  link
                  class="pl-0"
                >
                  <v-list-item-content>
                    <v-list-item-title v-text="item.title" />
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="6" md="3">
              <div class="subtitle-1 font-weight-bold">Support</div>
              <v-list dense color="transparent">
                <v-list-item
                  v-for="item in support"
                  :key="item.title"
                  :to="item.href"
                  link
                  class="pl-0"
                >
                  <v-list-item-content>
                    <v-list-item-title v-text="item.title" />
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="px-0">
      <v-divider />
      <div class="text-center pb-3 pt-5">
        Copyright
        {{ new Date().getFullYear() }}. All rights reserved
      </div>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    services: [
      { title: 'Dating', href: '' },
      { title: 'Corporate Events', href: '' },
      { title: 'Local Meetups', href: '' },
    ],
    about: [
      { title: 'What We Are', href: '' },
      { title: 'What We Believe', href: '' },
    ],
    legal: [
      { title: 'Privacy Policy', href: '' },
      { title: 'Terms & Conditions', href: '' },
      { title: 'Cookie Policy', href: '' },
    ],
    support: [
      { title: 'FAQs', href: '' },
      { title: 'Safety Advice', href: '' },
      { title: 'Contact us', href: '' },
    ],
  }),
}
</script>
