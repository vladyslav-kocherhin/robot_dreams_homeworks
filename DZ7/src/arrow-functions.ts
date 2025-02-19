const newSumArray = (arr: (number | string)[]): void => {
    let sum: number = 0;
    let text: string = "";
    let isNumberArray: boolean = true;

    arr.forEach(item => {
        if (typeof item === "number") {
            sum += item;
        } else {
            text += item;
            isNumberArray = false; 
        }
    });

    isNumberArray 
        ? console.log("Сума чисел:", sum) 
        : console.log("Об'єднаний текст:", text);
};

// Створення двох масивів

const newNumbersArray = [10, 20, 30, 40];
const newStringsArray = ["10", "20", "30", "40"];

// Виклик функцій

newSumArray(newNumbersArray);
//newSumArray(newStringsArray); 