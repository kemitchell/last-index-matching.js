module.exports = function(iterable, predicate) {
  if (iterable === undefined || iterable === null) {
    throw new TypeError();
  }
  var index = iterable.length;
  while (index--) {
    if (predicate(iterable[index])) {
      return index;
    }
  }
  return -1;
};

module.exports.version = '1.0.0';
