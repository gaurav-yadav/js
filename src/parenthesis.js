export function parrenthesisChecker(input) {
  let inputarr = input.split("");
  //console.log(inputarr);
  let stack = [];
  let maxlen = 0;
  let counter = 0;
  let j = 0;
  for (let i = 0; i < inputarr.length; i++) {
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


