import { IWaterHeater } from './i-water-heater';
import { Animal } from './animal';
import { Boiler } from './boiler';
import { Shape } from './shape';

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

export { processEntity };
