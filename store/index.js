export const state = () => ({
  navLinks: [
    { title: 'Home', to: '/' },
    { title: 'About Us', to: '/about' },
    { title: 'Our Services', to: '/services' },
    { title: 'Legal', to: '/legal' },
    { title: 'Support', to: '/support' },
    { title: 'Login', to: '/account/login', isLast: true },
  ],
})
