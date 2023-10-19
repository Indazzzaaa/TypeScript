//*  just for checking  turn of : noUnusedParameters
//! we can't use `this` keyword in arrow function.

function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value as Function;

    // this is generalized implementation so it can be applied for any method ,
    // but if you want to used to specific type of methods like below , just use  message:string
    descriptor.value = function (...args: any) {
        console.log("Before");
        original.call(this, ...args);
        console.log("After");


    }
}

class MalePerson {
    @Log
    say(message: string) {
        console.log('Male Person says : ' + message);

    }
}

let person = new MalePerson();
person.say("Hello me!")
