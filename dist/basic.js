"use strict";
let am;
am = "emon";
console.log(am);
//  Can't push anything without string cause type is defined as string 
let array = ['em', 'am,', "idhfihn"];
array.push("hhh");
// array.push(88)  
// Tuple
let ageName = [50, "emon"];
ageName[0] = 0;
// Object with chaining
const obj = {
    company: 'PH You',
    fName: "md",
    lName: 'sheikh'
};
// Function
function add(num1, num2) {
    return num1 + num2;
}
add(2, 5);
const addArrow = (num1, num2) => num1 + num2;
const user = {
    name: "emojn",
    balance: 100,
    addBalance(balance) {
        return this.balance + balance;
    }
};
console.log(user.addBalance(10));
