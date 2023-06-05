
const { parentPort } = require("worker_threads");

console.log(`Worker 1 Started`);
parentPort.on("message", (data) => {
    let startTime = Date.now();

    // Perform a computationally expensive task
    let result = 0;
    for (let i = data.start; i <= data.x; i++) {
        // console.log(i);
        for (let j = data.start; j <= data.y; j++) {
            result = i + j;
        }
    }
    let endTime = Date.now();
    parentPort.postMessage({ TotalTime: endTime - startTime });
});