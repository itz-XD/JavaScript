// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));

// const newArr =  myArr.join() // .join() ne array ka type change kar diya string me

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log("slice (1, 3): ", myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)

console.log("splice (1, 3): ", myn2);

console.log("C ", myArr);