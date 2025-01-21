//todo NOTE : In newer version of Node.js (14.8+), you can use top-level await without needing to wrap it in an async function. 


const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

const json = await response.json();

console.log(json);



console.log(import.meta.dirname);
console.log(import.meta.filename);