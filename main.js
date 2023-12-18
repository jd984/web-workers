if (typeof Worker !== "undefined") {
  // Create a new web worker from the 'worker.js' file
  const worker = new Worker("worker.js");

  // Send a message to the worker
  worker.postMessage("Hello from the main thread!");

  // Receive messages from the worker
  worker.onmessage = function (event) {
    console.log("Message from the worker:", event.data);
  };

  // Handle errors from the worker
  worker.onerror = function (error) {
    console.error("Error in the worker:", error);
  };
} else {
  console.error("Web workers are not supported in this browser.");
}
