class Ride {
    private static _activeRides: number = 0;
    constructor() {
        Ride._activeRides++;
    }

    start() { Ride._activeRides++; }
    stop() { Ride._activeRides--; }

    static get activeRides(): number {
        return Ride._activeRides;
    }

}

let ride1 = new Ride()
let ride2 = new Ride()
let ride3 = new Ride()
console.log(Ride.activeRides);
