"use strict";

var sort = require("./mergeSort");
var search = require("./binarySearch");
var assert = require("assert");
var subArray = require("./subArray");
var lcs = require("./lcs");
console.log("-x-");
var fs = require("fs");
//const { promisify } = require("util");
var util = require("util");
var bst = require("./BST");
var p = require("./parenthesis");
var can = require("./cancellation");
var ana = require("./anagram");
var freq = require("./frequentkele");
var m = require("./multiply");
m.init();

//freq.frequentk("2323423423232228942783648752376298");

//ana.anagramChecker("testt", "testts");

// const parenthesisInput = "()(()))))";
// p.parrenthesisChecker(parenthesisInput);
// const cancellationData = {
//   cancellable: "true",
//   cancellationCharges: {
//     entry: [
//       {
//         key: "4",
//         value: "10.10"
//       },
//       {
//         key: "8",
//         value: "10.20"
//       },
//       {
//         key: "18",
//         value: "10.40"
//       }
//     ]
//   },
//   fares: {
//     entry: [
//       {
//         key: "4",
//         value: "105.00"
//       },
//       {
//         key: "8",
//         value: "105.00"
//       },
//       {
//         key: "18",
//         value: "105.00"
//       }
//     ]
//   },
//   freeCancellationTime: "0",
//   partiallyCancellable: "false",
//   serviceCharge: "0",
//   tatkalTime: "0"
// };

// const singleSeatCancellation = {
//   cancellable: "true",
//   cancellationCharges: { entry: { key: "9", value: "10.00" } },
//   fares: { entry: { key: "9", value: "105.00" } },
//   freeCancellationTime: "0",
//   partiallyCancellable: "true",
//   serviceCharge: "0",
//   tatkalTime: "0"
// };
// can.transformCancellationDetails(cancellationData, [4, 8], 3);
//cosnt readFile= promisify(fs.readfile);
//
//let list = [2, 5, 1, 3, 4, 5];
//subArray.subArray(list,2);
//console.log(sort.mergeSort(list)); // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]
//list = sort.mergeSort(list);
//console.log(search.binarySearch(list, 7));
//console.log(x);
//console.log(getPowerSet("gaurav"));
//console.log(multiply(1345643, 14567845));
// const tree = new bst.BinarySearchTree();
// tree.insert(9);
// tree.insert(4);
// tree.insert(6);
// tree.insert(20);
// tree.insert(170);
// tree.insert(15);
// tree.insert(1);
// tree.remove(170);
// console.log(JSON.stringify(bst.traverse(tree.root)));

// const str1 = "AGGTAB";
// const str2 = "GXTXAYB";
// const m = str1.length;
// const n = str2.length;
// console.log(lcs.ll(str1, str2, m, n));