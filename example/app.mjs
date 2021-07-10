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
        { to: '-comments', text: 'comments' },
        { to: '-urls', text: 'urls' },
        { to: '-emails', text: 'emails' },
      ],
    },
    { to: '/#source', text: 'source' },
  ],
}
