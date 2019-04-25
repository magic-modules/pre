module.exports = {
  View: () =>
    div([
      h1('@magic-modules/pre'),
      p([
        'this is the ',
        Link({ to: 'https://github.com/magic-modules' }, '@magic-modules'),
        ' Pre component. It provides syntax highlighting for javascript',
      ]),

      GitBadges({
        project: 'magic-modules/pre',
        appveyor: 'jaeh/pre',
      }),

      h2({ id: 'installation' }, 'installation:'),
      p(
        'installation is done using npm. for now, all magic modules are living on github and not on npm.',
      ),
      p('note the missing @ before magic-modules.'),
      p('this is how we install npm modules from github.'),

      Pre.View(`
npm install magic-modules/pre
`),

      h2({ id: 'require' }, 'require:'),
      p('first add the component to the assets'),
      Pre.View(`
// assets/index.js
module.exports = {
  //...other exports
  Pre: require('@magic-modules/pre'),
}`),
      h2({ id: 'usage' }, 'usage:'),
      p('in a page/component, just pass some string that looks like js'),
      Pre.View("module.exports = {\n  View: () => Pre.View('const js = true'),\n}"),
      p('renders'),
      Pre.View('const js = true'),

      h2({ id: 'fixed-color' }, 'fixed color:'),
      p('you can give a fixed color to a Pre.View by passing a second argument with the color.'),
      p('as you can see below, this also removes the theme choose buttons'),

      h3('dark'),
      Pre.View("Pre.View('content', 'dark')", 'dark'),

      h3('light'),
      Pre.View("Pre.View('content', 'light')", 'light'),

      h2({ id: 'source' }, 'source'),
      p([
        'the source for this page is in the ',
        Link(
          { to: 'https://github.com/magic-modules/pre/tree/master/example' },
          'example directory',
        ),
        ' and gets built and published to github using ',
        Link({ to: 'https://github.com/magic/core' }, '@magic/core'),
      ]),
    ]),
}
