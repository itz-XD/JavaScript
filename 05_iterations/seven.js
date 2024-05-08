const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// using map
// let newNums = myNumbers.map((num) => {return num + 10})

// using forEach
const newNums = [];
myNumbers.forEach( (number, index) => {
    newNums[index] = number + 10;
} );

// console.log(newNums);

const newNum = myNumbers
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter((num) => num >= 40)

console.log(newNum);