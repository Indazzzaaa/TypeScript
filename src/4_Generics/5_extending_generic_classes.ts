interface Productsss {
    name: string;
    price: number;
}
class Store<T> {
    // declearing it and initializing as empty array at same time.
    protected _objects: T[] = [];

    add(obj: T): void {
        this._objects.push(obj);
    }

    // T is Productsss
    // keyof T => 'name' | 'price'
    findKey(property: keyof T, value: unknown): T | undefined {
        return this._objects.find(obj => obj[property] === value);
    }
}

let storeee = new Store<Productsss>();
storeee.add({ name: 'a', price: 1 });
storeee.findKey('name', 'a');
storeee.findKey('price', 1);
// storeee.find('anyProperty', 'a'); // !throws error

// * Pass on the generic type parameter
class CompressibleStore<T> extends Store<T>{
    compress() { }
}
let stores = new CompressibleStore<Productsss>();

//  * restrict the generic type parameter
// will only work on class having the name parameter , just like narrow down the scope of generic type
class SearchableStore<T extends { name: string }> extends Store<T> {
    find(name: string): T | undefined {
        return this._objects.find(obj => obj.name === name);
    }
}

// Fix the generic type parameter
class ProductsssStore extends Store<Productsss> {
    filterByCategory(category: string): Productsss[] {
        return [];
    }

}