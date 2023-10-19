function Capitalize(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const original = descriptor.get;
    descriptor.get = function () {
        const result = original?.call(this);
        return (typeof result === 'string') ? result.toUpperCase() : result;

    }
}

class AnotherPerson {
    constructor(private firstName: string, private lastName: string) { }
    @Capitalize
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

let somePerson = new AnotherPerson("Sumant", "Patel")
console.log(somePerson.fullName);
