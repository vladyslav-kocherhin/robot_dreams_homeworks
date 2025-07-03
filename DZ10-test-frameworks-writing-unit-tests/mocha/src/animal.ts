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

    public abstract makeSound(): string;
}

// Клас для собаки (домашня тварина)

class Dog extends Animal implements IHomeAnimal {
    public makeSound(): string {
        return `${this.name} гавкає: Гав-гав!`;
    }

    public feed(): string {
        return `${this.name} їсть корм.`;
    }

    public pet(): string {
        return `${this.name} радіє, коли його гладять.`;
    }
}

// Клас для кота (домашня тварина)

class Cat extends Animal implements IHomeAnimal {
    public makeSound(): string {
        return `${this.name} мявкає: Мяв-мяв!`;
    }

    public feed(): string {
        return `${this.name} їсть корм.`;
    }

    public pet(): string {
        return `${this.name} радіє, коли його гладять.`;
    }
}

// Клас для вовка (дика тварина)

class Wolf extends Animal implements IWildAnimal {
    public makeSound(): string {
        return `${this.name} виє: Аууууу!`;
    }

    public hunt(): string {
        return `${this.name} полює в лісі.`;
    }
}

export { IHomeAnimal, IWildAnimal, Animal, Dog, Cat, Wolf };
