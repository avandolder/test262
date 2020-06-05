//
//

/*---
esid: pending
description: Shadow map.prototype.next doesn't affect already started iterations.
info:
---*/

const iterator = [1, 2].values();
const mappedIterator = iterator.map(x => x * 2);
const mapPrototype = Iterator.prototype.map.prototype;

const expected = [2, 4];

for (const item of mappedIterator) {
  mapPrototype.next = () => { return { done: true, value: undefined }; };

  assert.sameValue(expected.shift(), item);
}

for (const item of mappedIterator) {
}

if (typeof reportCompare == 'function')
  reportCompare(0, 0);
