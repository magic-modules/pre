module.exports = {
  state: {
    pre: {
      theme: 'light',
    },
  },
  actions: {
    pre: {
      changeTheme: theme => ({ theme }),
      clip: content => {
        if (typeof document !== 'undefined' && typeof document.execCommand === 'function') {
          const copy = document.createElement('textarea')
          copy.id = 'copy'
          copy.innerHTML = content

          document.body.appendChild(copy)
          const child = document.getElementById('copy')
          child.select()

          document.execCommand('copy')
          document.body.removeChild(child)
        }
      },
    },
  },
  style: {
    '.Pre': {
      display: 'block',
      fontFamily: 'monospace',
      whiteSpace: 'pre',
      margin: '1em 0',
      lineHeight: 1.3,
      border: '1px solid #666',
      padding: '1em .5em 1em .2em',
      borderRadius: '5px',
      counterReset: 'line',

      '> code': {
        display: 'block',
        counterIncrement: 'line',

        '&:before': {
          content: 'counter(line)',
          userSelect: 'none',
          padding: '0 .5em 0 0',
          width: '3ch',
          textAlign: 'right',
          display: 'inline-block',
        },
      },

      '.menu': {
        float: 'right',
        marginTop: '-.7em',
      },

      button: {
        padding: 0,
        margin: '0 .2em',
        backgroundColor: '#666',
        padding: '1px 3px',
        borderRadius: '3px',
        color: '#fefefe',
      },

      '&.light': {
        backgroundColor: '#eee',

        '> code:before': {
          color: '#666',
        },
        '.html': {
          color: '#008800',
        },
        '.keyword': {
          color: 'purple',
        },
        '.builtin': {
          color: 'cadetblue',
        },
        '.string': {
          color: '#d15100',
        },
        '.colon': {
          color: '#016301',
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
          color: '#555',
          fontStyle: 'italic',
        },
        '.object': {
          color: '#016301',
        },
        '.property': {
          color: '#2a952a',
        },
      },

      '&.dark': {
        color: '#eee',
        backgroundColor: '#222',

        '> code:before': {
          color: '#666',
        },
        '.html': {
          color: '#008800',
        },
        '.keyword': {
          color: 'violet',
        },
        '.builtin': {
          color: 'cadetblue',
        },
        '.string': {
          color: '#dd8f00',
        },
        '.colon': {
          color: '#8eef8e',
        },
        '.boolean': {
          color: '#7979e4',
        },
        '.actions': {
          color: 'blueviolet',
        },
        '.state': {
          color: 'cornflowerblue',
        },
        '.comment': {
          color: '#999',
          fontStyle: 'italic',
        },
        '.object': {
          color: '#00ff00',
        },
        '.property': {
          color: '#8eef8e',
        },
      },
    },
  },

  View: (content, theme = false, toggle = false) => (state, actions) => {
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
module exports require
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
          } else if (isHtmlTag(word)) {
            cl = 'html'
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
          } else if (matched[i - 1] === '.') {
            cl = 'property'
          } else if (matched[i + 1] === '.') {
            cl = 'object'
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
          return code({ class: 'line comment' }, line)
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

      const isHtmlTag = word => {
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

      // remove the FIRST newlines if they is at the start of the string
      // remove the LAST newlines, if they are at the end of the string
      content = content.replace(/^\n|\n$/g, '')

      const lines = content.split('\n').map(line => code({ class: 'line' }, wordsByLine(line)))

      return lines
    }

    return pre({ class: `Pre ${theme || state.pre.theme}` }, [
      div({ class: 'menu' }, [
        !theme && button({ onclick: () => actions.pre.changeTheme('dark') }, 'dark'),
        !theme && button({ onclick: () => actions.pre.changeTheme('light') }, 'light'),
        button({ onclick: () => actions.pre.clip(content) }, 'copy'),
      ]),
      format(content),
    ])
  },

  global: {
    state: {
      pre: true,
    },
    actions: {
      pre: true,
      clip: true,
    },
  },
}
