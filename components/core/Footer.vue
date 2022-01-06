<template>
  <v-footer padless color="white">
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
              <v-list flat dense color="transparent">
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
              <v-list flat dense color="transparent">
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
              <v-list dense flat color="transparent">
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
              <v-list flat dense color="transparent">
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
        &copy;
        {{ new Date().getFullYear() }}
        <nuxt-link to="/" class="secondary--text">
          <abbr title="Christian Dating &amp; Social Networking"
            >CDSN</abbr
          > </nuxt-link
        >. AllRights Reserved
      </div>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    services: [
      { title: 'Dating', href: '/services#dating' },
      { title: 'Corporate Events', href: '/services#corporate-events' },
      { title: 'Local Meetups', href: '/services#meetups' },
    ],
    about: [
      { title: 'What We Are', href: '/about-us#what-we-are' },
      { title: 'What We Believe', href: '/about-us#what-we-believe' },
    ],
    legal: [
      { title: 'Privacy Policy', href: '/legal#privacy-policy' },
      { title: 'Terms & Conditions', href: '/legal#terms-and-conditions' },
      { title: 'Cookie Policy', href: '/legal#cookie-policy' },
    ],
    support: [
      { title: 'FAQs', href: '/faqs' },
      { title: 'Safety Advice', href: '/safety-advice' },
      { title: 'Contact us', href: '/contact-us' },
    ],
  }),
}
</script>
