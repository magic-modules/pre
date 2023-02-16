import * as Pre from '../src/index.mjs'
import * as pre from '../src/lib/index.mjs'

const html = true

const before = () => {
  global.lib = {
    pre,
  }
}

const expect = (cl, word) => `<span class="${cl}">${word}</span>`

export default [
  ...pre.builtins.map(builtin => ({
    fn: () => Pre.Word(builtin),
    expect: expect('builtin', builtin), //t => console.log(JSON.stringify(t, null, 2)),
    info: `${builtin} gets the 'builtin' class`,
    before,
  })),
  ...pre.keywords.map(keyword => ({
    fn: () => Pre.Word(keyword),
    expect: expect('keyword', keyword), //t => console.log(JSON.stringify(t, null, 2)),
    info: `${keyword} gets the 'keyword' class`,
    before,
  })),
]
