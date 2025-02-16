async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Помилка: ${response.status}`);
        }
        const data = await response.json();
        console.log("Отримані дані:", data);
        return data;
    } catch (error) {
        console.error("Помилка при отриманні даних:", error.message);
        return null;
    }
}

async function fetchWithFallback() {
    const primaryUrl = "https://nonexistent.example.com/data";
    const fallbackUrl = "https://jsonplaceholder.typicode.com/posts/1";

    let data = await fetchData(primaryUrl);
    if (!data) {
        console.log("Спроба отримати дані з резервного ресурсу...");
        data = await fetchData(fallbackUrl);
        if (!data) {
            throw new Error("Обидва запити завершилися невдачею. Неможливо отримати дані.");
        }
    }
    console.log("Фінальні отримані дані:", data);
}

fetchWithFallback();
