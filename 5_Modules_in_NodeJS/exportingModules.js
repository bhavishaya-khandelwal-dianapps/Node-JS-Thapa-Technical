// //* Method 1
// const getName = () => {
//     return "Bhavishaya Khandelwal";
// };


// const getLocation = () => {
//     return "Jaipur";
// };

// const dateOfBirth = "24.09.2002";


// exports.getName = getName;
// exports.getLocation = getLocation;
// exports.dob = dateOfBirth;





// //* Method 2 
// exports.getName = () => {
//     return "Bhavishaya Khandelwal";
// };

// exports.getLocation = () => {
//     return "Jaipur";
// };

// exports.dob = "24.09.2002";





// //* Method 3 Exporting a default value 
// class User {
//     constructor(name, age, email) {
//         this.name = name;
//         this.age = age;
//         this.email = email;
//     }

//     getUserStats() {
//         return `
//             Name : ${this.name}
//             Age : ${this.age}
//             Email : ${this.email}
//         `;
//     }
// };

// module.exports = User;





//* Method 4 What is the difference between module.exports and exports ?
// module.exports = {
//     getName : () => {
//         return "Bhavishaya Khandelwal";
//     },

//     getLocation : () => {
//         return "Jaipur";
//     },

//     dob : "24.09.2002",
// };

exports.foo = "foo";

console.log(module);