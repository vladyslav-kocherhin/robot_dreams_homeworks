function fetchData(url) {
    return fetch(url)
        .then((response) => response.json())
        .then((data) => {
            processData(data);
        })
        .catch((error) => {
            console.error("Помилка при отриманні даних:", error);
        });
}

function processData(data) {
    console.log("Оброблені дані:", data);
}

// Викликаємо функцію з правильним API

fetchData("https://catfact.ninja/fact");

// Викликаємо функцію з API який повертає 404 помилку

fetchData("https://httpstat.us/404");
