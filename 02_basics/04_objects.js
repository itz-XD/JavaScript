// const tinderUser = new Object()      //  singleton object
// const tinderUser = {}       //  non-singleton object

const tinderUser = {} 

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isloggedIN = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "XD",
            lastname: "SHEHZADA"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2, ...obj4}    // this is called spread operator
console.log(obj3);

const users = [
    {
        id: 1,
        email: "email@gmail.com"
    },
    {
        id: 1,
        email: "email@gmail.com"
    },
    {
        id: 1,
        email: "email@gmail.com"
    },
]

users[0].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isloggedIN'));