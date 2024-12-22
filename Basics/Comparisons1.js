// console.log(2 > 1);
// console.log(2 >= 1);

// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// equality check == and comparisons > < <= >= work differently
// comparisons convert null to a number treating it as 0
// thats why null >= 0 is true and null == 0 is false

console.log(undefined == 0);        //all false for undefined


console.log("2" == 2);  //true implicit conversion
console.log("2" === 2); //false