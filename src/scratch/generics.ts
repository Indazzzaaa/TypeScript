// this is very basic example of how we can use generics

class StateObject<T>{
    private data: T
    constructor(value: T) {
        this.data = value;
    }

    get state(): T {
        return this.state;
    }

    set state(newValue: T) {
        this.data = newValue;
    }
}

const store = new StateObject("Sumant")
console.log(store.state);
