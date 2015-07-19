last-index-matching.js
======================

[![NPM version](https://img.shields.io/npm/v/last-index-matching.svg)](https://www.npmjs.com/package/last-index-matching)
[![build status](https://img.shields.io/travis/kemitchell/last-index-matching.js.svg)](http://travis-ci.org/kemitchell/last-index-matching.js)

Find the index of the last element matching a predicate.

```javascript
var last = require('last-index-matching');

var greaterThan10 = function(argument) {
  return argument > 10;
};

last([20, 30, 40], greaterThan10); // => 2

last([1, 2, 11, 3], greaterThan10); // => 2

last([11, 1, 2], greaterThan10); // => 0

last([1, 2], greaterThan10); // => -1

last([], greaterThan10); // => -1

try {
  last(null, greaterThan10);
} catch (error) {
  error instanceof TypeError; // => true
}

try {
  last(undefined, greaterThan10);
} catch (error) {
  error instanceof TypeError; // => true
}

```
