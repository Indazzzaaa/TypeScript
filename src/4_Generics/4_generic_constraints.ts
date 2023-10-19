// constraints can be , primitive type, interface or any custom class types

class Personn {
    constructor(public name: string) { }
}

interface Tesla {
    modelNo: number
}

// T can be only of type number or string or Signature like Person
function echo<T extends number | string | Personn | Tesla>(value: T) {
    return value;

}

echo("yes")
echo(1)
// echo(true) // ! error
// * as long as we have name property on object we can use it.
echo({ name: "sumant" });
echo({ name: "sumant", age: 18 });
echo({ modelNo: 1, name: "Anything" });
// echo({ age: 18 }); // !error