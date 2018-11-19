"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parrenthesisChecker = parrenthesisChecker;
function parrenthesisChecker(input) {
  var inputarr = input.split("");
  //console.log(inputarr);
  var stack = [];
  var maxlen = 0;
  var counter = 0;
  var j = 0;
  for (var i = 0; i < inputarr.length; i++) {
    if (inputarr[i] === "(") {
      stack.push(inputarr[i]);
      j++;
      // maxlen = counter > maxlen ? counter : maxlen;
      //counter = 0;
    } else {
      if (inputarr[i] === ")" && stack[--j] === "(") {
        counter += 2;
        maxlen = counter > maxlen ? counter : maxlen;
      } else {
        //nothing to pop reset counter
        counter = 0;
      }
    }
  }
  console.log(maxlen);
}