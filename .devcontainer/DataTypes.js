//primitive

// 7 types : String , Number, Boolean, null, undefined, Symbol, BigInt

const score = 0
const scorevalue =100.3

const isboolean =false;
const outsidetemp =null
let useremail;

const id = symbol('123')
const anotherID = symbol('123')
console.log(id == anotherID);

const bigint =1233445556642342

//Reference (Non-Primitive)

//Array, Object , Functions
const heroes = ["saktiman", "bheem", "ben10"]; // Array -> object
let myobj ={
    name:"ayush",
    age:18,
}
const myfunction = function(){
    console.log("hello world");
}

cocnsole.log(typeof outsidetemp)    // object

//**************************************************************************************/

//stack  (primitive) ,heap (Non-primitive)

let youtubename ="chai&code"

let anothername = youtubename
anothername ="Ayushtalks"

console.log(youtubename); //chai&code
console.log(anothername); //Ayushtalks

let UserOne = {
    email:"ayush@google.com",
    age:20,
}
let UserTwo = UserOne

UserTwo.email ="random@google.com"
console.log(UserOne.email); //random@google.com
console.log(UserTwo.email); //random@goole.com

