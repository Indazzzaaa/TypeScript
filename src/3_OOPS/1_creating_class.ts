// in ts we have three access modifiers , public(by default) , private protected

// * way-1
class Account {
    readonly id: number;
    owner: string;
    private _balance: number;
    nickname?: string;

    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }

    deposit(amount: number): void {
        if (amount < 0)
            throw new Error("Invalid Amount!!");

        this._balance += amount;

    }

    private calculateTax(): void {
        console.log("I have to pay null in tax");

    }

    // Example of getters and setters.

    get balance(): number {
        return this._balance;
    }

    set balance(value: number) {
        if (value < 0) throw new Error("invalid value");
        this._balance = value;
    }
}

let account = new Account(1, "sumant", 100);
account.deposit(100);
// console.log(account._balance);  // ! error
console.log(typeof account);
console.log(account instanceof Account);
console.log(account instanceof Object);

// * way -2
class AccountManager {
    nickname?: string;

    constructor(public readonly id: number, public owner: string, private _balance: number) {
    }

    deposit(amount: number): void {
        if (amount < 0)
            throw new Error("Invalid Amount!!");

        this._balance += amount;

    }

    private calculateTax(): void {
        console.log("I have to pay null in tax");

    }
}

let accountManager = new AccountManager(1, "Rahul", 1000)
console.log(accountManager)
