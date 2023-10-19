
// with no return type
/* 
* enable these compiler options for better function defination
"noImplicitReturns": true,
"noUnusedParameters": true,
"noUnusedLocals": true,

*/

// function with no return type, TS can also infer out the return type of funciton if not defined.
function sayHello(): void {
    console.log("Hello world");

}

// function with optional parameter
// if we don't pass the optional parameter then it's value will be undefined.
function saySomething(name: string, age?: number): void {
    console.log(`My name is : ${name}, and my age is : ${age ? age : "no age specified"}`);
}

sayHello()
saySomething("Sumant")

//function with default parameter
function defaultPara(name: string, age = 18): void {
    console.log(name, age);

}


// Some example with custom types
const add = (a: number, b: number): number => a + b;

// funciton with void return type
const logMsg = (msg: any): void => console.log(msg);

// using type-alias with funciton
type mathfunction = (a: number, b: number) => number;

// now hover over a,b it will automatically infer it's type
const subtract: mathfunction = (a, b) => a - b;


// function with optional parameters
const addAll = (a: number, b: number, c?: number): number => {

    // if c is given then only go in if 
    if (c) return a + b + c;
    else return a + b;


}

console.log(addAll(1, 2));
console.log(addAll(1, 2, 3));


// using rest parameters
const total = (...nums: number[]): number => nums.length;

// never type : type that returns error

const test = (a: number) => { throw new Error("New Error"); }

