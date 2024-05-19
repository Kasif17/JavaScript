// stack memory 
// stack use preemtive Data type
// Eg.
// let nameOne = "kasif";
// let nameTwo = nameOne; // copy the name
//  nameTwo = "badal";
//  console.log(nameOne);
//  console.log(nameTwo);

// Heap Memory
// heap memory use Non-preemtive data type

let userOne = {
    name:"kasif",
    email: "kasif@outlook.com"
}

let  userTwo= {
    name:"kasif",
    email: "kasif@outlook.com"
};
// userTwo.name ="badal"
//userTwo.email = "badal@outlook.com";

console.log(userOne == userTwo);
console.log(userTwo);

let a = '6';
let b = 6

console.log(a==b);