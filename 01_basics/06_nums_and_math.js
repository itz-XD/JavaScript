const score = 400

const balance = new Number(100)
// console.log(balance)

// console.log(typeof balance.toString())
// console.log(balance.toString())
// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

const otherNumber = 123.11723

// console.log(otherNumber.toPrecision(4))

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-US'))
// console.log(hundreds.toLocaleString('en-IN'))

let minValue = Number.MIN_VALUE
// console.log(minValue)

let maxValue = Number.MAX_VALUE
// console.log(maxValue)

let maxSafeInteger = Number.MAX_SAFE_INTEGER
// console.log(maxSafeInteger)



// +++++++++++++++++++++   Maths    ++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4))  // negative number ko positive me convert kar deta hai
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.2))  // for top value
// console.log(Math.floor(4.9))  // for lowest value
// console.log(Math.sqrt(49))  // square root nikal ke deta hai
// console.log(Math.pow(7, 2))  // square root nikal ke deta hai
// console.log(Math.min(4, 3, 6, 8))  // sabse lowest value find karta hai
// important **

console.log(Math.random()*10 + 1)
console.log(Math.floor(Math.random()*10) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)