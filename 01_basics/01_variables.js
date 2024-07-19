const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
// js itni safe language hai ki bina varibale ke aagey kuch bhi likhe varible ki memory resrve kar sak, thi is nit qa good taria but tio rememver this is also a way// not to be used
let accountState;//ek naya varive declare kiya but kioi value nahi daal rhe//ab accoutn state ko rpint karane par undefined aa rahe
//so humne dekha ki agar js mei koi varibale declare karke chod dete bina value ke then js usko undefined maanti

// accountId = 2 // not allowed// as is a const keyword


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])