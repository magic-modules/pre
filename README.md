## @magic-modules/pre

syntax highlighting for [@magic](https://magic.github.io/core)


[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[npm-image]: https://img.shields.io/npm/v/@magic-modules/pre.svg
[npm-url]: https://www.npmjs.com/package/@magic-modules/pre
[travis-image]: https://img.shields.io/travis/com/magic-modules/pre/master
[travis-url]: https://travis-ci.com/magic-modules/pre
[appveyor-image]: https://img.shields.io/appveyor/ci/magicmodules/pre/master.svg
[appveyor-url]: https://ci.appveyor.com/project/magicmodules/pre/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic-modules/pre/badge.svg
[coveralls-url]: https://coveralls.io/github/magic-modules/pre
[greenkeeper-image]: https://badges.greenkeeper.io/magic-modules/pre.svg
[greenkeeper-url]: https://badges.greenkeeper.io/magic-modules/pre.svg
[snyk-image]: https://snyk.io/test/github/magic-modules/pre/badge.svg
[snyk-url]: https://snyk.io/test/github/magic-modules/pre

#### install:
```bash
npm install --save-exact @magic-modules/pre
```

#### usage:
```javascript
// in any component view
const component = {
  View: () => Pre('const name = true')
}
```

#### changelog
##### 0.0.1
first commit

##### 0.0.2
use @magic npm org for installs, instead of github
