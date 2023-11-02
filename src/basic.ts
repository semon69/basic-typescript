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

// Function
function add(num1: number, num2: number): number{
    return num1 + num2
}
add(2,5)


const addArrow = (num1: number, num2: number): number => num1+ num2 

// objec --> function --> method
const user = {
    name: "emojn",
    balance: 100,
    addBalance(balance: number): number{
        return this.balance + balance
    }
}
console.log(user.addBalance(10));


// Rest operators
const myfriends = (...friends:  String[]) => {
    friends.forEach((friend: String) => console.log(friend)
    )
}

myfriends('rahim', 'karim', 'mofiz', 'british')


// Type alias
type Student = {
    name: string,
    age: number,
    gender: string,
    address: string,
    contactNo?: string
}

const student1: Student = { 
    name: "hh",
    age: 55,
    gender: 'dfsd',
    address: "dsd",
    contactNo: "ffdf"
}

const student2: Student = {
    name: "hh",
    age: 55,
    gender: 'dfsd',
    address: "dsd",
    contactNo: "ffdf"
}

type Add = (num1: number, num2: number) => number

const add2: Add = (num1, num2) => num1 + num2


// Union Type

type Developer = "Frontend Developer" | "Backend Developer"

const newDev: Developer= "Backend Developer"

//  Intersection type

type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer"
}
type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer"
}

type FullstackDeveloper = FrontendDeveloper & BackendDeveloper

const dev: FullstackDeveloper = {
    skills: ["html", "css"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer"
}