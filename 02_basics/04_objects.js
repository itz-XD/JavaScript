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
// console.log(obj3);

// dataBase se jab bhi users aate hai to in the form of Array of Object me milta hai ;)
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
console.log(`>>>    ${users[0]}`);
console.log(`>>>    ${users[0].email}`);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isloggedIN'));


const course = {
    coursename: "Js in hindi",
    price: "999",
    courseInstructor: "XD"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
// console.log(instructor);


//******8 * out of the syllabus    ********

// const navbar = ({company}) => {
    
// }

// navbar(company = "_XD")

// ************* END ******************

//  This is how `json` looks like ;)
// {
//     name: "_XD",
//     coursename: "js in hindi",
//     price: "Free"
// }

/*
{"results":[{"gender":"male","name":{"title":"Mr","first":"Renaldo","last":"Beekelaar"},"location":{"street":{"number":6577,"name":"Compagnieberg"},"city":"Sint-Maartensdijk","state":"Zeeland","country":"Netherlands","postcode":"7223 FC","coordinates":{"latitude":"38.0336","longitude":"-15.1362"},"timezone":{"offset":"-3:30","description":"Newfoundland"}},"email":"renaldo.beekelaar@example.com","login":{"uuid":"b05a4cd9-d602-4c05-b875-ba30ebb306d7","username":"heavygoose743","password":"laurent","salt":"ZxdhWauU","md5":"611cd71eb582e59256d4226009fb69fa","sha1":"c0c2a00d4f71146a0f355c0242f5bbebcfe45465","sha256":"2b8006d3440d127c56e881dac0c19a12efe48187a9434305930721281e1630bb"},"dob":{"date":"1981-08-06T19:18:19.629Z","age":42},"registered":{"date":"2007-03-24T12:28:32.422Z","age":17},"phone":"(0459) 331019","cell":"(06) 71075233","id":{"name":"BSN","value":"77755655"},"picture":{"large":"https://randomuser.me/api/portraits/men/0.jpg","medium":"https://randomuser.me/api/portraits/med/men/0.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/0.jpg"},"nat":"NL"}],"info":{"seed":"5d8b1745821b0034","results":1,"page":1,"version":"1.4"}}
*/