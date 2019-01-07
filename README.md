## @magic-modules/pre

syntax highlighting for [@magic](https://magic.github.io/core)

#### install:
```bash
npm install --save-exact @magic-modules/pre
```

#### usage:

##### import:
```javascript
// assets/index.js:

const Pre = require('@magic-modules/pre')

module.exports = {
  //... other entries
  Pre,
}
```

##### use tag
```javascript
// in any component view
const component = {
  View: () => Pre('const name = true')
}
```