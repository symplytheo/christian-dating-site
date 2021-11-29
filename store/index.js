export const state = () => ({
  navLinks: [
    { title: 'Home', to: '/' },
    { title: 'About Us', to: '/about-us' },
    { title: 'Our Services', to: '/services' },
    { title: 'Legal', to: '/legal' },
    { title: 'Support', to: '/contact-us' },
    { title: 'Login', to: '/account/login', isLast: true },
  ],
  loggedNav: [
    { title: 'Home', to: '/' },
    { title: 'Message', to: '/account/inbox', hasBadge: true },
  ],
  tabs: [
    { title: 'New', to: '/dating' },
    { title: 'Match', to: '/dating/match' },
    { title: 'Meetup', to: '/meetup' },
    { title: 'Corporate Events', to: '/corporate-events' },
    { title: 'Love Pod', to: '/love-pod' },
    { title: 'Love Pop-up', to: '/love-popup' },
  ],
  users: [
    {
      name: 'Meghan',
      profile_pic: '/images/person-1.png',
      age: 24,
      location: 'Shutterton, England',
      status: 'offline',
      last_seen: '2 mins ago',
    },
    {
      name: 'Promise',
      profile_pic: '/images/person-2.png',
      age: 32,
      location: 'Celtic, Scotland',
      status: 'online',
    },
    {
      name: 'Claire',
      profile_pic: '/images/person-3.png',
      age: 24,
      location: 'Texas, USA',
      status: 'online',
    },
    {
      name: 'Olivia',
      profile_pic: '/images/person-4.png',
      age: 24,
      location: 'Ontawa, Canada',
      status: 'offline',
      last_seen: '1 hour ago',
    },
  ],
  meetups: [
    {
      title: 'Getting to know each other',
      image: '/images/meetup-1.png',
      type: 'Online',
      date: 'Fri, 3 sept',
      time: '10:00pm WAT',
      interested: 100,
      likes: 500,
    },
    {
      title: 'programmatically starts the loader',
      image: '/images/meetup-2.png',
      type: 'Online',
      date: 'Mon, 22 Nov',
      time: '6:00pm GMT+1',
      interested: 100,
      likes: 500,
    },
    {
      title: 'Create a custom loading component',
      image: '/images/meetup-3.png',
      type: 'Online',
      date: 'Sat, 25 Dec',
      time: '12:00pm CAT',
      interested: 100,
      likes: 500,
    },
    {
      title: 'The Nuxt Child component to create parent and child pages',
      image: '/images/video-call.png',
      type: 'Online',
      date: 'Sat, 25 Dec',
      time: '8:00am GMT',
      interested: 100,
      likes: 500,
    },
  ],
  cookiePermission: true,
})

export const mutations = {
  setCookiePermission(state, val) {
    state.cookiePermission = val
  },
}
