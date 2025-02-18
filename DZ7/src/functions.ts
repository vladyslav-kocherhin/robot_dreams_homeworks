function sumArray(arr: (number | string)[]): void {
    let sum: number = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]); 
    }
    console.log(sum);
}

const numbersArray: number[] = [10, 20, 30, 40];
const stringsArray: string[] = ["10", "20", "30", "40"];

sumArray(numbersArray); 
sumArray(stringsArray); 