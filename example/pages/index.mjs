export const View = ({ title, description }) => [
  h1(title),

  p([
    'this is the',
    Link({ text: '@magic-modules', to: 'https://github.com/magic-modules' }),
    ' Pre component.',
  ]),

  p(description),

  GitBadges('@magic-modules/pre'),

  h2({ id: 'installation' }, 'installation'),

  Pre('npm install @magic-modules/pre'),

  h2({ id: 'usage' }, 'usage'),

  h3('multi line'),

  p('in a page / component, just pass some string to the markdown code component:'),

  Pre(['Pre(`', 'const foo = bar => {', '  console.log(bar)', '}', '`)']),

  p('renders'),

  Pre(`
const foo = bar => {
  console.log(bar)
}
`),

  h3('single lines'),

  p('single line code blocks work:'),

  Pre("Pre({ lines: false }, 'one line of code')"),

  p('renders'),

  Pre({ lines: false }, 'one line of code'),

  h2({ id: 'themes' }, 'themes'),

  p('pre supports two color themes. It will automatically adapt to the global theme settings.'),

  p([
    'the @magic-modules/[light-switch](https://github.com/magic-modules/light-switch)',
    'module allows users to toggle dark/light modes, which will also recolor pre to match.',
  ]),

  p([
    'if you have javascript activated,',
    'just click the small lightbulb in the top right corner of this page to test this.',
  ]),

  h2({ id: 'syntax' }, 'syntax'),

  h3({ id: 'syntax-comments' }, 'comments'),

  p([
    'Pre can handle single line comments starting with: //.',
    ' Multiline comments are on the todo list.',
  ]),

  Pre('const v = "t" // single line comment'),

  h3({ id: 'syntax-urls' }, 'urls'),

  p([
    'Pre can handle urls even though they look like comments.',
    ' Those urls will even turn into Link elements.',
    ' Urls are identified by containing the three characters://',
  ]),

  Pre({ lines: false }, 'https://jaeh.at'),

  p('Pre even handles links in comments and strings'),

  Pre('before comment // comment http://link.in.comment'),

  h3({ id: 'syntax-emails' }, 'emails'),

  p([
    'Pre finds emails in your text.',
    ' emails can either start with mailto: or must include at least one dot `.`',
    ' and at least one `@`.',
  ]),

  p('yes, strictly speaking, name@host is a valid email, but how often have you seen that ?'),

  p('if you actually do need support for name@local, please file an issue.'),

  h3('examples'),

  Pre('mail@jaeh.at'),

  Pre('mailto: mail@jaeh.at'),

  h4('link in a comment:'),

  Pre(`
const v = "t" // comment https://jaeh.at
// and in a comment starting the line https://wizardsatwork.at
  `),

  h4('Without line numbers'),

  Pre(`
  Pre({ lines: false }, \`
    String to highlight
without
line
numbers
\`)
    `),

  Pre(
    { lines: false },
    `
String to highlight
without
line
numbers
`,
  ),

  h4('comments with indent'),

  p('comments can be indented:'),

  Pre(`
// no indent
  // 2 spaces
    // 4 spaces
`),

  h4('multiline'),

  p('multiline strings and comments currently do not get handled'),

  h4('looong lines'),

  Pre(`
data:application/octet-stream;base64,21Ziv05hrD8iBMC+8aBivyvvqD8iBMC+rQ5hv05hrD+jO7K+0/pfv2jRrD+jO7K+21Ziv05hrD8iBMC+rQ5hv05hrD+jO7K+0/pfvz7urT8iBMC+21Ziv05hrD8iBMC+0/pfv2jRrD+jO7K+rQ5hv05hrD+jO7K+0/pfv05hrD9I+K++0/pfv2jRrD+jO7K+kRZZv+AArz+jO7K+0/pfvz7urT8i
`),

  p('renders'),

  Pre(`
data:application/octet-stream;base64,21Ziv05hrD8iBMC+8aBivyvvqD8iBMC+rQ5hv05hrD+jO7K+0/pfv2jRrD+jO7K+21Ziv05hrD8iBMC+rQ5hv05hrD+jO7K+0/pfvz7urT8iBMC+21Ziv05hrD8iBMC+0/pfv2jRrD+jO7K+rQ5hv05hrD+jO7K+0/pfv05hrD9I+K++0/pfv2jRrD+jO7K+kRZZv+AArz+jO7K+0/pfvz7urT8i
`),

  h2({ id: 'source' }, 'source'),

  p([
    'the source for this page is in the ',
    Link({
      text: 'example directory',
      to: 'https://github.com/magic-modules/pre/tree/master/example',
    }),
    ' and gets built and published to github using ',
    Link({ text: '@magic/core', to: 'https://github.com/magic/core' }),
  ]),
]
