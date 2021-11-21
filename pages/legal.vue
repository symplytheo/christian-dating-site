<template>
  <v-container class="rounded my-10">
    <v-card flat class="pa-5">
      <h2 class="text-h5 text-md-h4 font-weight-black mb-5 text-center">
        Legal
      </h2>

      <div id="privacy-policy">
        <h4 class="text-h6 text-md-h5 font-weight-bold mb-2 text-center">
          Privacy Policy
        </h4>
        <p>
          At Christian Dating and Social Networking we take data privacy
          seriously. This Privacy Policy explains the steps we take to ensure
          information about you is kept secure and confidential. We will take
          all steps reasonably necessary to ensure that your data is treated
          securely and in accordance with this privacy policy.
          <a @click="privacy = true">Read more</a>
        </p>
      </div>

      <div id="terms-and-conditions" class="my-10">
        <h4 class="text-h6 text-md-h5 font-weight-bold mb-2 text-center">
          Terms and Conditions
        </h4>
        <p>
          These Terms of Use constitute a legally binding Agreement between
          Christian Dating and Social Networking (“us”, “we”, “our”) and our
          customer ("you", “your”) concerning your use of our website (the
          “Website”, “Site”) and the services available through the Website (the
          “Service”) whether through a computer or a mobile device.
          <a @click="terms = true">Read more</a>
        </p>
      </div>

      <div id="cookie-policy">
        <h4 class="text-h6 text-md-h5 font-weight-bold mb-2 text-center">
          Cookie Policy
        </h4>
        <p>
          In some cases, we may use cookies and related technologies to collect
          personal information, or to collect information that becomes personal
          information if we combine it with other information. This Cookie
          Policy supplements the information contained in our
          <nuxt-link to="#privacy-policy">Privacy Policy</nuxt-link> by
          explaining how we and our business partners and service providers use
          cookies and related technologies in the course of managing and
          providing our online services and our communications to you. It
          explains what these technologies are and why we use them, as well as
          your rights to control our use of them.
          <a @click="cookie = true">Read more</a>
        </p>
      </div>
    </v-card>

    <!-- modals -->
    <dialogs-legal-privacy-policy v-model="privacy" />
    <dialogs-legal-terms-conditions v-model="terms" />
    <dialogs-legal-cookie-policy v-model="cookie" />
    <!--  -->
  </v-container>
</template>

<script>
export default {
  data: () => ({
    privacy: false,
    terms: false,
    cookie: false,
  }),
  head() {
    return { title: 'Legal' }
  },
}
</script>
