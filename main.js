document.getElementById("orderForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const service = document.getElementById("service").value;
  const link = document.getElementById("link").value;
  const quantity = document.getElementById("quantity").value;

  const responseDiv = document.getElementById("response");
  responseDiv.classList.remove("hidden");
  responseDiv.innerText = "Placing your order...";

  // Replace this with real SMMBin API Key
  const apiKey = "46dcdc08952d2622c447a75068ac199d5c9e91c8";

  const data = {
    key: apiKey,
    action: "add",
    service,
    link,
    quantity
  };

  try {
    const res = await fetch("https://smmbin.com/api/v2", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    });
    const result = await res.json();
    responseDiv.innerText = `✅ Order Placed! Order ID: ${result.order}`;
  } catch (error) {
    responseDiv.innerText = "❌ Failed to place order.";
  }
});
