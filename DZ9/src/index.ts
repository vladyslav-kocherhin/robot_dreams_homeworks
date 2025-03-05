import { Dog, Cat, Wolf } from './animal';
import { Boiler } from './boiler';
import { Rectangle, Square } from './shape';
import { processEntity, interactWithHomeAnimal, interactWithWildAnimal } from './entity-processor';

// Виклик функції з різними екземплярами

const boiler = new Boiler();
const dog = new Dog('Рекс');
const cat = new Cat('Чіпс');
const wolf = new Wolf('Альфа');
const rectangle = new Rectangle(10, 5);
const square = new Square(4);

processEntity(boiler);
processEntity(rectangle);
processEntity(square);
interactWithHomeAnimal(dog);
interactWithHomeAnimal(cat);
interactWithWildAnimal(wolf);
