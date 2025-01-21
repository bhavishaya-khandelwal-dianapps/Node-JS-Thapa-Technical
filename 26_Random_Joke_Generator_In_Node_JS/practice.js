import https from "https";
import chalk from "chalk";


const getJoke = () => {
    const url = "https://official-joke-api.appspot.com/random_joke";

    https.get(url, (response) => {
        let data = "";

        response.on("data", (chunk) => {
            data += chunk;
        });


        response.on("end", () => {
            let body = JSON.parse(data);
            console.log(chalk.blue.bold.bgWhite("Here is a random joke"));
            console.log(chalk.red.bold.bgBlue(`${body.setup}`));
            console.log(chalk.green.bold.bgGrey.inverse(`${body.punchline}`));
        });


        response.on("error", () => {
            console.log("Some error occured");
        });
    });
}


getJoke();