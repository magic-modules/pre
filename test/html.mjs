import * as Pre from '../src/index.mjs'
import * as pre from '../src/lib/index.mjs'

const html = true

const before = () => {
  global.lib = {
    pre,
  }
}

const expect = args => [
  'div',
  {
    class: {
      Pre: true,
      lines: true,
    },
  },
  [
    [
      'div',
      {
        class: 'menu',
      },
      [
        [
          'button',
          {
            onclick: [null, null],
          },
          'copy',
        ],
      ],
    ],
    ['pre', [['code', { class: 'line' }, args]]],
  ],
]

export default [
  {
    fn: () => Pre.View("before 'testing' after"),
    expect: expect([
      ['before', ' '],
      ['span', { class: 'string' }, "'testing'"],
      [' ', 'after'],
    ]),
    html,
    before,
    info: '@magic-modules/pre works',
  },
  {
    fn: () => Pre.View(`'1' multistring '2' "3"`),
    expect: expect([
      ['span', { class: 'string' }, "'1'"],
      [' ', 'multistring', ' '],
      ['span', { class: 'string' }, "'2'"],
      [' '],
      ['span', { class: 'string' }, '"3"'],
    ]),
    info: 'can handle multiple strings in one line',
    html,
    before,
  },
  {
    fn: () => Pre.View(`'1' // multistring '2' "3"`),
    expect: expect([
      [['span', { class: 'string' }, "'1'"], [' ']],
      ['span', { class: 'comment' }, ['//', ' ', 'multistring', ' ', "'2'", ' ', '"3"']],
    ]),
    info: 'can handle comments',
    html,
    before,
  },
  {
    fn: () => Pre.View({ prop: 1 }, 'string'),
    expect: expect(['string']),
    info: 'can handle (Object, string) function signature',
    html,
    before,
  },
]
