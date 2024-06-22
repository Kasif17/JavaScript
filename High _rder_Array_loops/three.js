const item = ["Fisrt","Second","Third","Fourth","Fivth"];

item.forEach(  function(val){
    console.log(val);
})

console.log("Another Things");

//another approach

const coding = ['java','js','c++','python','ruby'];

// coding.forEach((Language)=>{
//  console.log(Language);
// })

// Another One

function printme(val){
    console.log(val);
}
coding.forEach(printme)