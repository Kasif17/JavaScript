const btn = document.querySelectorAll('.color');
const clr = document.querySelector('#white')
const bg = document.querySelector('body')

btn.forEach((bt)=>{
  //  console.log(bt);
 bt.addEventListener('click',(e)=>{
    console.log(e.target);
   if(e.target.id == 'grey'){
    bg.style.backgroundColor= e.target.id
   }
   if(e.target.id == 'white'){
    bg.style.backgroundColor=e.target.id
    clr.style.color= 'red';
   }
   if(e.target.id == 'yellow'){
    bg.style.backgroundColor=e.target.id
   }
   if(e.target.id == 'green'){
    bg.style.backgroundColor=e.target.id
   }

 })
})