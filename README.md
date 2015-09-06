# is-css-property
[![NPM version](https://badge.fury.io/js/is-css-property.svg)](https://badge.fury.io/js/is-css-property) [![Build Status](https://travis-ci.org/dustinspecker/is-css-property.svg)](https://travis-ci.org/dustinspecker/is-css-property) [![Coverage Status](https://img.shields.io/coveralls/dustinspecker/is-css-property.svg)](https://coveralls.io/r/dustinspecker/is-css-property?branch=master)

[![Code Climate](https://codeclimate.com/github/dustinspecker/is-css-property/badges/gpa.svg)](https://codeclimate.com/github/dustinspecker/is-css-property) [![Dependencies](https://david-dm.org/dustinspecker/is-css-property.svg)](https://david-dm.org/dustinspecker/is-css-property/#info=dependencies&view=table) [![DevDependencies](https://david-dm.org/dustinspecker/is-css-property/dev-status.svg)](https://david-dm.org/dustinspecker/is-css-property/#info=devDependencies&view=table)

> Determine if a string is a valid CSS property

*Uses [just-css-properties](https://github.com/blakeembrey/just-css-properties) for CSS properties list*

## Install
```
npm install --save is-css-property
```

## Usage
### ES2015
```javascript
import isCssProperty from 'is-css-property';

isCssProperty('lincoln');
// => false

isCssProperty('float');
// => true
```

### ES5
```javascript
var isCssProperty = require('is-css-property');

isCssProperty('lincoln');
// => false

isCssProperty('float');
// => true
```

## LICENSE
MIT © [Dustin Specker](https://github.com/dustinspecker)