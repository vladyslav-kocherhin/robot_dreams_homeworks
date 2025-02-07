// Створення комплексного об'єкта

const person = {
    name: "Vladyslav",
    age: 29,
    address: {
        city: "Kyiv",
        street: "Sophii Rusovoi",
        houseNumber: 3
    },
    hobbies: ["motorcycles", "football", "music"],
    getInfo() {
        console.log(`Name: ${this.name}, age: ${this.age}`);
        console.log(`Addres: ${this.address.city}, ${this.address.street} street, ${this.address.houseNumber}`);
        console.log(`Hobbies: ${this.hobbies.join(", ")}`);
    }
};

// Виклик методу для виведення значень

person.getInfo();

