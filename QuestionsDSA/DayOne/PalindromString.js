let String = 'pusdi';

function Palindrom(String){
    let newstr = String.split('').reverse().join('');
    if(newstr === String){
        return true;
    }
    return false;
}

console.log(Palindrom(String));