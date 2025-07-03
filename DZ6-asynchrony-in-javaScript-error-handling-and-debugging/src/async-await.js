async function fetchData(url) {
    const response = await fetch(url);
    const fetchedData = await response.json();
    return fetchedData;
}

async function processData(url) {
    const data = await fetchData(url);
    return console.log("Оброблені дані:", data);
}

// Викликаємо функцію з правильним API
await processData("https://catfact.ninja/fact");

// Викликаємо API який вертає 404 помилку
await processData("https://httpstat.us/404");
