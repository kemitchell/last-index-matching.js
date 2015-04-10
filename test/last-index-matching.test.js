var test = require('tap').test;
var last = require('..');

var greaterThan10 = function(argument) {
  return argument > 10;
};

test('finds the last matching element index', function(t) {
  t.test('when multiple elements match', function(t) {
    t.equal(last([20, 30, 40], greaterThan10), 2);
    t.end();
  });

  t.test('when just one element matches', function(t) {
    t.equal(last([1, 2, 11, 3], greaterThan10), 2);
    t.end();
  });

  t.test('when only the first element matches', function(t) {
    t.equal(last([11, 1, 2], greaterThan10), 0);
    t.end();
  });
});

test('returns -1', function(t) {
  t.test('when no elements match', function(t) {
    t.equal(last([1, 2], greaterThan10), -1);
    t.end();
  });

  t.test('when the array is empty', function(t) {
    t.equal(last([], greaterThan10), -1);
    t.end();
  });
});

test('type errors', function(t) {
  t.test('when null is passed', function(t) {
    t.plan(1);
    try {
      last(null, greaterThan10)
    } catch (e) {
      t.equal(e instanceof TypeError, true);
      return;
    }
    t.ok(false, 'should have thrown an exception');
  });

  t.test('when undefined is passed', function(t) {
    t.plan(1);
    try {
      last(undefined, greaterThan10)
    } catch (e) {
      t.equal(e instanceof TypeError, true);
      return;
    }
    t.ok(false, 'should have thrown an exception');
  });
});
