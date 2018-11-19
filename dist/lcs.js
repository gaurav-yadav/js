"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ll = ll;
function max(x, y) {
  return x > y ? x : y;
}
function ll(x, y, m, n) {
  var res = [];
  lcs(x, y, m, n);
  console.log(res);
  function lcs(x, y, m, n) {
    // console.log(m, n);
    if (m === 0 || n === 0) {
      return 0;
    }

    if (x.charAt(m - 1) === y.charAt(n - 1)) {
      res.push(m);
      return 1 + lcs(x, y, m - 1, n - 1);
    } else {
      return max(lcs(x, y, m, n - 1), lcs(x, y, m - 1, n));
    }
  }
}