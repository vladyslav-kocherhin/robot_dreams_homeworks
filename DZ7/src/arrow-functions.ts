// Стрілкова функція, яка приймає масив чисел і повертає суму його елементів

const newSumArray = (arr: (number | string)[]): void => {
    let sum: number = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]); 
    }
    console.log(sum);
};

// Створення двох масивів

const newNumbersArray: number[] = [10, 20, 30, 40];
const newStringsArray: string[] = ["10", "20", "30", "40"];

// Виклик функцій

newSumArray(newNumbersArray);
newSumArray(newStringsArray); 