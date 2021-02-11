export const View = (props, str) => {
  if (typeof props === 'string') {
    props = {
      content: props,
    }
  } else if (str) {
    props = {
      content: str,
      ...props,
    }
  } else if (Array.isArray(props)) {
    props = {
      content: props.join(''),
    }
  }

  CHECK_PROPS(props, propTypes, 'Pre')

  let { content, lines = true } = props

  let classes = {
    Pre: true,
    lines: !lines || lines !== 'false',
  }

  return div({ class: classes }, [
    div({ class: 'menu' }, [
      button({ onclick: [actions.pre.clip, e => ({ e, content })] }, 'copy'),
    ]),

    pre(
      content
        .trim()
        .split('\n')
        .map(Pre.Line),
    ),
  ])
}

export const Line = line => code({ class: 'line' }, Pre.Words(line))

export const Words = line => {
  let [before, ...after] = line.split(lib.pre.commentRegex)

  const isComment = !before.endsWith(':') && after.length

  if (isComment) {
    return [
      Pre.Words(before),
      Pre.Comment(
        after
          .join('')
          .split(lib.pre.wordRegex)
          .map(Pre.Word)
      ),
    ]
  }

  const assembled = []

  let rest = line

  line.replace(lib.pre.stringRegex, match => {
    if (rest) {
      const [before, after] = rest.split(match)

      if (before) {
        assembled.push(
          before
            .split(lib.pre.wordRegex)
            .map(Pre.Word)
            .filter(a => a),
        )
      }

      rest = after
    }

    assembled.push(span({ class: 'string' }, match))
  })

  if (rest !== line) {
    if (rest) {
      assembled.push(rest.split(lib.pre.wordRegex).map(Pre.Word))
    }
    return assembled
  }

  const words = line.split(lib.pre.wordRegex)
  return words.map(Pre.Word)
}

export const Word = word => {
  if (!word) {
    return ''
  }

  const isHttpUrl = word.includes('://')
  const isEmail = word.startsWith('mailto:') || (word.includes('@') && word.includes('.'))

  if (isHttpUrl || isEmail) {
    return Link({ to: word, text: word })
  }

  let cl = ''

  if (word === 'state') {
    cl = 'state'
  } else if (word === 'actions') {
    cl = 'actions'
  } else if (lib.pre.keywords.includes(word)) {
    cl = 'keyword'
  } else if (lib.pre.builtins.includes(word)) {
    cl = 'builtin'
  } else if (lib.pre.booleans.includes(word)) {
    cl = 'boolean'
  }

  if (cl) {
    return span({ class: cl }, word)
  }

  return word
}

export const Comment = string => span({ class: 'comment' }, string)

export const actions = {
  pre: {
    clip: (state, { content }) => {
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
      return state
    },
  },
}

export const style = {
  border: '1px solid #666',
  borderRadius: '5px',
  counterReset: 'line',
  display: 'block',
  fontFamily: 'monospace',
  margin: '1em 0',
  lineHeight: 1.3,
  padding: '1em .5em 0 .2em',
  position: 'relative',
  whiteSpace: 'pre',
  textAlign: 'left',

  '&.lines': {
    pre: {
      '> code': {
        counterIncrement: 'line',
        padding: 0,

        '&:last-child': {
          padding: '0 0 1em',
        },

        '&:before': {
          content: 'counter(line)',
          display: 'inline-block',
          padding: '0 .5em 0 0',
          textAlign: 'right',
          userSelect: 'none',
          width: '3ch',
        },
      },
    },
  },

  pre: {
    overflowX: 'auto',

    '> code': {
      display: 'block',

      padding: '0 1em 0',

      '&:last-child': {
        padding: '0 1em 1em',
      },
    },
  },

  '.menu': {
    position: 'absolute',
    marginTop: '-2em',
    right: 0,
  },

  button: {
    backgroundColor: '#666',
    borderRadius: '3px',
    color: '#fefefe',
    margin: '0 .2em',
    padding: '1px 3px',
    border: '0 none',
  },

  '.light&&': {
    backgroundColor: '#ddd',
    color: '#111',

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
      opacity: '0.8',
      fontStyle: 'italic',
    },
    '.object': {
      color: '#016301',
    },
    '.property': {
      color: '#2a952a',
    },

    a: {
      color: '#d15100',

      '&:hover': {
        color: 'turquoise',
      },
    },
  },

  backgroundColor: '#121212',
  color: '#eee',
  transition: 'color 300ms, background-color 300ms',

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
    opacity: '0.7',
    fontStyle: 'italic',
  },
  '.object': {
    color: '#00ff00',
  },
  '.property': {
    color: '#8eef8e',
  },
  a: {
    color: 'turquoise',

    '&:hover': {
      color: '#d15100',
    },
  },
}

export const propTypes = {
  Pre: [
    { key: 'content', type: 'string', max: Number.MAX_SAFE_INTEGER },
    { key: 'lines', type: ['boolean', 'string'], default: true },
  ],
}

const Pre = {
  Line,
  Words,
  Word,
  Comment,
}
