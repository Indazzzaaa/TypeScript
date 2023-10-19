// ? it is adviced to use "unknown" types instead of "any"  beacuse here compiler forces us to do some type checking

// * General rule , never use "any" type if needed use the "unknown" type
function render(document: unknown) {

    // now we can use type Narrowing
    if (typeof document === 'string')
        document.toLowerCase(); // this will have access to all the string methods

    if (typeof document === 'number')
        document.toExponential(2) // this will have access to all the number methods.


}

// Note : TypeScript won't let us perform arbitrary operations on values of type unknown. Instead, we have to perform some sort of type checking first to narrow the type of the value we're working with.
// for more : https://mariusschulz.com/blog/the-unknown-type-in-typescript