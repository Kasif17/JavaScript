function Anagram(str1,str2){

   let newStr1 = str1.split('').sort().join('');
   let newStr2 = str2.split('').sort().join('');

   if(newStr1 === newStr2){
    return true
   }
   return false;
}

console.log(Anagram('khan','hankj'));