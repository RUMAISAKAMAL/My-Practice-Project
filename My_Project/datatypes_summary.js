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
//*************Memory**************//
//There are two types of memories:
//1.Stack (Primitive) it gives you copy of your variable
//2.Heap (Non-Primitive) it gives you reference of original value

let myyoutubename = "ZK SOLUTION WORLD"
let anothername=myyoutubename
anothername="trend_designdynasty"
//console.log(myyoutubename)
//console.log(anothername)

let oneuse={
    email:"abc@gmail.com",
    upi: "use@ibl"
}
let usertwo = userone
usertwo.email="xyz@gmail.com"
console.log(userone.email);
console.log(usertwo.email);