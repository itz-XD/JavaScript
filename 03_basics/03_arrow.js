const user = {
    username: "_xD",
    price: 999,

    welcomeMessage: function() {    // `this` keyword apna current context(block-{}) ko refer karta hai
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()   // yaha par current context same hai
// user.username = "sam"   // or yaha pe maine  current context(values jo variable apko hold kar rahe hai) change kar diya
// user.welcomeMessage()

// console.log(this);       // output: {} <- empty OBJECT ;)

// function chai() {
//     let username = "_xD"
//     console.log(this);
//     // console.log(this.username);
// }

// chai()

// const chai = function() {
//     let username = "_xD"
//     console.log(this.username);
// }

const chai = () => {
    let username = "_xD"
    // console.log(this.username);
    console.log(this);
}

// chai()

    //  basic arrow functoin    *Explicit Return*
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

    // *Implicit Return* _isme `return` likhne ki jarurat nhi h kyuki ye ek he line ka statement hai ;)
    // {} use hua to `return` keyword likhna padega or () use hua to `return` keyword nahi likhna padega

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "_xD"})      // <- here's how to return an object without using return  cause of () <-this


console.log(addTwo(1, 2));


// const myArray = [2, 5, 3, 7, 9]

// myArray.forEach()