export function init() {
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
  let obj = {
    a: 1,
    b: 2,
    setValues: function(a, b) {
      this.a = a;
      this.b = b;
    },
    addstuff: function(a, b, c, d) {
      console.log(a + b + c + d, "sum");
    }
  };
  let x = curry(obj.addstuff, obj, 16, 2);
  x();
  x(2)(3);
}

function curryMultiply(numberArgs, ...args) {
  return function fn(...innerArgs) {
    args = args.concat(innerArgs);
    if (args.length >= numberArgs) {
      return args.reduce((res, a) => res * a, 1);
    }
    console.log("I can eat more ", ...args);
    return fn;
  };
}

function curry(func, thisArg, ...args) {
  return function fn(...innerArgs) {
    args = args.concat(innerArgs);
    if (args.length >= func.length) {
      return func.apply(thisArg, args);
    }
    console.log("I can eat more ", ...args);
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
