//  if
const inUserloggedIn = true
const temperature = 41
/*
if (2 == "2") {
    console.log("executed");
}
*/

/*
if (2 === "2") {
    console.log("executed");
}
*/

/*
if (2 != 3) {
    console.log("executed");
}
*/

/*
if (temperature === 41) {
    console.log("temperature is equal to 41");
} else {
    console.log("temperature is less than or greater than 41");
}
*/

// <, >, <=, >=, ==, !=, ===, !==

/*
const score = 200

if (score > 100) {
    let power = "fly"
    console.log(`user power: ${power}`);
}
console.log(`user power: ${power}`);
*/

const balance = 1000

// if (balance > 500) console.log("test");

/*
if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1200");
}
*/

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in");
}