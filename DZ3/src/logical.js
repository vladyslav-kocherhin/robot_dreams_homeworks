// Оголошення змінних різних типів
const number = 10;
const string = "10";
const booleanTrue = true;
const booleanFalse = false;

// Операції порівняння
console.log("Число == Рядок:", number == string); // Нестроге порівняння
console.log("Число === Рядок:", number === string); // Строге порівняння
console.log("Число > 5:", number > 5);
console.log("Число < 20:", number < 20);

// Логічні операції
console.log("true && false:", booleanTrue && booleanFalse);
console.log("true || false:", booleanTrue || booleanFalse);
console.log("!true:", !booleanTrue);
console.log("!false:", !booleanFalse);

// Комбіновані операції
console.log("(Число > 5) && (Число < 20):", (number > 5) && (number < 20));
console.log("(Число < 5) || (Рядок === '10'):", (number < 5) || (string === '10'));

