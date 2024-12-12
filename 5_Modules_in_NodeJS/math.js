

const add = (a, b) => {
    return a + b;
};

const mul = (a, b) => {
    return a * b;
};




//! Method 1 : For single function 
//* module.exports = add;



//! Method 2 : For multiple functions 
module.exports.add = add;
module.exports.mul = mul;



//? module.exports is a single object or value. 
//? When you are reassign module.exports (e.g. module.exports = add), it completely replaces whatever was previously assigned. 
//? If you reassign it again (module.exports = mult), the previous value (add) is replaced with mult. 