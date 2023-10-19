type stringorNumber = string | number;
type stringorNumberArray = (string | number)[]

type PopStar = {
    name?: string,
    active: boolean,
    albumns: stringorNumberArray
}

let pop1: PopStar = {
    name: "just Bierbal",
    active: false,
    albumns:['anything',2000]
}

let pop2: PopStar = {
    active: false,
    albumns:['anytime',1984]
}

// charAt function will only run if name is there.
console.log(pop2.name?.charAt(0));
console.log("Type Alias completed");

