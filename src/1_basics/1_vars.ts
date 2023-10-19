let yourAge: number = 10;
let ourClass = 10;
let yourName: string = "sumant";
let isPublished: boolean = true;
let mySecretNumberOf: string | number; // this can have both type of values(union)
mySecretNumberOf = "dafepadfjelaje"
mySecretNumberOf = 12343434

// example of any
let anything;
anything = "name";
anything = true;
anything = 10.12;

// yourAge = "123"

const testFunction = (name: string, age: number) => name + age;  // due to type coercison string + number ==> string
