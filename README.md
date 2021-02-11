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
use @magic npm org for dependency installs, instead of github

##### 0.0.3
* require node 13.5.0
* except array as input

##### 0.0.4
better string, comment and link handling.

##### 0.0.5
fix comment indents

#### 0.0.6
cleanup.

#### 0.0.7
* do not error on empty lines
* convert to Modules, no more lib functions.
* lib now exports keywords, builtins, booleans, regexes

#### 0.0.8
* bump required node version to 14.2.0
* no empty strings in keywords and builtins

#### 0.0.9
always textAlign: left

#### 0.0.10 
bump required node version to 14.15.4

##### 0.0.11
* update dependencies
* test html
* handle multiple strings in one line

##### 0.0.12 - unreleased
...
