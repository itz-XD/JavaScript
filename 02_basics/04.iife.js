// Immediately Invoked Function Expressions (IIFE)


(function fun() {       // <= named IIFE
    console.log(`DATA BASE CONNECTED :)`);
})();       // yaha par ish function (program) ko end ke liye `;` use karna vvi -_-

((name) => {       // <= unnamed IIFE
    console.log(`NEW DATA BASE CONNECTED ${name}`)
})(`_xD`);