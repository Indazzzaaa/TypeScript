//  this is usefull when we want to use same key of provided class but add some constraints on them
interface TeslaProduct {
    name: string;
    price: number;
}

type ReadOnly<T> = {
    // readonly will make give constraint of not changing value
    // K is like variable used for reference current index value
    // keyOf T will provide us iteratable which can iterate on property of class
    // T[K] will give us the for property 'K' which type we are using eg. name : string
    readonly [K in keyof T]: T[K]
}

type Optional<T> = {
    [K in keyof T]?: T[K]
}

type Nullable<T> = {
    [k in keyof T]: T[k] | null
}

let product: ReadOnly<TeslaProduct> = {
    name: 'a',
    price: 1
};