// function with object

const user = {
    name : "Mohd Kasif Khan",
    Price : 29000
}

function newUser(anyobject){
    return `My name is ${anyobject.name} and price ${anyobject.Price}`
}

console.log(newUser(user));