const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 23.4783;
// console.log(otherNumber.toPrecision(3));


const hundreds = 10000000;
// console.log(hundreds.toLocaleString());


// console.log(Math);

// console.log(Math.abs(-4));
// console.log(Math.round(4.6));

// console.log(Math.ceil(4.5));
// console.log(Math.floor(4.5));
// console.log(Math.min(2,3,4,4,2,1));
// console.log(Math.max(2,3,4,4,2,1));


console.log(Math.random());     //0 - 1
console.log(Math.floor(Math.random()*10)+1);        //1 - 9 

const min = 10;
const max = 20;

console.log(Math.floor((Math.random() * (max - min + 1)) + min));