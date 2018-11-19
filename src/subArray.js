export function subArray(arr, k) {
  const n = arr.length;
  let res = [];
  for (let i = 0; i < n; i++) {
    for (let grp = i; grp < n; grp++) {
      //first iteration group is one
      let temp = [];
      let oddCounter = 0;
      for (let j = i; j < grp; j++) {
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
  res=res.filter(x => x.length >0);
  console.log(res);

}
