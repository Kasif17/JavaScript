
const Array = [1,2,2,3,3,4,5,6,6,7,1,8,8,9,9,0];

function Removeduplicate(Array){
    const uniqueArray = [];

    for (let i = 0; i < Array.length; i++) {
        
        if(uniqueArray.indexOf(Array[i]) === -1){

            uniqueArray.push(Array[i])
        }
        
    }
    return uniqueArray;
}

//Another Way Using set
function usingset(Array){
    return[...new Set(Array)]
}

console.log(usingset(Array)); 

console.log(Removeduplicate(Array));