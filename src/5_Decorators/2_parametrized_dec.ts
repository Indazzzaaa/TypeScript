//  this is also called Decorator factory : a fuction which return decorator
type ComponentOptions = {
    selector: string
}

function Paramerized(options: ComponentOptions) {

    return (constructor: Function) => {
        console.log("Component decorator called");
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.options = options
        constructor.prototype.insertInDOM = () => {
            console.log("Inserting the component in the DOM");

        }


    }
}


//* Decorator composition
function Pipe(constructor: Function) {
    console.log("Pipe decorator is called");
    constructor.prototype.pipe = true;

}



// both will work independently 
@Paramerized({ selector: "#my-profile" })
@Pipe
class ParamerizedComponentTest {

}

// * run the js version of it's