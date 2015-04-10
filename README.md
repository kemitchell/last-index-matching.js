last-index-matching.js
======================

[![NPM version](https://img.shields.io/npm/v/last-index-matching.svg)](https://www.npmjs.com/package/last-index-matching)
[![build status](https://img.shields.io/travis/kemitchell/last-index-matching.js.svg)](http://travis-ci.org/kemitchell/last-index-matching.js)

Find the index of the last element matching a predicate.

```javascript
var lastIndexMatching = require('last-index-matching');

var greaterThan10 = function(argument) {
  return argument > 10;
};

lastIndexMatching([0, 1, 10], greaterthan10); // => 2
```
