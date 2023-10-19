class Coder{
   
    secondLang!: string  // way to make optional in classes

    constructor(
        public readonly name: string,
        public music: string,
        private age: number,
        protected lang: string = 'Typescript'
    ) {

        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        
    }

    public getAge() { return this.age; }




}

class WebDev extends Coder{
    constructor(public computer: string, name: string, music: string, age: number) {
        super(name, music, age);
        this.computer = computer;
    }

    public get lan(): string { return this.lang; }
    public set language(newValue: string) {
        this.lang = newValue;
    }
}


class Peeps{
    private static count: number = 0;
    static getCount(): number {
        return Peeps.count;
    }

    public id: number;
    constructor(public name: string) {
        this.name = name;
        this.id = ++Peeps.count;
    }
}