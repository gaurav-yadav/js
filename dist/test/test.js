"use strict";

var sort = require("../mergeSort");
var assert = require("assert");

function testMergeSort() {
  var list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3, 23];
  var expected = [1, 2, 2, 3, 3, 3, 5, 6, 7, 8, 23];
  var result = sort.mergeSort(list);
  assert.deepEqual(result, expected);
}

testMergeSort();