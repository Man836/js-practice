const accountId = 14453
let accountEmail = "mm@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"  // can be possible used but not prefered
let accountState; // variable decalared with no value assigned then it prints undefined  
// accountId = 2  // not allowed

accountEmail = "hh@c.com"
accountPassword = "12222"
accountCity = "Bangalore"


console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var
because of issue in block scope and functional scope.
*/


