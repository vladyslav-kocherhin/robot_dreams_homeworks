class Car {
    #privateOwner;
    constructor(brand, model, ownerName, ownerAge) {
        this.brand = brand;
        this.model = model;
        this.#privateOwner = { name: ownerName, age: ownerAge };
    }

    // Геттер для отримання ім'я власника
    get owner() {
        return this.#privateOwner.name;
    }

    // Сеттер для зміни імені власника
    set owner(newOwner) {
        if (!newOwner) {
            throw new Error("Потрібне ім'я власника");
        }
        this.#privateOwner.name = newOwner;
    }

    // Геттер для отримання повної інформації про машину і власника
    get carInfo() {
        return `${this.brand} ${this.model}, Власник: ${this.#privateOwner.name}, Вік: ${this.#privateOwner.age}`;
    }

    // Метод для оновлення віку власника
    updateOwnerAge(newAge) {
        if (newAge <= 0) {
            throw new Error('Вік має бути додатнім числом');
        }
        this.#privateOwner.age = newAge;
        return `Вік власника оновлений до ${newAge}`;
    }
}

// Створення екземпляра класу Car
const car = new Car('Tesla', 'Model S', 'Alice', 30);
console.log(car.owner);
console.log(car.carInfo);

car.owner = 'Владислав';
console.log(car.owner);
console.log(car.updateOwnerAge(35));
console.log(car.carInfo);
