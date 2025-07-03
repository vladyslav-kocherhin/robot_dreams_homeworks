// Клас, що представляє компанію користувача (композиція)

class Company {
    public constructor(public name: string, public catchPhrase: string) {}

    public getCompanyInfo(): string {
        return `${this.name} - "${this.catchPhrase}"`;
    }
};

export { Company };
