import { IWaterHeater } from './i-water-heater';
import { Animal } from './animal';
import { Boiler } from './boiler';
import { Shape } from './shape';
import { IHomeAnimal, IWildAnimal } from './animal';

// Функція, що працює з будь-яким об'єктом, який реалізує інтерфейс

function processEntity(entity: IWaterHeater | Animal | Shape): void {
    if (entity instanceof Boiler) {
        entity.heatWater();
    } else if (entity instanceof Animal) {
        entity.makeSound();
    } else if (entity instanceof Shape) {
        console.log('Area:', entity.getArea());
    }
}

// Функція для домашніх тварин

function interactWithHomeAnimal(animal: IHomeAnimal): void {
    animal.makeSound();
    animal.feed();
    animal.pet();
}

// Функція для диких тварин

function interactWithWildAnimal(animal: IWildAnimal): void {
    animal.makeSound();
    animal.hunt();
}

export { processEntity, interactWithHomeAnimal, interactWithWildAnimal };
