let String = "i am a softwareee developer";

function LongestWords(String){
    let LongWord = '';

    let originalWord = String.split(' ');

  for (let word of originalWord) {
    if(word.length > LongWord.length){
        LongWord = word;
    }
   
  }
  return LongWord;
}
console.log(LongestWords(String))
