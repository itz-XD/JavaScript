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
console.log(loginUserMessage("_XD"));