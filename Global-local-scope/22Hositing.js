// Hoisting 

//nested Scope
function one(){
    const username = "kasif";

    function two(){
        const username2 = 'anas'
        console.log(username);
    }
 //   console.log(username2);
    two()
}
one();

// +++++++++++++++ interesting ++++++++++++++++
// this is the function 
console.log(addone(2));
function addone(num){
    return num+2;
}
// console.log(addone(2));


// this is the function and expression variable also
console.log(addtwo(5)); // you initialization before then can't access the code
const addtwo = function(value){
    return value*5;
}

// console.log(addtwo(5));
