// Функція, яка приймає масив і повертає суму

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
}

// Створення двох масивів

const numbersArray = [10, 20, 30, 40];
const stringsArray = ["10", "20", "30", "40"];

// Виклик функцій

sumArray(numbersArray);
sumArray(stringsArray);

