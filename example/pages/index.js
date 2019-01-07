module.exports = {
  Body: () =>
    div([
      h1('@magic-modules/pre'),
      p('this is the Pre component'),
      h3('Usage:'),
      p('first add the component to the assets'),
      Pre.View(`
// assets/index.js
module.exports = {
  //...other exports
  Pre: require('@magic-modules/pre'),
}`),
      p('then use it somewhere in a page/component'),
      Pre.View("module.exports = {\n  View: () => Pre.View('const js = true'),\n}"),
      p([
        'the source for this page is in the ',
        a(
          {
            href: 'https://github.com/magic-modules/pre/tree/master/example',
            target: '_blank',
            rel: 'noopener',
          },
          'example directory',
        ),
        ' and gets built and published to github using ',
        a(
          {
            href: 'https://github.com/magic/core',
            target: '_blank',
            rel: 'noopener',
          },
          '@magic/core',
        ),
      ]),
    ]),
}
