export const state = {
  title: '@magic-modules/pre',
  description: 'syntax highlighting for javascript',
  logotext: 'Pre',

  menu: [
    { to: '/#installation', text: 'installation' },
    { to: '/#usage', text: 'usage' },
    { to: '/#themes', text: 'themes' },
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
}
