// This function runs in the web worker
onmessage = function (event) {
  console.log("Message received in the worker:", event.data);

  // Simulate a time-consuming task
  const result = simulateTimeConsumingTask();

  // Send the result back to the main thread
  postMessage(result);
};

// Simulate a time-consuming task
function simulateTimeConsumingTask() {
  let sum = 0;
  for (let i = 0; i < 100000000; i++) {
    sum += i;
  }
  return sum;
}
