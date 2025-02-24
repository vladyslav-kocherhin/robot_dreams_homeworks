/*[
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    }
  ]*/

// Інтерфейси для отриманих даних
interface Geo {
    lat: string;
    lng: string;
}

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

// Функція для отримання користувача за допомогою fetch
async function fetchUser(): Promise<User> {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users?id=1');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data: User[] = await response.json();
        return data[0];
    } catch (error) {
        console.error('Error fetching data:', error);
        throw new Error('Failed to fetch data');
    }
}

// Клас для трансформації отриманих даних
class UserSummary {
    public fullName: string;
    public companyName: string;
    public city: string;

    public constructor(user: User) {
        this.fullName = `${user.name} (${user.username})`;
        this.companyName = user.company.name;
        this.city = user.address.city;
    }
}

// Використання
(async () => {
    const user = await fetchUser();
    const summary = new UserSummary(user);
    console.log(summary);
})();


// Абстрактний клас, що описує базові характеристики користувача
abstract class Person {
    public constructor(public name: string, public email: string) {}

    public abstract getInfo(): string;
}

// Клас, що представляє компанію користувача (композиція)
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
class Company {
    public constructor(public name: string, public catchPhrase: string) {}

    public getCompanyInfo(): string {
        return `${this.name} - "${this.catchPhrase}"`;
    }
}

// Клас User, який наслідує Person і включає Company через композицію
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
class User extends Person {
    public constructor(
        name: string,
        email: string,
        public username: string,
        public company: Company
    ) {
        super(name, email);
    }

    public getInfo(): string {
        return `User: ${this.name} (${this.username}), Email: ${this.email}, Works at: ${this.company.getCompanyInfo()}`;
    }
}

export { Person, Company, User };
