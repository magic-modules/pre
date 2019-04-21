const { is } = require('@magic/test')
const Pre = require('../src')

module.exports = [
  { fn: () => Pre, expect: is.object, info: 'expect Pre to be an object' },
]
