const user = {
    username : "kasif",
    price : 9828,
    
    Massege:function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
// user.Massege();
// user.username = "khan";
// user.Massege();
// console.log(this);



// function khan(){
//     let name = "kasif"
//     console.log(this.name);
// }
// khan();


// const userone = function(){
//     let username = "badal";
//     console.log(this.username);
// }
// userone()


// ++++++++++++ Arrow Function +++++++++++

const addTwo = (num1, num2)=>{
    return num1+num2
}
console.log(addTwo(2,2));