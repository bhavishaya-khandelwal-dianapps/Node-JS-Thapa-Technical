//* Currency Convertor In Node JS 
import readline from "readline";
import https from "https";
import chalk from "chalk";

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

const apikey = `205eabc76985770e14aa0706`;
const url = `https://v6.exchangerate-api.com/v6/205eabc76985770e14aa0706/latest/USD`;


const convertCurrency = (amount, rate) => {
    return (amount * rate).toFixed(2);
}


https.get(url, (response) => {
    let data = "";
    response.on("data", (chunk) => {
        data += chunk;
    });

    response.on("end", () => {
        const rates = JSON.parse(data).conversion_rates;
        console.log(rates);
        rl.question("Enter the amount in USD : ", (amount) => {
            rl.question("Enter the Target Currency : ", (currency) => {
                let rate = amount * rates[currency.toUpperCase()];
                if(rate) {
                    console.log(`${amount} USD is approximately ${convertCurrency(amount, rate)} ${currency}`);
                }
                else {
                    console.log("Invalid Currency Code");
                }
                rl.close();
            })
        })
    });
});