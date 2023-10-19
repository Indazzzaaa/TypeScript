type Employee = {
    readonly id: number
    name: string
    retire: (date: Date) => void;

}

let employeee: Employee = {
    id: 1,
    name: 'Sumant',
    retire: (date: Date) => console.log(date),

}

// employeee.id =2 // !this will throw error , since it's of only readonly
employeee.retire(new Date())



