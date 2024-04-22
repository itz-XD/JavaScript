// var c = 200
let a = 400

if (true) {
    let a = 10
    const b = 20
    var c = 30
    c = 30
    // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);


// ``````````````````````      ````````````````````

function one() {
    const username = "_XD"

    function two() {
        const website = "YouTube"
        console.log("username: ", username);
    }
    // console.log("Website: ", website);

    two()
}

// one() 


if (true) {
    const username = "+_XD"
    if (username === "+_XD") {
        const website = " YouTube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// **********************   interesting   **********************

// console.log(addone(5))  // <= all good :)

function addone(num) {
    return num + 1
}
// // addone(5)    // <= all set :)

// `````````````````````````````````````````````````````````````````

// addTwo(5)    // <= cause Error ;)
const addTwo = function(num) {
    return num + 2
}
// addTwo(5)    //  <= no Error :)