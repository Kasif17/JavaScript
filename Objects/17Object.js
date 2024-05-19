// Object Constructor 

// const user = new Object({
//     name: "kasif khan",
//     lastname : "Khan"
// });
const user = {};
user.name = "Mohd Kasif Khan";
user.firstname = "Mohd";
user.lastname = "Khan",
user.age = 21;
user.location = "Lucknow";

const newUser = [{
    user:{
        id : "123abc",
        email: "abc@gmail.com"
    },
    user1:{
        id : "123abc",
        email: "abc@gmail.com"
    },
    user2:{
        id : "123abc",
        email: "abc@gmail.com"
    },
    user3:{
        id : "123abc",
        email: "abc@gmail.com"
    },
    user4:{
        id : "123abc",
        email: "abc@gmail.com"
    }
}]

let hadId = false;
newUser.map(()=>{
    
})
console.log(newUser)
console.log(newUser.hasOwnProperty('id'));
console.log(Object.keys(user));
(Object.values(user).includes(21)) ? console.log("Yes, it's available") : console.log("No, it's not available");