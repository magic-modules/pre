export const View = props => {
  if (typeof props === 'string') {
    props = {
      content: props,
    }
  }

  CHECK_PROPS(props, propTypes, 'Pre')

  const { content } = props

  return div({ class: 'Pre' }, [
    div({ class: 'menu' }, [
      button({ onclick: [actions.pre.clip, e => ({ e, content })] }, 'copy'),
    ]),
    pre(lib.pre.format(content)),
  ])
}

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

  pre: {
    overflowX: 'auto',

    '> code': {
      counterIncrement: 'line',
      display: 'block',

      '&:before': {
        content: 'counter(line)',
        display: 'inline-block',
        padding: '0 .5em 0 0',
        textAlign: 'right',
        userSelect: 'none',
        width: '3ch',
      },

      '&:last-child': {
        padding: '0 0 1em',
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
  Pre: [{ key: 'content', type: 'string' }],
}
