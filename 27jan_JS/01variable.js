const studRollno = 123;
let studEmail = "abc@gmail.com"
var studPasswd = "collage"
studCity = "mumbai"
let studState;

// studRollno = 1
console.log(studRollno);

studEmail = "xyz@gmail.com"
studPasswd = 12345
studCity = "Pune"

// console.log(studPasswd);
// console.log(studState);

console.table([studRollno,studEmail,studPasswd,studCity,studState])

/*
Prefer not to use var
because of issue in block scope & functional scope
*/