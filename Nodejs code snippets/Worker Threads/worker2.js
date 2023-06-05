const { parentPort } = require("worker_threads");

console.log(`\n Worker 2 Started`);
parentPort.on("message", (data) => {
    let startTime = Date.now();

    // Perform a computationally expensive task
    for (let i = data.start; i <= data.x; i++) {
        for (let j = data.start; j <= data.y; j++) {
            result = i + j;
        }
    }
    for (let i = data.start; i <= data.x; i++) {
        for (let j = data.start; j <= data.y; j++) {
            result = i + j;
        }
    }

    let endTime = Date.now();
    parentPort.postMessage({ TotalTime: endTime - startTime });
})