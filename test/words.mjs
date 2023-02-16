import * as Pre from '../src/index.mjs'
import * as pre from '../src/lib/index.mjs'

const html = true

const before = () => {
  global.lib = {
    pre,
  }
}

export default [
  {
    fn: () => Pre.Words("before 'testing' after"),
    expect: [['before', ' '], '<span class="string">&#39;testing&#39;</span>', [' ', 'after']],
    html,
    before,
    info: '@magic-modules/pre works',
  },
  {
    fn: () => Pre.Words("before 'testing' after"),
    expect: [['before', ' '], '<span class="string">&#39;testing&#39;</span>', [' ', 'after']],
    html,
    before,
    info: '@magic-modules/pre works',
  },
]
