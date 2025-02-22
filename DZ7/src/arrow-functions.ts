const newSumArray = (arr: number[] | string[]): void => {
    if (arr.length === 0) {
        console.log("Масив порожній.");
        return;
    }

    typeof arr[0] === "number"
        ? console.log("Сума чисел:", (arr as number[]).reduce((acc, num) => acc + num, 0))
        : console.log("Об'єднаний текст:", (arr as string[]).join(""));
};

// Створення двох масивів

const newNumbersArray = [10, 20, 30, 40];
const newStringsArray = ["10", "20", "30", "40"];

// Виклик функцій

//newSumArray(newNumbersArray);
newSumArray(newStringsArray); 