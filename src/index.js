module.exports = {
  style: {
    '.Pre': {
      display: 'block',
      fontFamily: 'monospace',
      whiteSpace: 'pre',
      margin: '1em 0',

      '.tag': {
        color: 'green',
      },
      '.keyword': {
        color: 'purple',
      },
      '.builtin': {
        color: 'cadetblue',
      },
      '.string': {
        color: '#dd8f00 !important',
      },
      '.colon': {
        color: 'darkgreen',
      },
      '.boolean': {
        color: 'blue',
      },
      '.actions': {
        color: 'blueviolet',
      },
      '.state': {
        color: 'cornflowerblue',
      },
      '.comment': {
        color: 'grey',
        fontStyle: 'italic',
      },
    },
  },

  View: content => {
    const format = content => {
      const keywords = `
let this long package float
goto private class if short
while protected with debugger case
continue volatile interface

instanceof super synchronized throw
extends final export throws
try import double enum

boolean abstract function
implements typeof transient break
void static default do

boolean abstract implements
typeof function do break
void static default transient

int new async native switch
else delete null public var
await byte finally catch
in return for get const char
module exports
`
      const builtins = `
Array Object String Number RegExp Null Symbol
Set WeakSet Map WeakMap
setInterval setTimeout
Promise
JSON
Int8Array Uint8Array Uint8ClampedArray
Int16Array Uint16Array
Int32Array Uint32Array
Float32Array Float64Array
`
      const booleans = `true false`

      const wrapWords = string => {
        if (typeof string !== 'string') {
          return string
        }

        const matched = string.split(/\b/)

        string = matched.map((word, i) => {
          if (word === '') {
            return
          }

          let cl = ''
          if (matched[i + 1] && matched[i + 1].includes(':')) {
            cl = 'colon'
          } else if (isTag(word)) {
            cl = 'tag'
          } else if (keywords.includes(word)) {
            cl = 'keyword'
          } else if (builtins.includes(word)) {
            cl = 'builtin'
          } else if (word === 'state') {
            cl = 'state'
          } else if (word === 'actions') {
            cl = 'actions'
          } else if (booleans.includes(word)) {
            cl = 'boolean'
          }

          if (cl) {
            word = span({ class: cl }, word)
          }

          return word
        })

        return string
      }

      const known = '[object HTMLDivElement]'
      const tags = {
        canvas: 1,
        video: 1,
      }

      const wordsByLine = line => {
        if (line.trim().startsWith('//')) {
          return div({ class: 'line comment' }, line)
        }

        const cleaned = line.replace(/"/g, "'")
        const [start, str, ...rest] = cleaned.split("'")
        let end = rest
        if (end.length === 1) {
          end = wordsByLine(end[0])
        } else if (end.length > 1) {
          end = wordsByLine(end.join("'"))
        }

        let words = []
        if (typeof str !== 'undefined') {
          words = [wrapWords(start), span({ class: 'string' }, `'${str}'`), end]
        } else {
          words = wrapWords(line)
        }
        return words
      }

      const isTag = word => {
        if (tags.hasOwnProperty(word)) {
          return true
        } else {
          try {
            const ele =
              typeof global !== 'undefined'
                ? Object.keys(app.dependencies).includes(word)
                : document.createElement(word).toString() === known

            if (ele) {
              tags[word] = true
              return true
            }
          } catch (e) {}
        }
      }

      const lines = content.split('\n').map(line => div({ class: 'line' }, wordsByLine(line)))

      return lines
    }

    return div({ class: 'Pre' }, format(content))
  },
}
