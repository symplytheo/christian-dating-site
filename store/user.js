export const state = () => ({
  profile: null,
  authenticated: false,
  userMenu: [],
})

export const getters = {
  profile: (state) => state.profile,
  authenticated: (state) => state.authenticated,
}
