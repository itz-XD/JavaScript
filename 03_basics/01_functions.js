function sayMyName() {
    console.log("X");
    console.log("D");
    console.log(" ");
    console.log("S");
    console.log("H");
    console.log("E");
    console.log("H");
    console.log("Z");
    console.log("A");
    console.log("D");
    console.log("A");
}

// sayMyName()
//                 (parameters, parameters)
// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

// function addTwoNumbers(number1, number2) {
//     let result = number1 + number2
//     return result
//     console.log("_XD");   //  Unreachable code detected.ts(7027)
// }

function addTwoNumbers(number1, number2) {
    return number1 + number2
}

//   (arguments, arguments)
const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);

// function loginUserMessage(username) {
//     if(username === undefined) {
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// function loginUserMessage(username) {
//     if(!username) {
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

//  This is how you can define default value
function loginUserMessage(username = "Sam") {
    if(!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("_XD"));
// console.log(loginUserMessage("_XD"));

// *******************************************************************

function calculateCartPrice(val1, valu2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2999));

// const user = {
//     username: "_xD",
//     prices: 199
// }

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "Sam",
    price: 299
})

const myNewArray = [200, 400, 100, 500]

function handleArray(getArray) {
    return getArray[1]
}

// console.log(handleArray(myNewArray));
// console.log(handleArray([2000, 3210, 9099]));