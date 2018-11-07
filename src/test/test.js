const sort = require("../mergeSort");
const assert = require("assert");

function testMergeSort() {
  const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3, 23];
  const expected = [1, 2, 2, 3, 3, 3, 5, 6, 7, 8, 23];
  const result = sort.mergeSort(list);
  assert.deepEqual(result, expected);
}

testMergeSort();
