const coding = ['java','js','c++','python','ruby'];
const Mynum = [1,2,3,4,5,6,7,8,9,10]
const newnum = []
Mynum.forEach((val)=>{
  if(val >=5){
    newnum.push(val)
  }
})
console.log(newnum);