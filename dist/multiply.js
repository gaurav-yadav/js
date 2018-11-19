"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function init() {
  // const multiplyby4 = multiplyBy(4);
  // const res = multiplyby4(5);
  // const multiplyby6 = multiplyBy(6);
  // multiplyby6(4);
  // const multiplyByF5 = multiplyByF(5);
  // const multiplyByF5M6 = multiplyByF5(6);
  // const res = multiplyByF5M6(8);
  // console.log(res);
  // let f = curryMultiply(5);
  // console.log(f(2)(3, 4)(4)(3));
  var obj = {
    a: 1,
    b: 2,
    setValues: function setValues(a, b) {
      this.a = a;
      this.b = b;
    },
    addstuff: function addstuff(a, b, c, d) {
      console.log(a + b + c + d, "sum");
    }
  };
  var x = curry(obj.addstuff, obj, 16, 2);
  x();
  x(2)(3);
}

function curryMultiply(numberArgs) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return function fn() {
    var _console;

    for (var _len2 = arguments.length, innerArgs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      innerArgs[_key2] = arguments[_key2];
    }

    args = args.concat(innerArgs);
    if (args.length >= numberArgs) {
      return args.reduce(function (res, a) {
        return res * a;
      }, 1);
    }
    (_console = console).log.apply(_console, ["I can eat more "].concat(_toConsumableArray(args)));
    return fn;
  };
}

function curry(func, thisArg) {
  for (var _len3 = arguments.length, args = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    args[_key3 - 2] = arguments[_key3];
  }

  return function fn() {
    var _console2;

    for (var _len4 = arguments.length, innerArgs = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      innerArgs[_key4] = arguments[_key4];
    }

    args = args.concat(innerArgs);
    if (args.length >= func.length) {
      return func.apply(thisArg, args);
    }
    (_console2 = console).log.apply(_console2, ["I can eat more "].concat(_toConsumableArray(args)));
    return fn;
  };
}

// const multiply1 = (...args) =>
//   args.length < 3
//     ? multiply1.bind(null, ...args)
//     : args.reduce((a, b) => {
//         console.log(a, " <->", b);
//         return a * b;
//       });
// console.log(multiply1(2, 3, 4, 5, 6, 8, 3));
// console.log(multiply1(2, 3)(4));
// console.log(multiply1(2)(3)(4));
// console.log(multiply1(2)(3, 4));