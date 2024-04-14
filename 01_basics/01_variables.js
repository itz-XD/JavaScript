const accountId = 144553
let accountEmail = "xd@google.com"
var accountPassword = "12345"
accountCity = "Hazaribagh"
let accountState;

// accountId = 2  //  not allowed

accountEmail = "new@google.com"
accountPassword = "0924"
accountCity = "Dhanbad"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

// console.log(accountEmail);
// console.log(accountPassword);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])