function sumArray(arr: (number | string)[]): void {
    let sum: number = 0;
    let text: string = "";
    let isNumberArray: boolean = true;

    for (const item of arr) {
        if (typeof item === "number") {
            sum += item;
        } else {
            text += item;
            isNumberArray = false; 
        }
    }

    if (isNumberArray) {
        console.log("Сума чисел:", sum);
    } else {
        console.log("Об'єднаний текст:", text);
    }
}

const numbersArray = [10, 20, 30, 40];
const stringsArray = ["10", "20", "30", "40"];

sumArray(numbersArray); 
//sumArray(stringsArray)




















/*function sumArray(arr: (number | string)[]): void {
    let sum: number = 0;
    let text: string = "";

    for (const item of arr) {
        if (typeof item === "number") {
            sum += item; 
        } else {
            text += item; 
        }
    };

    
        if (typeof arr === "number") {
            console.log("Сума чисел:", sum);
        } else {
            console.log("Об'єднаний текст:", text);
        }
    };


const numbersArray = [10, 20, 30, 40];
const stringsArray = ["10", "20", "30", "40"];

sumArray(numbersArray); 
//sumArray(stringsArray);*/