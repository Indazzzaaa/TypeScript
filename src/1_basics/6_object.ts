// *Define custom types
type Guitarist = {
    name: string,
    active?: boolean, // this makes active optional .(see it's dtype)
    albumns: (string | number)[]
}

let evh: Guitarist = {
    name: "Sumant",
    active: true,
    albumns: [1984, 200, "he01"]
};
// since active is optional , no need to define it again.
let evh2: Guitarist = {
    name: "Sumant",
    albumns: [1984, 200, "he01"]
}