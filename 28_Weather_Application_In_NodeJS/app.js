import readline from "readline/promises";
import https from "https";

const rl = readline.createInterface({
    input : process.stdin, 
    output : process.stdout
});


const apiKey = `12cbc7fc696ca140d8f874a177da4df3`;
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather`;


const getWeather = async (city) => {
    const url = `${BASE_URL}?q=${city}&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error("City not found. Please check the city name");
        }
        const weatherData = await response.json();
        console.log(weatherData);

    }
    catch(error) {
        console.log(error);
    }
};


let city = await rl.question("ENter a city name to get its weather : ");

await getWeather(city);

rl.close();