import readline from "readline";


const rl = readline.createInterface({
    input : process.stdin, 
    output : process.stdout
});


const todos = [];


const showMenu = () => {
    console.log("\n=======Choose any option======\n");
    console.log("1. : Add Task");
    console.log("2. : Show Tasks");
    console.log("3. : Exit\n");
    rl.question("\nEnter any number : ", (num) => {
        if(num == 1) {
            rl.question("\nEnter your task : ", (task) => {
                todos.push(task);
                showMenu();
            })
        }
        else if(num == 2) {
            console.log("\n=======Your tasks=====\n");
            todos.forEach((task) => {
                console.log(task);
            });
            showMenu();
        }
        else if(num == 3) {
            console.log("\n=====Good Byee=====");
            rl.close();
        }
    });
};

showMenu();