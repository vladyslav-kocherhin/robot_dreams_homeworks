// Створення масивів різних типів

const stringArray = ["яблуко", "банан", "вишня"];
const numberArray = [10, 20, 30, 40];
const booleanArray = [true, false, true, false];
const mixedArray = ["текст", 25, true, 35, false, "влад"];


// Додавання значень в масив

stringArray.push("апельсин");
console.log(stringArray);

numberArray.push(50);
console.log(numberArray);

booleanArray.push(true);
console.log(booleanArray);

mixedArray.push("тест");
console.log(mixedArray);

// Фільтрування масиву

const filteredArray1 = stringArray.filter((el) => typeof el === 'string');
console.log(filteredArray1);

const filteredArray2 = numberArray.filter((el) => typeof el === 'number');
console.log(filteredArray2);

const filteredArray3 = booleanArray.filter((el) => typeof el === 'boolean');
console.log(filteredArray3);

const filteredArray4 = mixedArray.filter((el) => typeof el === 'number');
console.log(filteredArray4);

// Пошук першого відповідного елементу в масиві

const foundElement1 = stringArray.find((el) => typeof el === 'string');
console.log(foundElement1);

const foundElement2 = numberArray.find((el) => typeof el === 'number');
console.log(foundElement2);

const foundElement3 = booleanArray.find((el) => typeof el === 'boolean');
console.log(foundElement3);

const foundElement4 = mixedArray.find((el) => typeof el === 'number');
console.log(foundElement4);

// Фільтрування масиву за допомогою функції

function isString(el) {
    return typeof el === 'string';
}

const filterStrings1 = stringArray.filter((el) => isString(el));
console.log(filterStrings1);

function isNumber(el) {
    return typeof el === 'number';
}

const filterNumbers = numberArray.filter((el) => isNumber(el));
console.log(filterNumbers);

function isBoolean(el) {
    return typeof el === 'boolean';
}

const filterBoolean = booleanArray.filter((el) => isBoolean(el));
console.log(filterBoolean);

const filterMixed = mixedArray.filter((el) => isString(el));
console.log(filterMixed);

// Просте сортування массиву

const sortedArray1 = stringArray.sort();
console.log(sortedArray1);

const sortedArray2 = numberArray.sort();
console.log(sortedArray2);

const sortedArray3 = booleanArray.sort();
console.log(sortedArray3);

const sortedArray4 = mixedArray.sort();
console.log(sortedArray4);

// Cортування массиву чисел від меншого до більшого

const sortedNumberArray = numberArray.sort((a, b) => a - b);
console.log(sortedNumberArray);

// Cортування массиву чисел від більшого до меншого

const sortedNumberArray2 = numberArray.sort((a, b) => b - a);
console.log(sortedNumberArray2);

// Виділення з масиву методів визначеного типу за допомогою методу forEach

const arrNumbers = [];
mixedArray.forEach((el, i) => {
    if (typeof el === 'number') {
        arrNumbers.push(el);
        console.log(i);
    }
});

console.log(arrNumbers);

const arrStrings = [];
mixedArray.forEach((el, i) => {
    if (typeof el === 'string') {
        arrStrings.push(el);
        console.log(i);
    }
});

console.log(arrStrings);

const arrBooleans = [];
mixedArray.forEach((el, i) => {
    if (typeof el === 'boolean') {
        arrBooleans.push(el);
        console.log(i);
    }
});

console.log(arrBooleans);

// Використання методу map

const arrNumbers2 = mixedArray.map((el) => {
    if (typeof el === 'number') {
        return 'number';
    }
    return null;
});
console.log(arrNumbers2);
