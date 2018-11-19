"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.frequentk = frequentk;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function frequentk(number) {
  number = number.split("");
  var smap = new Map();
  number.forEach(function (s) {
    if (smap.has(s)) {
      var x = smap.get(s);

      x += 1;
      console.log(x, s);
      smap.set(s, x);
    } else {
      smap.set(s, 1);
    }
  });
  console.log(smap);
  var freqmapArr = [].concat(_toConsumableArray(smap));
  function compare(_ref, _ref2) {
    var _ref4 = _slicedToArray(_ref, 2),
        ak = _ref4[0],
        av = _ref4[1];

    var _ref3 = _slicedToArray(_ref2, 2),
        bk = _ref3[0],
        bv = _ref3[1];

    console.log(av, bv, "checking");
    if (av > bv) return -1;
    if (av < bv) return 1;
    return 0;
  }
  console.log("fa", freqmapArr);
  freqmapArr.sort(compare);
  console.log(freqmapArr, "f");
}