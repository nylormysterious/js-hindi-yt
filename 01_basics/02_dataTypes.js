"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("Hitesh")


let name = "hitesh"
let age = 18
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint// if number bahut zyada bada then bigint used, especially in trading stock market, bahut badi website hai reddit , facebook hum joh banayengey voh itna number nahi consume karega
//eka basic datatype hai string single and double quote both allowed double quote preffreed
// string => ""
// boolean => true/false
// null => standalone value
// null ke peeche bahut saari kahaniya hai, nul ek standalone value hai yb js ke andar yes datatype bhi hai but yeh standalone value hai, will see later on too

// undefined => 
    // problem aati null kya hai undefined kya hai , undefined th hai ki jab aa[ne value defin enahi mi hai jaisa startig mei likha tha //let state; abhi tak varbale declare kiya but koi valur nahi di]
// null ek repsrentation hai empty balue kaempty ka  matla yeh nahi ki 
// let state =""
// khali string alag hai /kyunki uska type define hoaya string hai
// null ek special typ hai aap isko assgn bhi kar sakte aise null, intentionally bol raha hoon voh indefined nahi hai, voh khali hai
// let state=null;
// jaise khali ka matlab hai, serverse request bheji usse kahan temperture batao, if it sends  temperature 0, server mei dikkat aa gayi nai, abhi temperature nahi bhej paa raha toh 0 toh ek temp hua, so uss case mei 0 nahi chaiye bcz 0 ek temperature hai mei null prefer karunga null matlab empty temperature aaya hi nahi hai
//aur bhi bahtu saare gs hai hum baat akrenegy bt8 abhi null ek standalone value hai and undefine d,atbl abhi value assigne nahi hui hai

// symbol => unique
//will see iska zyada tar i pletmation dekhey jab hum ract ke baare mei, jab bahut ssare compknets banate, and apko dentify karna, yeh compet unique hai, yeh waala compinet iss unidque bai, unoquess find karne mei symbol bahur xyada use aata
// bahut saare figma tool hhoagaye yeh sab symbols ka bharpoor se karete, define karne ke liye ki ek indvudual compet sonsa
// unquess ens ke liye mostly use hota
//yeh hogay eprimitve datayes

// object/
// woill see i detail atleast in 5 videos about objects
console.log(typeof "Tanisha")
console.log(typeof age)
console.log(typeof undefined); // undefined
console.log(typeof null); // object-
//jab null ka type dehte yoh bject aata, kuch log bolte lanuage ki khaami ha joh ki hai bhi, kuch log bolte yeh hi tareeka hai
//jaise string ka hua numbers ka hua, undefine dapne aap mei typ hai lekin null ek object hai.// intervie question hai****
// kahi log isko lang k error bhi bolte
//undefined 