export const state = () => ({
  profile: null,
  authenticated: false,
  userMenu: [
    { title: 'Profile', href: '', icon: '' },
    { title: 'Bump up', href: '', icon: '' },
    { title: 'Refer a Friend', href: '', icon: '' },
    { title: 'Send Feedback', href: '', icon: '' },
  ],
})

export const getters = {
  profile: (state) => state.profile,
  authenticated: (state) => state.authenticated,
}

export const mutations = {
  setUser(state, user) {
    state.profile = user || null
    state.authenticated = !!user
  },
}
