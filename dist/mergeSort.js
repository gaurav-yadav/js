"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeSort = mergeSort;
function mergeSort(arr) {
  if (arr.length === 1) {
    // return once we hit an array with a single item
    return arr;
  }

  var middle = Math.floor(arr.length / 2); // get the middle item of the array rounded down
  var left = arr.slice(0, middle); // items on the left side
  var right = arr.slice(middle); // items on the right side

  return merge(mergeSort(left), mergeSort(right));
}

// compare the arrays item by item and return the concatenated result
function merge(left, right) {
  var result = [];
  var indexLeft = 0;
  var indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}