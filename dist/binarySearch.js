"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.binarySearch = binarySearch;
function binarySearch(list, value) {
  // initial values for start, middle and end
  var start = 0;
  var stop = list.length - 1;
  var middle = Math.floor((start + stop) / 2);

  // While the middle is not what we're looking for and the list does not have a single item
  while (list[middle] !== value && start < stop) {
    if (value < list[middle]) {
      stop = middle - 1;
    } else {
      start = middle + 1;
    }

    // recalculate middle on every iteration
    middle = Math.floor((start + stop) / 2);
  }

  // if the current middle item is what we're looking for return it's index, else return -1
  return list[middle] !== value ? -1 : middle;
}