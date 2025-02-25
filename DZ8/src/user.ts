import { Company } from './company';
import { Person } from './person';

// Клас User, який наслідує Person і включає Company через композицію

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

export {User};
