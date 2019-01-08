module.exports = {
  Body: () => {
    const complex = `
const object = {
  deep: { key: true },
}

const func = ({ test = 'true' }) => ({ test: 'true' })
`

    return div([
      h1('@magic-modules/pre'),
      p(['this is the ', a({ href: 'https://github.com/magic-modules', target: '_blank', rel: 'noopener' }, '@magic-modules'), ' Pre component']),
      h2('require:'),
      p('first add the component to the assets'),
      Pre.View(`
// assets/index.js
module.exports = {
  //...other exports
  Pre: require('@magic-modules/pre'),
}`),
      h2('usage:'),
      p('in a page/component, just pass some string that looks like js'),
      Pre.View("module.exports = {\n  View: () => Pre.View('const js = true'),\n}"),

      h2('source'),
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
      h2('recursion'),
      p('this is what the Pre component looks when rendered by Pre.View(Pre.View.toString())'),
      Pre.View(Pre.View.toString()),
    ])
  },
}
