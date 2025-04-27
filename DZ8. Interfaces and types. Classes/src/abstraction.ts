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

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

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

export { Company, User, fetchUser };
