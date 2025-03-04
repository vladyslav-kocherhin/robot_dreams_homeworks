// Абстракція для тварини, яка задає основні характеристики, але залишає конкретну реалізацію підкласам

abstract class Animal {
    public constructor(public name: string) {}
    public abstract makeSound(): void;
}

class Dog extends Animal {
    public makeSound(): void {
        console.log('Woof!');
    }
}

class Cat extends Animal {
    public makeSound(): void {
        console.log('Meow!');
    }
}

export { Animal, Dog, Cat };
