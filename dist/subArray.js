"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subArray = subArray;
function subArray(arr, k) {
  var n = arr.length;
  var res = [];
  for (var i = 0; i < n; i++) {
    for (var grp = i; grp < n; grp++) {
      //first iteration group is one
      var temp = [];
      var oddCounter = 0;
      for (var j = i; j < grp; j++) {
        if (arr[j] % 2 != 0) {
          oddCounter++;
          console.log("got odd", arr[j]);
        }
        if (oddCounter <= k) {
          temp.push(arr[j]);
        } else {
          console.log("OC exceeded");
          temp = [];
          continue;
        }
      }
      res.push(temp);
    }
  }
  res = res.filter(function (x) {
    return x.length > 0;
  });
  console.log(res);
}