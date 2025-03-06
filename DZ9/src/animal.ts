// Інтерфейс для домашніх тварин

interface IHomeAnimal {
    feed(): void;
    pet(): void;
}

// Інтерфейс для диких тварин

interface IWildAnimal {
    hunt(): void;
}

// Базовий клас тварин

abstract class Animal {
    public constructor(protected name: string) {}

    public abstract makeSound(): void;
}

// Клас для собаки (домашня тварина)

class Dog extends Animal implements IHomeAnimal {
    public makeSound(): void {
        console.log(`${this.name} гавкає: Гав-гав!`);
    }

    public feed(): void {
        console.log(`${this.name} їсть корм.`);
    }

    public pet(): void {
        console.log(`${this.name} радіє, коли його гладять.`);
    }
}

// Клас для кота (домашня тварина)

class Cat extends Animal implements IHomeAnimal {
    public makeSound(): void {
        console.log(`${this.name} гавкає: Гав-гав!`);
    }

    public feed(): void {
        console.log(`${this.name} їсть корм.`);
    }

    public pet(): void {
        console.log(`${this.name} радіє, коли його гладять.`);
    }
}

// Клас для вовка (дика тварина)

class Wolf extends Animal implements IWildAnimal {
    public makeSound(): void {
        console.log(`${this.name} виє: Аууууу!`);
    }

    public hunt(): void {
        console.log(`${this.name} полює в лісі.`);
    }
}

export { IHomeAnimal, IWildAnimal, Animal, Dog, Cat, Wolf };
