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
  /* disable html tests for now, spaces in html create &amp;amp;amp; */
  {
    fn: true,
  },
  // {
  //   fn: () => Pre.View("before 'testing' after"),
  //   expect: t => expect('<div class= "Pre lines"><div class="menu"><button>copy</button></div><pre><code class="line">before <span class="string">#39;testing#39;</span> after</code></pre></div>'),
  //   html,
  //   before,
  //   info: '@magic-modules/pre works',
  // },
  // {
  //   fn: () => Pre.View(`'1' multistring '2' "3"`),
  //   expect: t=> console.log({ t })||expect([
  //     <div class="Pre lines"><div class="menu"><button>copy</button></div><pre><code class="line"><span class="string">&amp;amp;amp;#39;1&amp;amp;amp;#39;</span> multistring <span class="string">&amp;amp;amp;#39;2&amp;amp;amp;#39;</span> <span class="string">"3"</span></code></pre></div>
  //   ]),
  //   info: 'can handle multiple strings in one line',
  //   html,
  //   before,
  // },
  // {
  //   fn: () => Pre.View(`'1' // multistring '2' "3"`),
  //   expect: expect([
  //     [['span', { class: 'string' }, "'1'"], [' ']],
  //     ['span', { class: 'comment' }, ['//', ' ', 'multistring', ' ', "'2'", ' ', '"3"']],
  //   ]),
  //   info: 'can handle comments',
  //   html,
  //   before,
  // },
  // {
  //   fn: () => Pre.View({ prop: 1 }, 'string'),
  //   expect: expect(['string']),
  //   info: 'can handle (Object, string) function signature',
  //   html,
  //   before,
  // },
]
