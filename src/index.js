const sort = require("./mergeSort");
const search = require("./binarySearch");
const assert = require("assert");
console.log("-x-");
const fs = require("fs");
//const { promisify } = require("util");
const util = require("util");

//cosnt readFile= promisify(fs.readfile);
//
let list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3, 233];
//console.log(sort.mergeSort(list)); // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]
list = sort.mergeSort(list);
console.log(search.binarySearch(list, 7));
//console.log(x);
//console.log(getPowerSet("gaurav"));
//console.log(multiply(1345643, 14567845));
