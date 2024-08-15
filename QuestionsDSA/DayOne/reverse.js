// Reverse Array 

let OriginalString = 'hello vscode this is javaScript';

function reverseStr(OriginalString){
   let reverse = '';

   for(let i = OriginalString.length -1; i>=0 ; i--){
      reverse += OriginalString[i]
   }
    return reverse;
}
function reverseAnother(OriginalString){
    
    let  reverse = OriginalString.split('').reverse().join('');

    return reverse;
}

// function reverseEachWord(OriginalString){
//     let reverse = OriginalString.split(' ');
//     for (let index = 0; index < array.length; index++) {
        
        
//     }
// }
console.log(reverseAnother(OriginalString));
console.log(reverseStr(OriginalString));