//* very usefull in dealing with situations where property we are trying to access is not present or null or undefined, we want our code to work only we have the valid value.

//* 1. For Property
type Customer = {
    birthday?: Date // we make birthday optional
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };

}

let customer = getCustomer(0)
// if(customer !==null && customer !==undefined) //  now we can bypass this by using

//this will first check customer is not null and not undefined, then will then customer have birthday property not null and not defined , if it's any or them is in null or undefined then result will be undefined of this output.
console.log(customer?.birthday?.getFullYear());
// console.log(customer?.age?.getFullYear()); // ! error

// * 2.  on array

// this will help us to first check is defined or not.
let customeries: number[] = [1, 2]
// first check customer defined or not then will check index 3 exist in this array or not if not then undefined will be returned.
console.log(customeries?.[3]);

//* 3. Optional Call
let log: any = null;

// this will first check log have valid funciton or not which can accept parameter if not then ignores it.Which mean as `undefined`
log?.('a');
