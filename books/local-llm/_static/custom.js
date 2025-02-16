console.log("Custom JS loaded!");
async function testLocalServer() {
  const serverUrl = "http://localhost:11434/api/generate"; // Update with your server URL
  var model = "hf.co/bartowski/Llama-3.2-1B-Instruct-GGUF:Q6_K_L";
  const payload = {
    model: model,
    prompt: "why do we need local efficient large language models?",
  };

  try {
    // Send POST request to the local server
    const response = await fetch(serverUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    console.log("Response from local server:", data);
  } finally {
    console.log("Error in connecting to the local server");
  }
}

// Automatically run the function when the page loads
window.addEventListener("DOMContentLoaded", testLocalServer);
