"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;
async function taskRunner(concurrency) {
  var taskList = [];
  //populate tasts that return functions to run..
  var currJobexe = 0;

  async function run() {
    while (taskList.length > 0) {
      if (concurrency > currJobexe) {
        for (var i = 0; i < concurrency - currJobexe; i++) {
          currJobexe++;
          var x = taskList[0];
          console.log("executing job");
          taskList.shift();
          x(done);
        }
      } else {
        //console.log("queue is full");
      }
    }
  }
  function done(x) {
    currJobexe--;
    console.log(" task complete", x);
  }
  return async function addTask(task) {
    console.log("Adding task", taskList);
    taskList.push(task);
    //const x = taskList[0];
    run();
  };
}

async function init() {
  var t1 = await taskRunner(2);
  t1(function (done) {
    return setTimeout(function () {
      console.log("i'm task 1 done");
      done();
    }, 2000);
  });
  t1(function (done) {
    return setTimeout(function () {
      done(2), console.log("i'm task 2");
    }, 2000);
  });
  t1(function (done) {
    return setTimeout(function () {
      done(3), console.log("i'm task 3");
    }, 2000);
  });
}