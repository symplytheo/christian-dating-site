export const state = () => ({
  text: 'Processing...',
  icon: 'loading', // success || error || warning || loading
  color: 'secondary',
  show: false,
  auto: true,
  timeout: 3000, // milliseconds
})

export const mutations = {
  show: (state, body) => {
    if (!body) state.show = false
    else {
      const { text, icon, auto, color, timeout } = body
      state.text = text || state.text
      state.icon = icon || state.icon
      state.auto = auto || false
      state.show = true
      state.color =
        color ||
        (icon === 'success'
          ? 'success'
          : icon === 'error'
          ? 'error'
          : state.color)
      state.timeout = timeout || state.timeout
    }
  },
  toggle(state, toggle) {
    state.show = toggle
  },
}
