// simple decorator which validates the length of password

function MinLength(length: number) {
    return (target: any, propertyName: string) => {
        let value: string;

        const descriptor: PropertyDescriptor = {
            get() { return value; },
            set(newValue: string) {
                if (newValue.length < length)
                    throw new Error(`${propertyName} should be at least ${length} characters long.`)
                value = newValue;
            }
        };

        Object.defineProperty(target, propertyName, descriptor);
    }
}

class User {
    @MinLength(4)
    password: string;

    constructor(password: string) {
        this.password = password;
    }

}

const newUser = new User("1234")
console.log(newUser.password);
const newUser2 = new User("123")
