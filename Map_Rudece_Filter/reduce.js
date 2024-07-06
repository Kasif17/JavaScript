// const myNums =[1,2,3,4,5];

// let initialVal = 0;

// const newNum =myNums.reduce((ac,cv)=>ac+cv)

// console.log(newNum);

const courses = [
    { courseName: "Introduction to Programming", price: 4999 },
    { courseName: "Advanced Data Structures", price: 6999 },
    { courseName: "Digital Marketing Basics", price: 2999 },
    { courseName: "Financial Accounting", price: 5999 },
    { courseName: "Modern Art History", price: 3999 }
  ];

const TotalPay = courses.reduce((acc,item)=> acc+item.price,0)

console.log(TotalPay);