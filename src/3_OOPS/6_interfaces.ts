// we use interface to define the shape of an object.
// note abstract class have some code like normal class in js for representation
// but interfaces have zero footprint.
//  Interfaces can't have method implementations , so if that we want with absract funcitonality go with abstract classes.

interface Calender {
    name: string;
    addEvent(): void;
    removeEvent(): void;
}

interface CloudCalender extends Calender {
    sync(): void;
}

class GoogleCalender implements Calender {
    // ! in case of interface we have to define public / private/protected
    constructor(public name: string) { }
    addEvent(): void {
        console.log("Event added");

    }
    removeEvent(): void {
        console.log("Event removed");

    }

}