export function frequentk(number) {
  number = number.split("");
  let smap = new Map();
  number.forEach(s => {
    if (smap.has(s)) {
      let x = smap.get(s);

      x += 1;
      console.log(x, s);
      smap.set(s, x);
    } else {
      smap.set(s, 1);
    }
  });
  console.log(smap);
  let freqmapArr = [...smap];
  function compare([ak, av], [bk, bv]) {
    console.log(av, bv, "checking");
    if (av > bv) return -1;
    if (av < bv) return 1;
    return 0;
  }
  console.log("fa", freqmapArr);
  freqmapArr.sort(compare);
  console.log(freqmapArr, "f");
}
