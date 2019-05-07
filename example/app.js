module.exports = {
  state: {
    title: '@magic-modules/pre',
    description: 'syntax highlighting for javascript',
    logo: '/img/logo.png',
    logotext: 'pre',
    menu: [
      { to: '/#installation', text: 'installation' },
      { to: '/#usage', text: 'usage' },
      {
        to: '/#themes',
        text: 'colors',
        items: [
          { to: '/#themes-fixed', text: 'fixed color' },
          { to: '/#themes-dark', text: 'dark' },
          { to: '/#themes-light', text: 'light' },
        ],
      },
      {
        to: '/#syntax',
        text: 'syntax',
        items: [
          { to: '/#syntax-comments', text: 'comments' },
          { to: '/#syntax-urls', text: 'urls' },
        ],
      },
      { to: '/#source', text: 'source' },
    ],
  },
}
