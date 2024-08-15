
const colorRandom = function(){
  let hex = '0123456789ACBDEF';
  let color = '#';


  for(let i =0; i<6; i++){
    color += hex[Math.floor(Math.random()*16)];
  }
  return color;
}

let Interval1;
const startChangingColor = function(){
  if(!Interval1){
    Interval1 = setInterval(changeBgColor,1000)
  }
  function changeBgColor(){
    document.body.style.backgroundColor = colorRandom();
  }
}
const stopChangingColor = function(){
  clearInterval(Interval1);
  Interval1 = null;
}

document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);
