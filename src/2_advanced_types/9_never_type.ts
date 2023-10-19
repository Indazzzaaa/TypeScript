// it's mainly use to detect part of code which is never going to execute.

// * change in config file =>  allowUnreachableCode: false

function processEvents(): never {
    while (true) {
        // Read message from a queue
    }
}

// this is in infinite loop so below this code will never execute it would be better if we knew about this at compile time.That's how the never type with enabling the above compiler option will help us to detect.
processEvents()


// console.log("Hello world"); // !error thorw after changing that compiler option.
