module.exports = () =>
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
    p([
      'installation is done using npm. ',
      ' for now, all magic modules are living on github and not on npm.',
    ]),
    p('note the missing @ before magic-modules.'),
    p('this is how we install npm modules from github.'),

    Pre('npm install magic-modules/pre'),

    h2({ id: 'require' }, 'require:'),
    p('first add the component to the assets'),
    Pre(`
// assets/index.js
module.exports = {
  //...other exports
  Pre: require('@magic-modules/pre'),
}`),

    h2({ id: 'usage' }, 'usage:'),
    p('in a page/component, just pass some string that looks like js'),
    Pre("module.exports = {\n  View: () => Pre('const js = true'),\n}"),
    p('renders'),
    Pre('const js = true'),

    h2({ id: 'themes' }, 'colors'),
    p('Pre supports two color themes'),

    h3({ id: 'themes-fixed' }, 'fixed color:'),
    p('you can give a fixed color to a Pre by passing a second argument with the color.'),
    p('as you can see below, this also removes the theme choose buttons'),

    h3({ id: 'themes-dark' }, 'dark'),
    Pre("Pre('content', 'dark')", 'dark'),

    h3({ id: 'themes-light' }, 'light'),
    Pre("Pre('content', 'light')", 'light'),

    h2({ id: 'syntax' }, 'syntax'),

    h3({ id: 'syntax-comments' }, 'comments'),
    p([
      'Pre can handle single line comments starting with: //.',
      'Multiline comments are on the todo list.',
    ]),
    Pre('const v = "t" // single line comment'),

    h3({ id: 'syntax-urls' }, 'urls'),
    p([
      'Pre can handle urls even though they look like comments.',
      ' Those urls will even turn into Link elements.',
      ' Urls are identified by containing the three characters ://',
    ]),
    Pre('https://jaeh.at'),
    p('Pre even handles links in comments and strings'),
    Pre('before comment // comment http://link.in.comment'),

    h3({ id: 'syntax-emails' }, 'emails'),
    p([
      'Pre finds emails in your text.',
      ' emails can either start with mailto: or must include at least one @ and at least one .',
      'yes, strictly speaking, name@host is a valid email, but how often have you seen that?',
    ]),
    p(['if you actually do need support for name@local, please file an issue.']),

    p('both examples render the same'),
    Pre("Pre('mail@jaeh.at')"),
    Pre("Pre('mailto:test.mail@jaeh.at')"),

    Pre("Link({ to: 'mailto:mail@jaeh.at' }, 'mail@jaeh.at')"),
    p('result'),
    Pre('mail@jaeh.at'),

    p('link and comment'),
    Pre(`
const v = "t" // comment https://jaeh.at
// and in a comment starting the line https://wizardsatwork.at`),

    h2({ id: 'source' }, 'source'),
    p([
      'the source for this page is in the ',
      Link({ to: 'https://github.com/magic-modules/pre/tree/master/example' }, 'example directory'),
      ' and gets built and published to github using ',
      Link({ to: 'https://github.com/magic/core' }, '@magic/core'),
    ]),
  ])
