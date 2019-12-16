export const View = state => [
  h1(state.title),
  p([
    'this is the ',
    Link({ to: 'https://github.com/magic-modules' }, '@magic-modules'),
    ' Pre component. ',
    state.description,
  ]),

  GitBadges('magic-modules/pre'),

  h2({ id: 'installation' }, 'installation:'),
  Pre('npm install @magic-modules/pre'),

  h2({ id: 'usage' }, 'usage:'),
  p('in a page/component, just pass some string that looks like js'),
  Pre(`export const View = () => Pre('const js = true')`),

  p('renders'),
  Pre('const js = true'),

  h2({ id: 'themes' }, 'colors'),
  p('Pre supports two color themes. It will automatically adapt to the global theme settings.'),
  p([
    'the @magic-modules/',
    Link({ to: 'https://github.com/magic-modules/light-switch' }, 'light-switch'),
    ' module allows users to toggle dark/light modes, which will also recolor pre to match.',
  ]),

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
    ' emails can either start with mailto: or must include at least one dot `.` and at least one `@`.',
    ' yes, strictly speaking, name@host is a valid email, but how often have you seen that?',
  ]),
  p(['if you actually do need support for name@local, please file an issue.']),

  h3({ id: 'examples' }, 'examples'),
  Pre("Pre('mail@jaeh.at')"),
  Pre("Pre('mailto:mail@jaeh.at')"),
  Pre("Link({ to: 'mailto:mail@jaeh.at' }, 'mail@jaeh.at')"),

  h3('result if used as bare string:'),
  Pre('mail@jaeh.at'),

  p('link and comment'),
  Pre(`
const v = "t" // comment https://jaeh.at
// and in a comment starting the line https://wizardsatwork.at`),

  p('Without line numbers'),
  Pre('Pre({ lines: false }, "String to highlight\\nwithout\\nline\\nnumbers")'),
  Pre({ lines: false }, "String to highlight\nwithout\nline\nnumbers"),

  h2({ id: 'source' }, 'source'),
  p([
    'the source for this page is in the ',
    Link({ to: 'https://github.com/magic-modules/pre/tree/master/example' }, 'example directory'),
    ' and gets built and published to github using ',
    Link({ to: 'https://github.com/magic/core' }, '@magic/core'),
  ]),

  LightSwitch(state),
]
