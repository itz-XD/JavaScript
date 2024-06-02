/* To make it simple, an instance is like a unique copy of a blueprint.
         Imagine you have a blueprint for a house. The blueprint itself is not a house, but using it, you can build as many houses as you want.
                 Each house you build using the blueprint is an instance of that blueprint. */

const promiseOne = new Promise(function (resolve, reject) {
        // Do an async task
        // DB calls, cryptography, network

        setTimeout(function () {
                console.log('Async task is complete');
                resolve()
        }, 1000)
})

promiseOne.then(function () {
        console.log("Promise consumed");
})

new Promise(function (resolve, reject) {
        setTimeout(() => {
                console.log("Async task 2");
                resolve()
        }, 1000);
}).then(function () {
        console.log("Async 2 resolve");
})

const promiseThree = new Promise(function (resolve, reject) {
        setTimeout(() => {
                setTimeout(() => {
                        resolve({ username: "itz-XD", email: "itzxd@gmail.com" })
                }, 1000);
        }, 1000);
})

promiseThree.then(function (user) {
        console.log('Email: ', user);
})

const promiseFour = new Promise(function (resolve, reject) {
        setTimeout(() => {
                let error = true
                if (!error) {
                        resolve({ username: "XD", password: "123" })
                } else {
                        reject('ERROR: Something went wrong')
                }
        }, 1000);
})

promiseFour
        .then((user) => {
                console.log(user);
                return user.username
        })
        .then((username) => {
                console.log(username);
        })
        .catch((error) => {
                console.log(error);
        }).finally(() => { console.log("The promise is either resolved or rejected"); })



const promiseFive = new Promise((resolve, reject) => {
        setTimeout(() => {
                let error = true
                if (!error) {
                        resolve({ username: "JavaScript", password: "123" })
                } else {
                        reject('ERROR: JS went wrong')
                }
        }, 1000);
})

async function consumePromiseFive() {
        try {
                const response = await promiseFive
                console.log(response);
        } catch (error) {
                console.log(error);
        }
}

consumePromiseFive()


/*
async function getAllUsers() {
        try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await response.json()
                console.log(data);
        } catch (error) {
                console.log("E:", error);
        }
}
getAllUsers()
*/


fetch('https://api.github.com/users/itz-XD')
        .then((response) => {
                return response.json()
        })
        .then((data) => {
                console.log(data);
        })
        .catch((error) => { console.log(error); })