let val = [1,2,3,-1,-3,0,0,6];
val.forEach(element => {
    if(element>0){
        console.log(`number is positive ${element}`);
    }
    else if(element == 0){
        console.log(`number is zero ${element}`);
    }
    else{
        console.log(`number is negative ${element}`);
    }
});