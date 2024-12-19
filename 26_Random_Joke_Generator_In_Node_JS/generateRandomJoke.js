import https from "https";
import chalk from "chalk";


const getJoke = () => {
    const url = "https://official-joke-api.appspot.com/random_joke";
    https.get(url, (response) => {
        let data = "";
        response.on('data', (chunk) => {
            data += chunk;
        });

        response.addListener('end', () => {
            const joke = JSON.parse(data);
            console.log(chalk.green.bold`Here is a random ${joke.type} joke : `);
            console.log(chalk.yellow.bold(`${joke.setup}`));
            console.log(chalk.blue.bold(`${joke.punchline}`));
        });

        response.on('error', (err) => {
            console.log(`Error fetching the joke, ${err.message}`);
        });
    });
}


getJoke();