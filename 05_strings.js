const name = "xdShehzada"
const repoCount = 50

// console.log(name + repoCount + " Value")     // outdated

//  insted use this down below syntax .. be pro ;)

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

// const gameName = new String('xdShehzada')
const gameName = new String('narayan-xd-com')

// console.log(gameName)
// console.log(gameName[0])
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('S'))

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-8, 4)
console.log(anotherString)

const newStringOne = "    narayan   "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://narayan.com/narayan%20soren"

console.log((url.replace('%20', '-')))

// console.log(url.includes('soren'))
console.log(url.includes('xd'))

let convertingStringIntoArray = gameName.split('-')
console.log(convertingStringIntoArray)