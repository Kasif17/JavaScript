// for of loops

// applying in map for of loops
const map = new Map;

map.set('IN','India');
map.set('UAE','United Arab Emerite');
map.set('USA','United State of America');
map.set('UK','United Kingdom');

for (const [key,value] of map) {
  //  console.log(key , ':-', value);
    if(key === 'UK'){
        console.log(value);
    }
}

// if apply on object So Is its working ??
// lets try it

const game = {
    'game1':'BGMI',
    'game2' :'Spiderman',
    'game3' : 'Truck Driver'
}

// for (const [key] of game) {
//  //   console.log(key);
// }

// finally i found for of loops was not working in objects

const num = [1,2,3,4,5];
for (const key of num) {
    console.log(key);
}

const phone = ['IPhone','OPPO','VIVO','SAMSUNG','README','MOTOROLA']
// for (const value of phone) {
//     console.log(value);
// }
for (const key in phone) {
    if (phone.hasOwnProperty(key)) {
        console.log(phone[key]);
    }
}

