//* CLI -> Command Line Interface 
//? CLI TO DO APPLICATION 



//* This module is used to interact with CLI
import readline from "readline";

const rl = readline.createInterface({
    input : process.stdin, 
    output : process.stdout
});


const todos = [];


const handleInput = (option) => {
    if(option == 1) {
        rl.question("Enter the task", (task) => {
            todos.push(task);
            console.log("Task added :", task);
            showMenu();
        })
    }
    else if(option == 2) {
        console.log("\n Your Todo List");
        todos.forEach((currEle, index) => {
            console.log(index + ". " + currEle);
        })
        showMenu();
    }
    else if(option == 3) {
        console.log("Good Byee");
    }
    else {
        console.log("Invalid Option, please try again");
        showMenu();
    }
}

const showMenu = () => {
    console.log("\n1: Add a Task");
    console.log("2: View Task");
    console.log("3: Exit");
    rl.question("Choose an option : ", handleInput);
}

showMenu();


