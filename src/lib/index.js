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
default do static void

int new async native switch
else delete null public var
await byte finally catch
in return for get const char
module exports require
`
  .trim()
  .split(/\b/g)
  .map(w => w.trim())

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
  .trim()
  .split(/\b/g)
  .map(w => w.trim())

const booleans = `true false`

// const known = '[object HTMLDivElement]'
// const tags = {
//   canvas: 1,
//   video: 1,
// }

// const isHtmlTag = word => {
//   if (tags.hasOwnProperty(word)) {
//     return true
//   } else {
//     try {
//       const ele =
//         typeof global !== 'undefined'
//           ? Object.keys(app.dependencies).includes(word)
//           : document.createElement(word).toString() === known

//       if (ele) {
//         tags[word] = true
//         return true
//       }
//     } catch (e) {}
//   }
// }

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
    if (word === 'state') {
      cl = 'state'
    } else if (word === 'actions') {
      cl = 'actions'
    } else if (matched[i + 1] && matched[i + 1].includes(':')) {
      cl = 'colon'
      // } else if (isHtmlTag(word)) {
      //   cl = 'html'
    } else if (keywords.includes(word)) {
      cl = 'keyword'
    } else if (builtins.includes(word)) {
      cl = 'builtin'
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

const findLinks = line => {
  if (Array.isArray(line)) {
    return line.map(findLinks)
  }

  console.log('mail', line.includes('@'), line.includes('.'), line.trim().includes(' '))
  if (line.indexOf('://') > 2) {
    return line
      .split(' ')
      .map(word => (word.includes('://') ? Link({ to: word }, word) : [wordsByLine(word), ' ']))
  } else if (line.includes('@') && line.includes('.') && !line.trim().includes(' ')) {
    let to = line.trim()
    if (!to.startsWith('mailto:')) {
      to = `mailto:${to}`
    }
    return Link({ class: 'email', to }, line)
  }

  return line
}

const wordsByLine = line => {
  const idx = line.indexOf('//')
  if (line.trim().startsWith('//')) {
    return code({ class: 'line comment' }, ['//', wordsByLine(line.substring(2))])
  } else if (idx > -1 && line[idx - 1] !== ':') {
    const idx = line.indexOf('//')
    const before = line.substring(0, idx)
    const after = line.substring(idx)

    return code({ class: 'line' }, [
      wordsByLine(before),
      span({ class: 'comment' }, wordsByLine(after)),
    ])
  } else if (line.indexOf('://') > 2) {
    return line
      .split(/(?= )/)
      .map(word => (word.includes('://') ? Link({ to: word }, word) : wordsByLine(word)))
  } else if (line.indexOf('@') && line.includes('.') && !line.trim().includes(' ')) {
    line = line.replace('mailto:', '')
    const parts = line.split(/\b/g)
    let linkStarted = false

    let link = ''
    const reg = /[^A-Za-z0-9.:]/g

    parts.map((part, i) => {
      let mailto = false
      if (part === 'mailto') {
        mailto = true
        linkStarted = true
        link = part
      } else if (!mailto && part === '@') {
        linkStarted = true
        link = parts[i - 1] + part
        parts[i - 1] = null
      } else if (reg.test(part)) {
        linkStarted = false
      }

      if (linkStarted && !reg.test(part)) {
        link += part
      }
    })

    if (link) {
      const [before, after] = line.split(link)
      let to = link
      if (link.startsWith('mailto:')) {
        link = link.replace('mailto:', '')
      } else {
        to = `mailto:${link}`
      }
      return [before, Link({ class: 'email', to }, link), after]
    }
    return line
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

const wrapLine = line => code({ class: 'line' }, wordsByLine(line))

const format = content =>
  content
    .trim()
    .split('\n')
    .map(wrapLine)

module.exports = {
  keywords,
  builtins,
  format,
  wordsByLine,
  wrapWords,
}
