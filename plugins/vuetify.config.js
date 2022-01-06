const theme = {
  dark: false,
  themes: {
    light: {
      primary: '#FF47D3',
      primary_alt: '#FF47D3',
      secondary: '#0A44BF',
    },
  },
}

const breakpoint = {
  mobileBreakpoint: 'sm',
  thresholds: {
    xs: 576,
    sm: 768,
    md: 1024,
    lg: 1200,
  },
  scrollBarWidth: 16,
}

export default {
  theme,
  breakpoint,
  icons: {
    iconfont: 'mdiSvg',
  },
}
