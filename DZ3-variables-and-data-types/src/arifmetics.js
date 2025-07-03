// Оголошення змінних різних типів
const number1 = 10;
const number2 = 5;
const text1 = "Hello";
const text2 = "World";
const isTrue = true;
const isFalse = false;
let undefinedVar;
const nullVar = null;

// Арифметичні операції з числами
console.log("Додавання чисел:", number1 + number2);
console.log("Віднімання чисел:", number1 - number2);
console.log("Множення чисел:", number1 * number2);
console.log("Ділення чисел:", number1 / number2);

// Операції з рядками
console.log("Конкатенація рядків:", text1 + " " + text2);

// Операції між різними типами
console.log("Число + Рядок:", number1 + text1);
console.log("Число + Булеве значення (true):", number1 + isTrue);
console.log("Число + Булеве значення (false):", number1 + isFalse);
console.log("Число + undefined:", number1 + undefinedVar);
console.log("Число + null:", number1 + nullVar);
console.log("Рядок + Булеве значення:", text1 + isFalse);
