const accountId = 1234;
let accountEmail = "harsh@h.com";
var accountPassword = "123456";
accountCity = "Pune";

let accountName;

console.log(accountId);

// accountId = 2;   //cannot update const

/*
prefer not to use var
use let instead of var due to issue of block scope and function scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountName]);