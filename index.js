console.log("ji");
const fs = require("fs");
//const { promisify } = require("util");
const util = require("util");

//cosnt readFile= promisify(fs.readfile);
fs.readFileAsync = util.promisify(fs.readFile);

async function getname(word, count) {
  // let d;
  const dict = JSON.parse(await fs.readFileAsync("./dictionary.js", "utf8"));

  //console.log(dict);
  // d = JSON.parse(dict);
  //console.log(typeof dict, typeof word);
  console.log(word);
  console.log(dict.word);
  console.log(dict[word], "op", count);
  return 1;
}
async function test() {
  getname("quinze", 1);
  getname("uniclinal", 2);
  const x = await getname("quinze", 3);
  //console.log();
  getname("quinze", 5);
  getname("uniclinal", 6);
  getname("quinze", 7);
  getname("leucic", 8);
  getname("bathos", x);
}

function getPowerSet(str) {
  var obj = {};
  //This loop is to take out all duplicate number/letter
  for (var i = 0; i < str.length; i++) {
    obj[str[i]] = true;
  }
  //variable array will have no duplicates
  var array = Object.keys(obj);
  var result = [[]];
  for (var i = 0; i < array.length; i++) {
    //this line is crucial! It prevents us from infinite loop
    var len = result.length;
    for (var x = 0; x < len; x++) {
      result.push(result[x].concat(array[i]));
    }
  }
  return result;
}

function multiply(n, number) {
  let res;
  let memo = [];
  let counter = 0;
  for (let i = 0; i <= n; i++) {
    memo[i] = 0;
  }
  const mul = (n, number) => {
    counter += 1;
    console.log(counter, "stack call");
    if (n === 0) return 0;
    if (n === 1) return number;
    if (memo[n] === 0) {
      memo[n] = number + mul(n - 1, number);
    } else {
      console.log("from memory");
      return memo[n];
    }

    return memo[n];
  };
  return mul(n, number);
  // return res;
}
//console.log(getPowerSet("gaurav"));
console.log(multiply(1345643, 14567845));
