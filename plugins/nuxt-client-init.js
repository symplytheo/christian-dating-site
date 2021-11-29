import Cookies from 'js-cookie'

export default ({ store }) => {
  const token = Cookies.get('CDSNtoken')
  if (token) {
    store.commit('user/setUser', {
      name: 'Jane Doe',
      email: 'janedoe@gmail.com',
    })
  }

  const allowCookie = Cookies.get('allowCookie')
  if (allowCookie) {
    store.commit('setCookiePermission', false)
  }
}
