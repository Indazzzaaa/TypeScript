//* enable this feature : "experimentalDecorators": true

// decorators are same as in python : enhance the capability of class of function it is decorating to.

// * creating class decorator , based on which type of decorator we are creating parameter changes.
function Component(constructor: Function) {
    console.log("Component decorator called");
    // every class on which this decorator will be applied will have the below to property as well.
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
        console.log("Inserting the component in the DOM");

    }


}

// this is how we decorate the class
@Component
class ProfileComponenet {

}


// now run the js version

