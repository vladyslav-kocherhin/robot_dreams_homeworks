// Оголошення змінних
const number = 15;
let category;

// Визначення категорії числа
if (number > 0 && number < 10) {
    category = "single-digit positive";
} else if (number >= 10 && number < 100) {
    category = "double-digit positive";
} else if (number <= 0) {
    category = "zero or negative";
} else {
    category = "three-digit or more";
}

// Використання switch для розгалуження
switch (category) {
    case "single-digit positive":
        console.log("Число є однозначним додатним");
        break;
    case "double-digit positive":
        console.log("Число є двозначним додатним");
        break;
    case "zero or negative":
        console.log("Число є нулем або від’ємним");
        break;
    case "three-digit or more":
        console.log("Число є тризначним або більше");
        break;
    default:
        console.log("Невідома категорія числа");
}
