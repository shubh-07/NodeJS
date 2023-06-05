const { Worker, isMainThread } = require("worker_threads");
const path = require("path");
let startMainTime = Date.now();
let w1Time, w2Time;

console.log("Worker 1 and Main thread perform same task, and Worker 2 performs both Main & Worker 1 tasks.")

if (isMainThread) {
    console.log("Inside Main thread\n");
}

console.log("Initializing Worker Threads.\n");
const w1 = new Worker(path.join(__dirname, "worker1.js"));
const w2 = new Worker(path.join(__dirname, "worker2.js"));

let dataObj = { id: 1, start: 0, x: 90000, y: 90000 };
w1.postMessage(dataObj);
w2.postMessage(dataObj);


console.log("Starting Computational Task in main thread.\n")
let startTime = Date.now();
// Perform a computationally expensive task
for (let i = 0; i <= dataObj.x; i++) {
    for (let j = 0; j <= dataObj.y; j++) {
        result = i + j;
    }
}
let endTime = Date.now();
let timeToExecuteMainThread = endTime - startTime
console.log("\n Main Thread computation complete in", timeToExecuteMainThread);
w1.on("message", (msg) => {
    console.log("\n Message from worker 1", msg);
    w1Time = msg.TotalTime;
});

w2.on("message", (msg) => {
    console.log("\n Message from worker 2", msg);
    w2Time = msg.TotalTime;
    console.log(`\n When a computationally expensive task is performed in single file it took ${w2Time}`);
    console.log(`& when the same task is divided into two files and performed using worker threads, It took ${timeToExecuteMainThread}, ${w1Time} time.`)
    let endMainTime = Date.now();
    console.log("\n\nTotal time ", endMainTime - startMainTime)
});

