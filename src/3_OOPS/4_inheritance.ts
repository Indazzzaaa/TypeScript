// ! enable this : "noImplicitOverride": true, 

class Person {
    constructor(public firstName: string, public lastName: string) { }

    getFullName(): string {
        return `${this.firstName + " " + this.lastName}`
    }

    walk(): void {
        console.log("I can walk");

    }

    talk(): void {
        console.log("I can talk");

    }


}

class Student extends Person {
    // ! don't make firstName and lastName public here since they are already defined in Person
    constructor(public id: number, firstName: string, lastName: string) {
        super(firstName, lastName);
    }
}

let s1 = new Student(1, "Sumant", "Patel")
console.log(s1.getFullName());

// method overriding
class Teacher extends Person {

    override getFullName(): string {
        return `Prof. ${super.getFullName()}`
    }
}
let teacher = new Teacher("Rahul", "Netwait")
console.log(teacher.getFullName());

//* open closed principle : classes should be open for extension and closed for  modification.

// ! read about the diamond inheritance : https://www.educative.io/answers/what-is-a-diamond-problem-in-object-oriented-programming
