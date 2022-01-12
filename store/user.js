import Cookies from 'js-cookie'

export const state = () => ({
  profile: null,
  authenticated: false,
  userMenu: [
    { title: 'Profile', href: '/account/me', icon: '' },
    { title: 'Bump up', href: '/account/bump-up', icon: '' },
    { title: 'Refer a Friend', href: '/account/referral', icon: '' },
    { title: 'Send Feedback', href: '/account/feedback', icon: '' },
    { title: 'Change Password', href: '/account/change-password', icon: '' },
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

export const actions = {
  logOut({ commit }) {
    Cookies.remove('CDSNtoken')
    commit('setUser', null)
    this.$router.go(0)
  },
}
