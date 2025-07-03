// Оголошення змінних
const number = 15;
const isEven = number % 2 === 0;

// Проста розгалужена конструкція if
if (isEven) {
    console.log("Число є парним");
} else {
    console.log("Число є непарним");
}

// Розгалужена конструкція if-else if-else
if (number > 0 && number < 10) {
    console.log("Число є однозначним додатним");
} else if (number >= 10 && number < 100) {
    console.log("Число є двозначним додатним");
} else if (number <= 0) {
    console.log("Число є нулем або від’ємним");
} else {
    console.log("Число є тризначним або більше");
}
