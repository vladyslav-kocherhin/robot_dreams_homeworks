// Абстрактний клас, що описує базові характеристики користувача

abstract class Person {
    public constructor(public name: string, public email: string) {}

    public abstract getInfo(): string;
};

export { Person };
