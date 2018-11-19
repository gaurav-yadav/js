async function taskRunner(concurrency) {
  let taskList = [];
  //populate tasts that return functions to run..
  let currJobexe = 0;

  async function run() {
    while (taskList.length > 0) {
      if (concurrency > currJobexe) {
        for (let i = 0; i < concurrency - currJobexe; i++) {
          currJobexe++;
          const x = taskList[0];
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

export async function init() {
  let t1 = await taskRunner(2);
  t1(done =>
    setTimeout(() => {
      console.log("i'm task 1 done");
      done();
    }, 2000)
  );
  t1(done =>
    setTimeout(() => {
      done(2), console.log("i'm task 2");
    }, 2000)
  );
  t1(done =>
    setTimeout(() => {
      done(3), console.log("i'm task 3");
    }, 2000)
  );
}
