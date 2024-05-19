//  Destructuring Object 
const userDetail = {
    id: "123abc",
    name: "anas",
    salary : "50k",
    department: "CSE",
    Age : 22
}

const {salary,name,Age} = userDetail;

console.log(salary+" "+name+" "+Age);