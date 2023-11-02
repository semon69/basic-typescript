let am: String;

am = "emon"
console.log(am);


//  Can't push anything without string cause type is defined as string 

let array: String[] = ['em', 'am,', "idhfihn"]
array.push("hhh")
// array.push(88)  

// Tuple
let ageName: [number, string] = [50, "emon"]
ageName[0] = 0

// Object with chaining
const obj: {
    readonly company: "PH You", // Literal type
    fName: String,
    mName?: String,
    lName: String
} = {
    company: 'PH You',
    fName: "md",
    lName: 'sheikh'
}