export const View = props => {
  if (typeof props === 'string') {
    props = {
      content: props,
      theme: 'light',
      // fixed: !!props.theme,
    }
  }

  CHECK_PROPS(props, propTypes, 'Pre')

  const { theme, content, /*fixed*/ } = props

  return div({ class: `Pre ${theme}` }, [
    div({ class: 'menu' }, [
      // has to be disabled until we added subscription to theme changes
      // !fixed &&
      //   button({ onclick: [actions.pre.changeTheme] }, theme === 'dark' ? 'light' : 'dark'),
      button({ onclick: [actions.pre.clip, e => ({ e, content })] }, 'copy'),
    ]),
    pre(LIB.Pre.format(content)),
  ])
}

export const state = {
  theme: 'light',
}

export const actions = {
  pre: {
    // changeTheme: state => {
    //   const pre = state.pre
    //   pre.theme = state.theme === 'dark' ? 'light' : 'dark'
    //   return {
    //     ...state,
    //     pre,
    //   }
    // },
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

// export const subscriptions = {
//   testing: (...a) => console.log(...a),
// }

export const style = {
  border: '1px solid #666',
  borderRadius: '5px',
  display: 'block',
  fontFamily: 'monospace',
  margin: '1em 0',
  lineHeight: 1.3,
  padding: '1em .5em 0 .2em',
  position: 'relative',
  whiteSpace: 'pre',

  counterReset: 'line',

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

  '&.dark': {
    backgroundColor: '#222',
    color: '#eee',

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
  },
}

export const propTypes = [{ key: 'content', type: 'string' }, { key: 'theme', type: 'string' }]
