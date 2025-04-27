import { User } from './abstraction';

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

export { UserSummary };
