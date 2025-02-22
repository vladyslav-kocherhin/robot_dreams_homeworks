function sumArray(arr: number[] | string[]): void {
    if (arr.length === 0) {
    console.log("Масив порожній.");
    return;
    }
    if (typeof arr[0] === "number") {
    const sum = (arr as number[]).reduce((acc, num) => acc + num, 0);
    console.log("Сума чисел:", sum);
    } else {
    const text = (arr as string[]).join("");
    console.log("Об'єднаний текст:", text);
    }
}

const numbersArray = [10, 20, 30, 40];
const stringsArray = ["10", "20", "30", "40"];



//sumArray(numbersArray); 
sumArray(stringsArray)