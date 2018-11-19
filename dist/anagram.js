"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.anagramChecker = anagramChecker;
function anagramChecker(s, t) {
  s = s.split("");
  t = t.split("");
  var smap = new Map();
  s.forEach(function (s) {
    if (smap.has(s)) {
      var x = smap.get(s);

      x += 1;
      console.log(x, s);
      smap.set(s, x);
    } else {
      smap.set(s, 1);
    }
  });
  var isAna = true;
  t.forEach(function (t) {
    var x = smap.get(t);
    if (x > 0) {
      //found it decrease and continue
      x -= 1;
      smap.set(t, x);
    } else {
      isAna = false;
    }
  });
  console.log(isAna);
}