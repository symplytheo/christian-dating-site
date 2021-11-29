import Cookies from 'js-cookie'

export default function ({ redirect }) {
  const token = Cookies.get('CDSNtoken')
  if (!token) {
    return redirect('/account/login')
  }
}
