module.exports = {
  state: {
    logo: '/img/logo.png',
    logotext: 'pre',
    menu: [
      { to: '/#installation', text: 'installation' },
      { to: '/#require', text: 'require' },
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
