const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin, 
    output : process.stdout
});

const todos = [];


const handleInput = (option) => {
    if(option == 1) {
        rl.question("Enter the task : ", (task) => {
            todos.push(task);
            console.log("Task Added :", task);
            showMenu();
        });
    }

    else if(option == 2) {
        if(todos.length == 0) console.log("======NO TASK FOUND======");

        else { 
            console.log("\n=================Your tasks are shown here==========")
            todos.forEach((currTask) => {
                console.log(currTask);
            })
        }
        showMenu();
    }

    else if(option == 3) {
        console.log("=============GOOD BYEE==========");
        rl.close();
    }

    else {
        console.log("Invalid option, Please try again....");
        showMenu();
    }

};

const showMenu = () => {
    console.log("\n==============1. Add a task==============");
    console.log("===============2. View Tasks==============");
    console.log("===============3. Exit==================");
    rl.question("-------------Choose an option : ", handleInput);
};


showMenu();