// Dates

let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toUTCString())
// console.log(myDate.getTimezoneOffset())


// console.log(typeof myDate)  // Date ek object hai js me

// let myCreatedDate = new Date(2012, 0, 23)
// let myCreatedDate = new Date(2012, 0, 23, 5, 3)
// let myCreatedDate = new Date("2024-04 -05")
let myCreatedDate = new Date("02-11-2023")
// console.log(`\n\nmyCreatedDate: ${myCreatedDate}\n`)
// console.log(`myCreatedDate: ${myCreatedDate.toDateString()}\n\n`)
// console.log(`myCreatedDate: ${myCreatedDate.toLocaleString()}\n\n`)


let MyTimeStamp = Date.now()

// console.log(MyTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())   // Day bole to mon, tue, wed...

// `${newDate.getDay()} and the time is ...`

newDate.toLocaleString('default', {
    weekday: "long",
    // timeZone: ""
})