<template>
  <v-container class="rounded my-10">
    <v-card flat class="pa-5">
      <h2 class="text-h5 text-md-h4 font-weight-black mb-5 text-center">
        Our Services
      </h2>

      <div id="dating">
        <h4 class="text-h6 text-md-h5 font-weight-bold mb-2 text-center">
          Dating
        </h4>
        <p>
          Our core service is with relation to adult dating whereby we provide
          the platform for adult Christian singles to communicate online and
          meet other adult singles for dating and relationship. Online dating is
          a great way to find and connect with other single Christians that you
          might otherwise never cross paths with, thereby increasing your
          chances of finding that special someone. Check out our
          <nuxt-link to="/dating"> Dating page</nuxt-link>.
        </p>
      </div>

      <div id="meetups" class="mt-10">
        <h4 class="text-h6 text-md-h5 font-weight-bold mb-2 text-center">
          Meetups
        </h4>
        <p>
          Meetups are events by members for members. Here, we offer a platform
          for registered users to organise local, usually face-to-face, events
          or activities for other members to attend. Meetups are group
          activities which may include activities such as walks, climbing,
          bowling, cinemas, theatres, tours, meals, skills sharing etc. All
          meetup events are screened and pre-approved by our Admin to ensure the
          safety of our members. Meetups could provide a safe environment for
          you to meet face-to-face for the first time with someone whom you have
          met online and would like to explore things further with, but still
          want to play it safe. They can also help you and someone you are
          building a relationship with to bond and to enjoy each other’s company
          in a social setting. Check out our
          <nuxt-link to="/meetups">Meetups page</nuxt-link>.
        </p>
      </div>

      <div id="corporate-events" class="mt-10">
        <h4 class="text-h6 text-md-h5 font-weight-bold mb-2 text-center">
          Corporate Events
        </h4>
        <p>
          We also organise offline events for our members to give people a
          chance to meet face to face in a safe and comfortable environment. Our
          events cover a range of themes such as seminars, conferences,
          retreats, get-aways, music festivals, films, theatres, comedy nights
          etc. The advantage of attending an event is that you get to mix and
          mingle with lots of other single Christians. And if you spark or vibe
          with someone, you can simply exchange details and arrange to meet up
          again on your own terms. We have heard many wonderful stories from
          people who have met at an event and gone on to form a relationship.
          Check out our <nuxt-link to="/events">Events page</nuxt-link>.
        </p>
      </div>

      <p>
        For more details about our services and how they are operated, please
        consult our
        <nuxt-link to="/legal#terms-and-conditions"
          >Terms and Conditions</nuxt-link
        >.
      </p>
    </v-card>
  </v-container>
</template>

<script>
export default {
  head() {
    return { title: 'Our Services' }
  },
}
</script>
