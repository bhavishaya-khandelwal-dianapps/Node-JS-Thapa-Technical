const https = require("https");
const readline = require("readline");
const chalk = require("chalk");

const rl = readline.createInterface({
    input : process.stdin, 
    output : process.stdout
});



const apiKey = `1eeccfb59edc61c8c944107e`;
const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

https.get(url, (response) => {
    
});