// usefull in cases like , string seat number and person seating , you'll get it by examples below

class SeatAssignment {
    // A1:Sumant, A2:Rahul
    // eg. 'A1' is seat type which is string and 'Sumant'  is type of value stored in 'A1'
    // Index signature property
    [seatNumber: string]: string

}
let seats = new SeatAssignment();
seats.A1 = 'Sumant';
seats.A2 = 'John';
seats['A3'] = 'Rahul'
seats['z12'] = 'Vishal'
console.log(seats);
