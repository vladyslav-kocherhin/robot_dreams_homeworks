async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    processData(data);
}

async function processData(data) {
    console.log("Оброблені дані:", data);
}

// Викликаємо функцію з правильним API
fetchData("https://catfact.ninja/fact");

// Викликаємо API який вертає 404 помилку
fetchData("https://httpstat.us/404");
