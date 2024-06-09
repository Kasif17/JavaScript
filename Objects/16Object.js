// object literales 


const mysym = Symbol();
const user = {
    name : "kasif",
    age : 21,
    [mysym]: "Symbol value",
    "first name":"Mohd",
    Location : "Lucknow",
    qualification : "B.Tech(CSE)",
    Contact : 9794975553
}


// access of object

//console.log(user.name);
 console.log(user["age"]);
 console.log(user["first name"]);
 console.log( typeof user[mysym]);

//Update the Value 

user.email = "abc@gmail.com"
// Object.freeze(user)
//user.email = "xyz@gmail.com"
//console.log(user);

user.greeting = function (){
    console.log(`heelo js user`);
} 
user.greeting();
user.greetingname = function(){
    console.log(`hello user ${this.name}`);
}
user.greetingname();