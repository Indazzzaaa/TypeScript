// if we dfine enum with const then compiler will generate more optimized code
const enum Sizes { Small = 2, Medium, Large }; // by default will start from 1


// ! we can't use let keyword with enum it does not make sense.
enum Room { Small = 's', Medium = 'm', Large = 'l' };// for string we have to explicitly define for each options

let mySize = Sizes.Medium;
let myRoom = Room.Small;
console.log(mySize);
console.log(myRoom);


