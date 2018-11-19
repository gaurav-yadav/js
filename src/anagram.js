export function anagramChecker(s, t) {
  s = s.split("");
  t = t.split("");
  let smap = new Map();
  s.forEach(s => {
    if (smap.has(s)) {
      let x = smap.get(s);

      x += 1;
      console.log(x, s);
      smap.set(s, x);
    } else {
      smap.set(s, 1);
    }
  });
  let isAna = true;
  t.forEach(t => {
    let x = smap.get(t);
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
