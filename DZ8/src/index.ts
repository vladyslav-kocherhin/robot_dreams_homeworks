import { fetchUser } from './abstraction';
import { UserSummary } from './user-summary';
import { Company } from './company';
import { User } from './user';

// Використання

(async () => {
    const user = await fetchUser();
    const summary = new UserSummary(user);
    console.log(summary);
})();

// Створюємо об'єкт компанії

const company = new Company('Romaguera-Crona', 'Multi-layered client-server neural-net');

// Створюємо об'єкт користувача

const user = new User('Leanne Graham', 'Sincere@april.biz', 'Bret', company);

// Використовуємо методи класів

console.log(user.getInfo()); // Виведе інформацію про користувача
console.log(user.company.getCompanyInfo()); // Виведе інформацію про компанію
