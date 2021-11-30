<template>
  <v-dialog v-model="dialog" fullscreen>
    <v-card tile flat>
      <v-card-title class="px-1 font-weight-bold">
        <v-btn icon class="mr-2" @click="close">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        Terms and Conditions
      </v-card-title>
      <div class="pa-5 pt-0">
        <p>
          By using the Website and Services, you declare and warrant that you
          have read and understood, and agree to be bound by, these Terms and
          Conditions and our
          <nuxt-link to="/legal#privacy-policy" @click.native="close">
            Privacy Policy</nuxt-link
          >, which is incorporated herein by reference and made part of this
          agreement. By viewing, accessing, using or browsing the Website, or by
          registering as a member of the Service (as defined herein), you agree
          to these Terms of Use as a binding legal agreement between you and us,
          without limitation or qualification.
        </p>
        <p>
          IF YOU DO NOT UNDERSTAND THIS AGREEMENT, OR DO NOT AGREE TO BE BOUND
          BY IT OR OUR
          <nuxt-link to="/legal#privacy-policy" @click.native="close">
            PRIVACY POLICY</nuxt-link
          >, YOU MUST IMMEDIATELY LEAVE THE WEBSITE AND CEASE USING THE
          SERVICES.
        </p>

        <div class="pa-5 pt-0">
          <ol>
            <li class="font-weight-bold text-subtitle-1 text-sm-h6">
              Application of These Terms and Conditions
              <ol class="font-weight-regular subtitle-1">
                <li>
                  These Terms of Use apply to any and all use of the Website or
                  the Service, and the purchase of any products or services on
                  the Website.
                </li>
                <li>
                  For purposes of this Agreement, the term “members” refers only
                  to persons who have registered their details on our Website,
                  or who have fully or partly completed their profile on our
                  Website, or any person who has become a trial, basic or
                  premium member on our Website. You will remain a member for as
                  long as your details are held on our Database.
                </li>
                <li>
                  Christian Dating and Social Networking reserves the right to
                  change, amend and update these Terms and Conditions, other
                  rules, guidelines and policies, or any other part of the
                  Website.
                </li>
                <li>
                  In the event of any inconsistency between this Agreement and
                  any binding mandatory statutory consumer rights then the terms
                  of those rights shall apply but only to the extent of that
                  inconsistency.
                </li>
              </ol>
            </li>

            <li class="font-weight-bold text-subtitle-1 text-sm-h6">
              The Website
              <ol class="font-weight-regular subtitle-1">
                <li>
                  This Website is owned and operated by Xxxxxxxxx Xxxxxxxxx Ltd,
                  a company registered in England, with company number xxxxxxxxx
                  and registered address at xxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxx
                  xxxxxxxxxxxxxxx.
                </li>
                <li>
                  Launched in 2022, the Website is designed to deliver a Service
                  for adults to meet fellow adults for relationship and
                  friendship, and communicate online, and to offer or provide
                  certain related products and services.
                </li>
                <li>
                  This Website and any contract related to it is governed by the
                  laws of England and Wales.
                </li>
                <li>
                  You may only use this Website if you are 18 years or above and
                  can form a legally binding contract under the laws of England
                  and Wales, and agree to be bound by such contract.
                </li>
                <li>
                  This Website contains a range of instructions, rules and
                  explanations which can be found in different parts of the Site
                  and in standard emails sent to members. All members of
                  Christian Dating and Social Networking are expected to abide
                  by them. Failure to do so, may result in suspension or
                  termination of membership or enforcement of liability.
                </li>
                <li>
                  Access to the Website is permitted within our sole discretion,
                  and we reserve the right to withdraw or amend the Service or
                  the Website, or any other products or services offered on the
                  Site, with or without notice. Any rights not expressly granted
                  herein are reserved.
                </li>
                <li>
                  You can only use the Website and the Service for your personal
                  use – commercial use is not permitted.
                </li>
              </ol>
            </li>

            <li class="font-weight-bold text-subtitle-1 text-sm-h6">
              The Service
              <ol class="font-weight-regular subtitle-1">
                <li>
                  The core Service we provide is with relation to adult dating
                  whereby we provide the platform for adult singles to
                  communicate online and meet other adult singles for dating and
                  relationship. Please be aware that while we hope that by using
                  our Service you will successfully meet and form a relationship
                  with another Christian Dating and Social Networking member, we
                  cannot guarantee that your use of the Service will result in
                  matrimony or any other longterm or meaningful commitment. We
                  are not and do not act as a matching or wedding agency in
                  relation to our Service. To access our Dating page, click here
                </li>
                <li>
                  We believe in building self and having fun while seeking for
                  love. Therefore we also offer a platform for registered users
                  of the Website to organise local, usually face-to-face, meetup
                  events or activities for other registered members to attend.
                  Meetups are group activities which may include activities such
                  as walks, climbing, bowling, cinemas, theatres, tours, meals,
                  skills sharing etc. This list is not exhaustive. These are
                  strictly events/activities by members for members with no
                  input from us. However, to ensure the safety of our members,
                  we moderate the events and activities by pre-screening the
                  application form and if the event/activity meets our Service
                  and Safety standards it will be approved and made available
                  for other members to RSVP their attendance. Further safety
                  measure we have put in place is that at least five members
                  must RSVP an event/activity before it is allowed to hold. If
                  disallowed, a message will be sent to the event/activity
                  organiser and the members who have RSVP’d informing them that
                  the event/activity has failed to attract the minimum number of
                  participants and therefore should be cancelled. Members will
                  be able to see other members who have RSVP’d an event to
                  decide whether or not they would like to also attend the
                  event. Members can withdraw their RSVP at any time. No fee is
                  paid to us for Meetup events but organisers are allowed to
                  charge attendees a small fee e.g. to reserve a venue, buy
                  drinks for the group etc. This should be detailed in the
                  application form for our pre-approval. To access our Meetups
                  page, click here.
                </li>
                <li>
                  We, the Site owners, also organise various offline events for
                  our members, to give people a chance to meet face to face in a
                  safe and comfortable environment. Our events cover a range of
                  themes such as seminars, conferences, retreats, get-aways,
                  music festivals, films, theatres, comedy nights etc and may
                  include local and overseas trips. These will be bookable paid
                  events. To access our Events page, click here.
                </li>
              </ol>
            </li>
          </ol>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: { type: Boolean, default: false },
  },
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

<style scoped>
ol {
  list-style-type: none;
  counter-reset: item;
  margin: 0;
  padding: 0;
}

ol > li {
  display: table;
  counter-increment: item;
  margin-bottom: 0.6em;
}

ol > li:before {
  content: counters(item, '.') '. ';
  display: table-cell;
  padding-right: 0.6em;
}

li ol > li {
  margin: 0;
}

li ol > li:before {
  content: counters(item, '.') ' ';
}
</style>
