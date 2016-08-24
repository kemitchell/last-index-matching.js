Find the index of the last element matching a predicate.

```javascript
var last = require('last-index-matching')
var assert = require('assert')

var greaterThan10 = function(argument) {
  return argument > 10
}

assert(last([20, 30, 40], greaterThan10) === 2)

assert(last([1, 2, 11, 3], greaterThan10) === 2)

assert(last([11, 1, 2], greaterThan10) === 0)

assert(last([1, 2], greaterThan10) === -1)

assert(last([], greaterThan10) === -1)

assert.throws(function () {
  last(null, greaterThan10)
}, TypeError)

assert.throws(function () {
  last(undefined, greaterThan10)
}, TypeError)
```
