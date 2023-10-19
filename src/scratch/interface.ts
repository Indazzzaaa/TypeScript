interface Musician{
    name: string,
    instrument: string,
    class?: number  //  to make it optional
    play(action: string): string;
}
// below is also way to create object of interface type

const todayMusician: Musician = {
    name: "Sumant",
    instrument: "Tabla",
    play: (action: string): string => "Playing tabla"
};

class Guitarists implements Musician{
    name: string;
    instrument: string;

    constructor(name: string, instrument: string) {
        this.name = name;
        this.instrument = instrument;
    }

    play(action: string): string {
       return `${this.name} ${action} the ${this.instrument}`
    }

}