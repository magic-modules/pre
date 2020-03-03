export const keywords = `
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

export const builtins = `
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

export const booleans = ['true', 'false']

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

export const wrapWords = string => {
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

export const mailRegex = /([a-zA-Z0-9:+._-]+@[a-zA-Z0-9._-]+)/g

export const wrapEmails = line =>
  line.split(mailRegex).map(part => {
    if (mailRegex.test(part)) {
      const to = part.startsWith('mailto:') ? part : `mailto:${part}`
      const text = part.replace('mailto:', '')
      return Link({ class: 'email', to }, text)
    }

    return wrapWords(part)
  })

export const wrapLinks = line =>
  line
    .split(' ')
    .map(word => {
      if (!word.includes('://')) {
        return wordsByLine(word + ' ')
      }

      const [protocol, url] = word.split('://')
      if (!protocol.match(/[a-z]/g)) {
        return word
      }

      return Link({ to: word }, word)
    })

const wrapUrls = line => {
  if (line.includes('://') && !line.includes('@')) {
    return wrapLinks(line)
  } else {
    return wrapEmails(line)
  }
}

export const wrapStrings = line => {
  const regex = /("|'|`)(.*?)\1/gim

  const assembled = []

  let rest = line

  line.replace(regex, (match, del, a, b, c) => {
    const [before, after] = rest.split(match)
    assembled.push(wrapUrls(before))
    assembled.push(span({ class: 'string' }, wrapUrls(match)))

    rest = after
  })

  assembled.push(wrapUrls(rest))

  if (rest === line) {
    return wrapWords(wrapUrls(line))
  }

  return assembled.map(ass => {
    if (typeof ass === 'string') {
      return wordsByLine(ass)
    } else {
      return ass
    }
  })
}

export const wordsByLine = line => {
  const idx = line.indexOf('//')
  const trimmed = line.trim()

  let [start, ...end] = line.split(/\/\//g)

  end = end.join('//')

  if (start && start.trim()) {
    start = wrapStrings(start)
  }

  if (end && end.trim()) {
    const indentIdx = line.search(/\S|$/)
    let indent = ''
    for (let i = 0; i < indentIdx; i++) {
      indent += ' '
    }

    end = span({ class: 'comment' }, [indent, '//', wrapLinks(end)])
  }

  return [start, end]
}

export const wrapLine = line => code({ class: 'line' }, wordsByLine(line))

export const format = content =>
  content
    .trim()
    .split('\n')
    .map(wrapLine)

export default { format }
