// For in Loops 

//apply on object

const Emplooyee ={
    name: 'Kasif',
    department:'CS/IT',
    Age:'21',
    Country: 'IN'
}

for (const key in Emplooyee) {
   console.log(`${key} :--- ${Emplooyee[key]}`);
}

// apply on array

const phone = ['IPhone','OPPO','VIVO','SAMSUNG','README','MOTOROLA']

for (const key in phone) {
   console.log(key.valueOf(1));
}