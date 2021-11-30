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
                  relation to our Service. Check our
                  <nuxt-link to="/dating" @click.native="close">
                    Dating page</nuxt-link
                  >.
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
                  application form for our pre-approval. See our
                  <nuxt-link to="/meetups" @click.native="close">
                    Meetups page</nuxt-link
                  >.
                </li>
                <li>
                  We, the Site owners, also organise various offline events for
                  our members, to give people a chance to meet face to face in a
                  safe and comfortable environment. Our events cover a range of
                  themes such as seminars, conferences, retreats, get-aways,
                  music festivals, films, theatres, comedy nights etc and may
                  include local and overseas trips. These will be bookable paid
                  events. Visit our
                  <nuxt-link to="/events" @click.native="close">
                    Events page</nuxt-link
                  >.
                </li>
              </ol>
            </li>

            <li class="font-weight-bold text-subtitle-1 text-sm-h6">
              Accessing The Service
              <ol class="font-weight-regular subtitle-1">
                <li>
                  To access and use the Christian Dating and Social Networking
                  Service you will need to register. To do this, you will need
                  to provide certain personal information such as your name,
                  phone number, postal address, email address, photographs, age,
                  gender, sexuality, religious beliefs, race, nationality,
                  interests, marital status, location and bank/credit card
                  details (if you subscribe to one of our paid Services).
                </li>

                <li>
                  Once you have registered, you will be automatically allocated
                  a "User ID” (which would comprise of your first name and a
                  system allocated numeric digits) and a “Service Password”
                  which will be emailed to you. You will be given the option on
                  first log in to change the password to something of your own
                  choosing. You can also change your password at any time by
                  logging into your profile. You cannot change your User ID.
                </li>

                <li>
                  You agree to keep your User ID and Password ("Login")
                  confidential at all times, to take reasonable steps to prevent
                  others from obtaining your Login, and to log off from your
                  account at the end of each session.
                </li>

                <li>
                  Christian Dating and Social Networking reserves the right to
                  disable any Login, whether chosen by you or allocated by us,
                  at any time, if in our opinion you have failed to comply with
                  these Terms and Conditions.
                </li>

                <li>
                  Once you have successfully registered an account, Christian
                  Dating and Social Networking will provide you with access to
                  an online database on which you will be able to browse through
                  the profiles of, and communicate with, other Christian Dating
                  and Social Networking registered users (Members).
                </li>

                <li>
                  Members’ profiles contain photos and information made
                  available by those members. You can find more information
                  about the types of personal information that are collected and
                  how this information is made available to other members in our
                  <nuxt-link to="/legal#privacy-policy" @click.native="close">
                    Privacy Policy</nuxt-link
                  >.
                </li>
              </ol>
            </li>

            <li class="font-weight-bold text-subtitle-1 text-sm-h6">
              Charges for The Service
              <ol class="font-weight-regular subtitle-1">
                <li>
                  There is free access to parts of the Website, but access to
                  certain features is subject to subscription charges. Details
                  of current charges are listed on the subscription pages.
                  Should you wish to use any of the subscription Services, you
                  agree to complete the subscription form on these pages and
                  make payment by credit or debit card.
                </li>
                <li>
                  Active accounts are categorised as either Trial, Basic or
                  Premium members. Premium members pay subscription fees, which
                  gives full access to the Site. We may limit services to
                  non-paying members, which are subject to change at any time.
                </li>
                <li>
                  Our subscriptions run as either 1-month; 3-month; 6-month; or
                  12-month plans. Choose a payment plan that's right for you.
                  Longer subscriptions offer greater savings (the longer the
                  plan the cheaper the cost to the member in terms of equivalent
                  monthly cost).
                </li>
                <li>
                  For your convenience, we will automatically renew your
                  subscription just before your current term comes to an end,
                  meaning we will take another payment just before your
                  subscription is about to expire. This ensures your
                  subscription continues successfully without any gaps. You can
                  cancel at any time and it's hassle-free to cancel. You can
                  cancel easily via your profile page. If you decide to cancel,
                  you will receive no refund of payment but you will still have
                  full access for the duration you have paid for.
                </li>
                <li>
                  By taking out a subscription you agree to be rebilled each
                  period until you cancel your subscription.
                </li>
                <li>
                  Once you've subscribed to a plan, there are no additional
                  charges.
                </li>
                <li>
                  You can view and compare our
                  <nuxt-link to="" @click.native="close"
                    >membership types</nuxt-link
                  >
                  and current
                  <nuxt-link to="" @click.native="close"
                    >subscription charges</nuxt-link
                  >.
                </li>
              </ol>
            </li>

            <li class="font-weight-bold text-subtitle-1 text-sm-h6">
              Eligibility
              <ol class="font-weight-regular subtitle-1">
                <li>
                  You must be eighteen (18) years old or over to register as a
                  member of the Service or to otherwise utilise the Service or
                  the Website.
                </li>
                <li>
                  Individuals who have been convicted of a sexual offence or
                  currently have such charges pending against them are not
                  eligible to register as a member of the Service or to
                  otherwise utilise the Service or the Website.
                </li>
                <li>
                  By using the Webite or the Service, you represent and warrant
                  that:
                  <ul style="list-style-type: lower-alpha">
                    <li>you are eighteen (18) or over</li>
                    <li>
                      you have not been convicted of a sexual offence and do not
                      currently have any charges pending against you with
                      respect to a sexual offence;
                    </li>
                    <li>
                      you are not required to register as a sex offender with
                      any government entity; and
                    </li>
                    <li>
                      you have the right, authority and capacity to enter into
                      and to abide by these Terms of Use.
                    </li>
                  </ul>
                </li>
              </ol>
            </li>

            <li class="font-weight-bold text-subtitle-1 text-sm-h6">
              Your Information
              <ol class="font-weight-regular subtitle-1">
                <li>
                  To ensure that we collect information about our members in a
                  responsible and accountable manner, we do not import or buy
                  profiles from other websites. We collect information directly
                  from our members in other to create their profile on our
                  Website.
                </li>
                <li>
                  Christian Dating and Social Networking processes information
                  about you in accordance with our
                  <nuxt-link to="/legal#privacy-policy" @click.native="close">
                    Privacy Policy</nuxt-link
                  >. By using the Website, you consent to such processing of
                  your information.
                </li>
                <li>
                  You agree to provide true, accurate, current and complete
                  information about yourself when you complete the registration
                  and/or subscription form and you warrant that all data
                  provided by you is correct.
                </li>
                <li>
                  You agree to maintain and update this information to keep it
                  true, accurate, current and complete.
                </li>
                <li>
                  You agree to keep your User ID and Password ("Login")
                  confidential at all times, to take reasonable steps to prevent
                  others from obtaining your Login, and to log off from your
                  account at the end of each session.
                </li>
                <li>
                  You agree to inform Christian Dating and Social Networking
                  immediately if at any point you consider that your Login has
                  been compromised and/or is being misused, and to take such
                  action as is required and/or is requested by Christian Dating
                  and Social Networking to prevent such compromise or misuse.
                </li>
                <li>
                  You are responsible for all fees relating to activities
                  conducted using your Login prior to the time that you notify
                  us of any unauthorised use of your Login.
                </li>
                <li>
                  You acknowledge that although Christian Dating and Social
                  Networking strives to maintain the necessary safeguards to
                  your personal data, we cannot ensure the security or privacy
                  of information you provide through the internet and your email
                  messages, and you release us from any and all liability in
                  connection with the use of such information by other parties.
                </li>
                <li>
                  You understand and agree that Christian Dating and Social
                  Networking and its agents and contractors may access the
                  content of your account in order to identify and resolve
                  technical problems or service complaints.
                </li>
                <li>
                  E-mails sent internally through the Christian Dating and
                  Social Networking Website may be routinely monitored to ensure
                  the service is being used in accordance with the Terms and
                  Conditions.
                </li>
                <li>
                  Christian Dating and Social Networking works with agents,
                  contractors and suppliers both in the UK and other countries
                  to maintain and develop the site. We will oblige such third
                  parties not to pass your personal data to any other party nor
                  to use the data for any purpose except that specifically
                  stated and allowed by Christian Dating and Social Networking.
                </li>
                <li>
                  Christian Dating and Social Networking shall not be
                  responsible for storing any information or materials on your
                  behalf. You are advised to maintain any backup copies of all
                  information that you wish to preserve.
                </li>
              </ol>
            </li>

            <li class="font-weight-bold text-subtitle-1 text-sm-h6">
              Credit Card Chargeback
              <ol class="font-weight-regular subtitle-1">
                <li>
                  A "chargeback" occurs when a credit card holder disputes a
                  credit card charge with a credit card processor, bank or
                  similar institution.
                </li>
                <li>
                  A fraudulent chargeback occurs when the holder attempts to
                  dispute or reverse a charge for services that they have
                  actually purchased.
                </li>
                <li>
                  In the event of any claim that your credit card has been used
                  without your permission or any other fraudulent use of your
                  credit card, Christian Dating and Social Networking will
                  assist the bank and police authorities with any investigations
                  including providing them with all the details used to register
                  associated profiles, card authentication and any
                  communications through or related to the Site either with
                  Christian Dating and Social Networking or other members.
                </li>
                <li>
                  Attempting to dispute or reverse a valid credit card charge is
                  fraudulent and illegal.
                </li>
              </ol>
            </li>

            <li class="font-weight-bold text-subtitle-1 text-sm-h6">
              Termination
              <ol class="font-weight-regular subtitle-1">
                <li>
                  Either party may terminate this Agreement at any time for any
                  reason.
                </li>
                <li>
                  You may terminate your subscription with us before your next
                  renewal date.
                </li>
                <li>
                  You can cancel easily via your profile page. If you decide to
                  cancel, you will receive no refund of payment but you will
                  still have full access for the duration you have paid for.
                </li>
                <li>
                  Any cancellation of subscription must be made within the
                  cancellation window as detailed in the
                  <nuxt-link to="" @click.native="close"
                    >subscription charges</nuxt-link
                  >
                  page; otherwise, it would be assumed that you intend to
                  continue subscription and the automatic renewal rules will
                  apply.
                </li>
                <li>
                  Christian Dating and Social Networking may, without notice and
                  without any liability to you, suspend, close or delete your
                  account, or withdraw your access to the Website, or delete
                  files in your account if Christian Dating and Social
                  Networking:
                  <ul style="list-style-type: lower-alpha">
                    <li>
                      has reasonable grounds to believe that you have breached
                      any of the terms of this Agreement;
                    </li>
                    <li>
                      has reasonable grounds to dispute, or unable to determine,
                      the accuracy or validity of any information provided by
                      you;
                    </li>
                    <li>suspects fraudulent, abusive or illegal activity;</li>
                    <li>
                      has reason to believe that you may have breached the
                      eligibility rules of this Agreement as detailed in Clause
                      6;
                    </li>
                    <li>
                      has other reasons to act, including but not limited to
                      business or technical reasons.
                    </li>
                  </ul>
                </li>
                <li>
                  If you breach any of these terms and conditions Christian
                  Dating and Social Networking may withdraw your access to the
                  Website and close any account you may have with us and
                  reserves the right to keep any subscription fee you have paid.
                </li>
                <li>
                  Christian Dating and Social Networking also reserves the right
                  to close a member's account if it comes to our notice that
                  they had breached the terms and conditions of any other dating
                  website or that they had been banned by any other dating
                  website for any serious crime of a criminal, violent or sexual
                  nature.
                </li>
                <li>
                  You may not re-join Christian Dating and Social Networking if
                  your membership has been previously terminated by us unless
                  matters have been satisfactorily resolved.
                </li>
              </ol>
            </li>

            <li class="font-weight-bold text-subtitle-1 text-sm-h6">
              User Undertakings
              <ol class="font-weight-regular subtitle-1">
                <li>
                  You agree/declare:
                  <ul>
                    <li>
                      that your use of the Website and the Service is subject to
                      all applicable local, state, national and international
                      laws and regulations;
                    </li>
                    <li>
                      not to use the Website or the Service for any unlawful
                      purpose or in any way which interferes with our ability to
                      provide the Website, the Service or any other products or
                      services to our members, or cause damage to our
                      reputation;
                    </li>
                    <li>
                      to comply with all requirements, procedures, policies and
                      regulations of the Website, and not to commit any acts of
                      infringement on the Website or with respect to content on
                      the Site;
                    </li>
                    <li>
                      that you have read, understood and agree with Our
                      <nuxt-link
                        to="/about-us#core-values"
                        @click.native="close"
                        >Core Values</nuxt-link
                      >
                      and
                      <nuxt-link
                        to="/about-us#what-we-believe"
                        @click.native="close"
                        >What We Believe</nuxt-link
                      >;
                    </li>
                    <li>
                      that you meet the eligibility criteria for the use of our
                      Website and Service with regard to age and criminality
                      (see Clause 6);
                    </li>
                    <li>
                      that you are not married or separated (if you are, there
                      are other websites that can cater for your needs);
                    </li>
                    <li>
                      that your profile information and all written
                      communication on, and via, the Website must be solely and
                      wholly in English;
                    </li>
                    <li>
                      to review Christian Dating and Social Networking’s
                      <nuxt-link to="/safety-advice" @click.native="close"
                        >Safety Advice</nuxt-link
                      >
                      prior to using the Service and to follow the
                      recommendations set forth therein;
                    </li>
                    <li>
                      not to include in your member profile, or transmit in any
                      non-paying membership, any personal contact information,
                      such as telephone numbers, street addresses, last names,
                      URLs, email addresses, social media profiles, or any
                      information that would enable people to contact you
                      outside the Site.
                    </li>
                    <li>
                      not to publish, promote, link to, refer to, or send to any
                      other member or user of the Website, any harassing,
                      libellous, privacy-invading, abusive, threatening,
                      harmful, vulgar, obscene, sexual, sexually-suggestive,
                      offensive, anatomical (nude), racist, homophobic,
                      overtly-political, religiously-intolerant or otherwise
                      objectionable or expletive material, on, via, or in the
                      course of using the Website or the Service;
                    </li>
                    <li>
                      not to post any photos containing nudity or otherwise
                      offensive material in any part of the Website. Christian
                      Dating and Social Networking reserves the right to reject
                      or remove any profile or photo that does not comply with
                      the letter or spirit of the Terms and Conditions.
                    </li>
                    <li>to treat other members respectfully;</li>
                    <li>
                      not to attack or undermine the faith, beliefs or
                      traditions of any member via the Website, whether directly
                      or indirectly;
                    </li>
                    <li>
                      not to divulge any personal or confidential information
                      about other members of the Site, past or present;
                    </li>
                    <li>
                      not to "stalk" or otherwise harass any member or user of
                      the Website or Service;
                    </li>
                    <li>not to pressure any member into intimacy;</li>
                    <li>
                      not to contact other members via any means on or off the
                      site, when their consent has been withdrawn;
                    </li>
                    <li>
                      not to impersonate any person or entity or include any
                      information in your member profile that is inaccurate or
                      misleading. Be as honest as you can when creating your
                      profile, you would not want to be misled so don't mislead
                      anyone;
                    </li>
                    <li>
                      not to take out additional or duplicate memberships,
                      whether Trial, Basic or Premium. Trial members whose trial
                      period has expired are not permitted to rejoin as Trial
                      members;
                    </li>
                    <li>
                      not to publish on or off the Website, or send in an email
                      or letter, any abusive, offensive, libellous, threatening
                      or otherwise objectionable or expletive messages or
                      communication to, or about, any staff of Christian Dating
                      and Social Networking, or make libellous or offensive
                      allegations about the Website or the Company or its staff,
                      to other members or third parties;
                    </li>
                    <li>
                      not to interfere or exhibit behaviours that would
                      interfere with another person's use and enjoyment of the
                      Website or Service;
                    </li>
                    <li>
                      not to engage in illegal and/or unauthorised use of the
                      Website, including collecting usernames and/or email
                      addresses of members by electronic or other means for the
                      purpose of selling or sending unsolicited email or
                      unauthorised framing of or linking to the Site;
                    </li>
                    <li>
                      not to use the Website to transmit chain letters, junk
                      mails, spams, or unsolicited mass distribution of
                      marketing communications or other materials;
                    </li>
                    <li>
                      not to use the Website or Service in a manner or for a
                      purpose that violates the rights of another, including but
                      not limited to the intellectual property rights of
                      another;
                    </li>
                    <li>
                      not to copy or reproduce in any form in whole or in part
                      anything published on the Website;
                    </li>
                    <li>
                      not to gain or attempt to gain unauthorised access to the
                      Website, the server on which the Website is stored or any
                      server, computer or database connected to the Site;
                    </li>
                    <li>
                      not to use the Website in a manner that may transmit,
                      interfere with or damage the Website or the Service
                      through, without limitation, the use of viruses, cancel
                      bots, Trojan horses, harmful code, flood pings,
                      denial-of-service attacks, packet or IP spoofing, hostile
                      programs or software, forged routing or electronic mail
                      address information or similar methods or technology,
                      including methods that in any way reproduce or circumvent
                      the navigational structure or presentation of the Website;
                    </li>
                    <li>
                      not to disrupt, interfere with, or otherwise harm or
                      violate the security of the Website, or any services,
                      system resources, accounts, passwords, servers or networks
                      connected to or accessible through the Site or affiliated
                      or linked sites;
                    </li>
                    <li>
                      not to use the Website to engage in commercial activities
                      or use any part of the Website, e. g. the internal mailing
                      system, the discussion boards etc for commercial gains,
                      such as to promote events, businesses, or services or to
                      make financial requests;
                    </li>
                    <li>
                      that any infringement or breach of these declarations or
                      any part of the Terms and Conditions will be investigated,
                      and appropriate legal action taken at Christian Dating and
                      Social Networking’s sole discretion, including without
                      limitation, civil, criminal, and injunctive redress. If
                      necessary, we will report any such breach to the relevant
                      law enforcement authorities and we will cooperate with
                      those authorities by disclosing your identity to them. In
                      the event of such a breach, your right to use the Site and
                      the Service will cease immediately;
                    </li>
                    <li>
                      that although we cannot monitor the conduct of our members
                      off the Site, it is also a violation of these Terms of Use
                      to use any information obtained from the Service in order
                      to harass, abuse, or harm another person, or in order to
                      contact, advertise to, solicit, or sell to any member or
                      person without their prior explicit consent. In order to
                      protect our members from such advertising or solicitation,
                      Christian Dating and Social Networking reserves the right
                      to restrict the number of communications that a member may
                      send to other members in any 24-hour period to a number
                      which Christian Dating and Social Networking deems
                      appropriate in its reasonable discretion;
                    </li>
                    <li>
                      that Christian Dating and Social Networking reserves the
                      absolute discretion to moderate, amend, delete, or
                      otherwise modify members' profile information, emails,
                      board posts, and/or any other information or communication
                      on the Website in accordance with the Terms and
                      Conditions.
                    </li>
                  </ul>
                </li>
              </ol>
            </li>

            <li class="font-weight-bold text-subtitle-1 text-sm-h6">
              Proprietary Rights
              <ol class="font-weight-regular subtitle-1">
                <li>
                  You acknowledge and agree that the Website contains
                  proprietary information and content that is protected by
                  intellectual property rights and other laws, and may not be
                  used except as provided in these Terms of Use without
                  Christian Dating and Social Networking's advance written
                  permission. You further acknowledge and agree that all
                  copyright, design rights, database rights, patents, and any
                  rights to inventions, know-how, trade and business names,
                  trade secrets and trade marks (whether registered or
                  unregistered) and any applications therefore ("Intellectual
                  Property Rights") in the Website belong to and vest in
                  Christian Dating and Social Networking, or are licensed to
                  Christian Dating and Social Networking unless otherwise
                  specified.
                </li>
                <li>
                  Christian Dating and Social Networking owns all copyright and
                  other intellectual property rights in the Website. All such
                  rights of Christian Dating and Social Networking are hereby
                  asserted and reserved.
                </li>
                <li>
                  You acknowledge and agree that content and information,
                  including but not limited to text, software, music, sound,
                  photographs, graphics, video, or other material contained in
                  the Website or presented to you by Christian Dating and Social
                  Networking is protected by copyrights, trademarks, service
                  marks, patents, or other proprietary rights and laws.
                </li>
                <li>
                  You acknowledge and agree that you are permitted to use this
                  material and information for your personal, non-commercial use
                  or as expressly authorised by Christian Dating and Social
                  Networking, and may not copy, reproduce, transmit, distribute,
                  or create derivative works of such content or information
                  without express authorisation from its author.
                </li>
                <li>
                  You acknowledge and agree that any material you post on any
                  area on the Website that is accessible to the public will be
                  treated as non-confidential and non-proprietary and Christian
                  Dating and Social Networking may use such material in any
                  medium for any purpose, including but not limited to the
                  reproduction, disclosure, transmission, publication, broadcast
                  and posting of such material in advertising and promotions.
                </li>
                <li>
                  You confirm that you are the author and copyright owner of any
                  texts or photographs you provide to Christian Dating and
                  Social Networking or you have permission from the copyright
                  owner. You agree to indemnify Christian Dating and Social
                  Networking for any claim brought against Christian Dating and
                  Social Networking for intellectual property right
                  infringement.
                </li>
              </ol>
            </li>

            <li class="font-weight-bold text-subtitle-1 text-sm-h6">
              Our Responsibilities
              <ol class="font-weight-regular subtitle-1">
                <li>
                  Your safety and security are our top priorities:
                  <ul>
                    <li>
                      Providing you with customer service support seven days a
                      week
                    </li>
                    <li>
                      Reviewing every profile and photo submitted by members
                    </li>
                    <li>Taking your comments and concerns seriously</li>
                  </ul>
                </li>
                <li>
                  We will operate the Website with the reasonable skill and care
                  of an online service provider.
                </li>
                <li>
                  We will use commercially reasonable efforts to maintain the
                  operation of the Site, however, we may need to temporarily
                  suspend operation of the Site or the Service from time to time
                  for operational reasons (e.g. for repairs, planned maintenance
                  or upgrades). We shall use commercially reasonable efforts to
                  restore the operation of the Site and the Service as soon as
                  reasonably possible after any suspension.
                </li>
                <li>
                  We reserve the right to make changes to the Site and/or the
                  Service from time to time.
                </li>
              </ol>
            </li>

            <li class="font-weight-bold text-subtitle-1 text-sm-h6">
              Disclaimers of Warranties
              <ol class="font-weight-regular subtitle-1">
                <li>
                  The Website and the Service are provided “as is” and “as
                  available”. Christian Dating and Social Networking cannot
                  guarantee the functionality of the Website or that the Website
                  will be uninterrupted, timely, secure, or error free.
                </li>
                <li>
                  Christian Dating and Social Networking do not make any
                  representation, warranty or guarantee regarding the accuracy
                  of any content appearing on or transmitted via the Website or
                  the Service, or the products and services listed by others on
                  or through the Site. We advise you to verify all such
                  information and offerings independently.
                </li>
                <li>
                  Whilst we will operate the Website with the reasonable skill
                  and care of an online service provider, we make no warranty as
                  to the results that may be obtained from the use of the
                  Website. We make no guarantee that the content of the Website
                  is up to date, accurate, reliable or complete, or that any
                  profile on the Site is authentic.
                </li>
                <li>
                  We make no representation or warranty as to the quality,
                  reliability or authenticity of any service provider or any
                  third party appearing on or through the Site or Service, and
                  are not responsible or liable for any acts or omissions
                  committed by such third parties.
                </li>
                <li>
                  Although each member must agree to these Terms and Conditions,
                  we cannot guarantee that each member has met the eligibility
                  criteria to use the Site or the Service, nor do we accept
                  responsibility or liability for any content, communication or
                  other use or access of the Site or Service by such ineligible
                  persons in violation of these Terms and Conditions.
                </li>
                <li>
                  It is possible that other members or users (including
                  unauthorised users or "hackers") may post or transmit
                  offensive or obscene materials through the Service and that
                  you may be involuntarily exposed to such offensive or obscene
                  materials. It is also possible for others to obtain personal
                  information about you due to your use of the Service. Those
                  others may use your information for purposes other than what
                  you intended. We are not responsible for the use of any
                  personal information that you disclose on the Service.
                </li>
                <li>
                  We disclaim any warranty that the Site, its content or the
                  Service will be free of interruption or defects, or that the
                  Site is free of viruses, worms, trojan horses or other code
                  that has contaminating or destructive properties.
                </li>
              </ol>
            </li>

            <li class="font-weight-bold text-subtitle-1 text-sm-h6">
              Limitations of Liability
              <ol class="font-weight-regular subtitle-1">
                <li>
                  By your use of the Website, its content, the Service or the
                  products or services of others placed or linked on the
                  Website, you agree and acknowledge that your use of such is at
                  your own risk.
                </li>
                <li>
                  Christian Dating and Social Networking shall not be liable
                  whatsoever for any loss or damage arising from the use of the
                  Website except for death or personal injury arising from its
                  negligence, and such other liability which cannot be excluded
                  by law.
                </li>
                <li>
                  Christian Dating and Social Networking shall not be liable
                  whatsoever for any loss or damage arising from your failure to
                  comply with these Terms and Conditions.
                </li>
                <li>
                  Subject to clause 13.2 above, the total aggregate liability
                  arising out of any claim in contract, negligence, tort (or
                  other legal liability) pursuant to these terms and conditions
                  shall not in any circumstances exceed £500.
                </li>
                <li>
                  We disclaim all liability, regardless of the form of action,
                  for the acts or omissions of other members or users (including
                  unauthorised users), whether such acts or omissions occur
                  during the use of the Website or otherwise.
                </li>
                <li>
                  Christian Dating and Social Networking has no control over
                  third party content and information which can be accessed
                  using the Website. Christian Dating and Social Networking is
                  excluded from all liability of any kind arising from such
                  content or information.
                </li>
                <li>
                  Christian Dating and Social Networking will not be liable for
                  any loss or damage caused by a distributed denial-of-service
                  attack, viruses or other technologically harmful material that
                  may infect your computer equipment, computer programs, data or
                  other proprietary material due to your use of our Site or to
                  your downloading of any material posted on it, or on any
                  website linked to it.
                </li>
                <li>
                  Christian Dating and Social Networking will not be liable for
                  any failure or delay in performing under these terms and
                  conditions where such failure or delay is due to causes beyond
                  our reasonable control.
                </li>
              </ol>
            </li>

            <li class="font-weight-bold text-subtitle-1 text-sm-h6">
              Indemnity
              <ol class="font-weight-regular subtitle-1">
                <li>
                  You agree that you will indemnify, defend and hold Christian
                  Dating and Social Networking, its officers, employees,
                  contractors, shareholders, associates, affiliates and other
                  representatives (collectively, "indemnified parties") harmless
                  from any loss, cost, damage, claim or demand, including
                  reasonable legal fees, made by any third party or incurred or
                  suffered by any of the indemnified parties as a result of or
                  arising from any breach by you of these Terms and Conditions,
                  as well as your general conduct arising from your use of the
                  Website.
                </li>
                <li>
                  Should any of the indemnified parties be entitled to be
                  indemnified by you pursuant to clause 15.1 above, you agree
                  that Christian Dating and Social Networking should contact you
                  through any legal means.
                </li>
              </ol>
            </li>

            <li class="font-weight-bold text-subtitle-1 text-sm-h6">
              Member Disputes
              <ol class="font-weight-regular subtitle-1">
                <li>
                  Not every match is going to be right for you, so closing
                  communication with matches and having matches close
                  communication with you is a natural and healthy part of the
                  process. It can be hard to be rejected or close off
                  communication with someone, but if you do, please be honest,
                  direct and polite.
                </li>
                <li>
                  You agree that you shall be solely responsible for, and
                  Christian Dating and Social Networking shall have no
                  responsibility with respect to any and all interactions that
                  you may have with other members or users of the Site.
                </li>
                <li>
                  In the event that you have any claim or action against any
                  other member or user of the Site arising from that member's or
                  user's use of the Site or the Service, you agree to pursue
                  such claim or action independently of and without any demands
                  from Christian Dating and Social Networking, and you release
                  us from any and all claims, liability and damages, arising
                  from or in any way connected to the claim or action.
                </li>
                <li>
                  Likewise, you agree that Christian Dating and Social
                  Networking (to the maximum extent permitted by applicable law)
                  shall have no liability to you in relation to any dispute
                  which you may have with any third party named or linked to the
                  Website or whose products, services or events are advertised
                  or offered through the Website. You agree to pursue such claim
                  or action independently of and without any demands from
                  Christian Dating and Social Networking, and you release us
                  from any and all claims, liability and damages, arising from
                  or in any way connected to the claim or action.
                </li>
              </ol>
            </li>

            <li class="font-weight-bold text-subtitle-1 text-sm-h6">
              Modifications and Amendments
              <ol class="font-weight-regular subtitle-1">
                <li>
                  Christian Dating and Social Networking may need to modify the
                  Website, the Service or any part of these Terms and Conditions
                  at any time for valid business and/or technical reasons. We
                  shall, where reasonably practicable, give reasonable notice of
                  our intention to do so.
                </li>
                <li>
                  Where the changes are minor or do not adversely affect your
                  enjoyment of the Service, we will notify you that these
                  changes are coming into effect.
                </li>
                <li>
                  Where the changes are more serious or might adversely affect
                  your enjoyment of the Service, then we will give you notice of
                  the change and give you a reasonable opportunity to terminate
                  your contract with us before those changes come into effect.
                  Where you exercise your right to terminate under this
                  paragraph, we will refund you an amount that is proportionate
                  to the period of your contract that you have not used.
                </li>
                <li>
                  Any changes to our Terms and Conditions will be posted on the
                  Website and, where appropriate, notified to you by email or
                  when you log in to your account. Please check back frequently
                  before using the Website to see any updates or changes to our
                  Terms and Conditions as continued use of the Website shall
                  indicate your acceptance of any changes. The amended Terms and
                  Conditions will come into force immediately and will override
                  any previous versions.
                </li>
              </ol>
            </li>

            <li class="font-weight-bold text-subtitle-1 text-sm-h6">
              Miscellaneous
              <ol class="font-weight-regular subtitle-1">
                <li>
                  These Terms and Conditions, the
                  <nuxt-link to="/legal#privacy-policy" @click.native="close">
                    Privacy Policy</nuxt-link
                  >
                  and the price lists for Subscriptions contained on the Site
                  constitute the entire agreement between you and us with
                  respect to your use of the Site and/or the Service.
                </li>
                <li>
                  This Agreement and the relationship between you and Christian
                  Dating and Social Networking shall be governed by the laws of
                  England and Wales. By using the Website or the Service, you
                  agree to submit to the exclusive jurisdiction of the courts of
                  England and Wales.
                </li>
                <li>
                  If we fail to exercise or enforce any provision of these Terms
                  and Conditions, such will not be considered a waiver of any
                  provision or right.
                </li>
                <li>
                  In the event that any part of these Terms and Conditions is
                  held to be invalid or unenforceable, that provision shall be
                  deemed severed and the remainder of the provisions will remain
                  valid and in full force and effect.
                </li>
                <li>
                  We may assign, transfer or sub-contract any of our rights or
                  obligations under this Agreement to any third party at our
                  discretion. However, where we have engaged a third party to
                  perform part of the contract with you, we remain liable
                  towards you for the full performance of our agreement and also
                  for the performance by the third party.
                </li>
                <li>
                  You may not assign or sub-contract any of your rights or
                  obligations under this Agreement to any third party unless we
                  agree in writing.
                </li>
                <li>
                  Neither party shall be liable for any breach of this Agreement
                  due to any cause beyond its reasonable control.
                </li>
                <li>
                  You must report any violations of this Agreement by any
                  member, user or third party to Christian Dating and Social
                  Networking using the
                  <nuxt-link to="/contact-us" @click.native="close"
                    >Contact Us</nuxt-link
                  >
                  form.
                </li>
              </ol>
            </li>

            <li class="font-weight-bold text-subtitle-1 text-sm-h6">
              Contact Information
              <ol class="font-weight-regular subtitle-1">
                <li>
                  The Site is operated by xxxxxxxxxx xxxxxxxxx Ltd, a company
                  registered under the laws of England and Wales. Our company
                  number is xxxxxxxxx. Our registered office is xxxxxxxxxxxxxx,
                  xxxxxxxx ,xxxxxxxxx, xxxx xxx, United Kingdom.
                </li>
                <li>
                  The best way to contact us is by completing the
                  <nuxt-link to="/contact-us" @click.native="close"
                    >Contact Us</nuxt-link
                  >
                  form on the Site. Alternatively, you can contact us by Email
                  at
                  <a href="mailto:info@christiandatingandsocialnetworking.com"
                    >info@christiandatingandsocialnetworking.com</a
                  >
                  or by post.
                </li>
              </ol>
            </li>
          </ol>

          <p>
            Please refer to our
            <nuxt-link to="/faqs" @click.native="close">FAQs</nuxt-link> for
            more information.
          </p>
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
