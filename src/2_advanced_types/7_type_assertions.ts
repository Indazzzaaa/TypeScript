// this is way to telling type script about the type of variable , so that we can use it's property .
//! it's not the type conversion where we convert one type to another .

// * Way-1
let phone = document.getElementById('phone') as HTMLInputElement; // Generic is HTMLElement , but we know phone id element is input element 

// * way-2
let phone2 = <HTMLInputElement>document.getElementById('phone')

// now we can access properties
console.log(phone.value);
