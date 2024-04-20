// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "XD",
    "full name": "XD",
    [mySym]: "myKey1",   // mySym: "myKey1",
    age: 18,
    location: "Patna",
    email: "xd@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(typeof jsUser.mySym);
// console.log(jsUser[mySym]);

// how to change values
jsUser.email = "newXD@google.com"

// After freezing an Object you can't be able to edit the values from Object
// Object.freeze(jsUser)

// now this change will not effect anything
jsUser.email = "newXD@okay.com"
// console.log(jsUser);

// how to add an function in Object
jsUser.greeting = function() {
    console.log("Hello JS user");
}

jsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());