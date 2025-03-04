import { Dog, Cat } from './animal';
import { Boiler } from './boiler';
import { Rectangle, Square } from './shape';
import { processEntity } from './entity-processor';

// Виклик функції з різними екземплярами

const boiler = new Boiler();
const dog = new Dog('Buddy');
const cat = new Cat('Whiskers');
const rectangle = new Rectangle(10, 5);
const square = new Square(4);

processEntity(boiler);
processEntity(dog);
processEntity(cat);
processEntity(rectangle);
processEntity(square);
