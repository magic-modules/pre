const { is } = require('@magic/test')
const Pre = require('../src')

module.exports = [
  { fn: () => Pre, expect: is.function, info: 'expect Pre to be an object' },
  { fn: () => Pre.View, expect: is.function, info: 'expect Pre to be an object' },
]
