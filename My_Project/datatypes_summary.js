//Primitive:
//There are 7 types of primitive
//(String,Number,Boolean,Null,Undefined,Symbol,BigInt)

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

 const bigNumber = 3456543576654356754n
//Reference (Non-Primitive):
//There are 3 types of non-primitive
//(Array,Objects,Function)//

const heros=["Babar Azam", "Quaid-e-Azam", "Allama Iqbal"];
//console.log(heros);
let myObj=
{
    Name:"Rumaisa",
    Age:21,
    City:"Karachi",
    Country:"Pakistan",
    CNIC: 42201-2286414-0 
}
console.log(myObj);
const myFunction = function(){
    console.log("Hello World");
}