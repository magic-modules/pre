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

npm install =>
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

export const commentRegex = /(\/\/)/gim
export const wordRegex = /( )/gim
export const stringRegex = /("|')(.*?)\1/gim


export default { keywords, builtins, booleans, commentRegex, wordRegex, stringRegex }
