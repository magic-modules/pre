const keywords = `let this long package float
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
module exports require`

const builtins = `Array Object String Number RegExp Null Symbol
Set WeakSet Map WeakMap
setInterval setTimeout
Promise
JSON
Int8Array Uint8Array Uint8ClampedArray
Int16Array Uint16Array
Int32Array Uint32Array
Float32Array Float64Array`

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

const wordsByLine = line => {
  if (line.trim().startsWith('//')) {
    return code({ class: 'line comment' }, line)
  } else if (line.indexOf('://') > 2) {
    return line
      .split(' ')
      .map(word => (word.includes('://') ? Link({ to: word }, word) : wordsByLine(word)))
  } else if (line.includes('//')) {
    const lines = line.split('//')
    lines[0] = wordsByLine(lines[0])
    for (let i = 1; i < lines.length; i++) {
      lines[i] = code({ class: 'comment' }, `//${lines[i]}`)
    }
    return code({ class: 'line' }, lines)
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
  content.trim().split('\n').map(wrapLine)


module.exports = {
  keywords,
  builtins,
  format,
  wordsByLine,
  wrapWords,

}