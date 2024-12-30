//*============================================================
//* Introduction to npm :- 
//*============================================================
//? npm is a popular package manager which comes bundled with Node.js 

//? It is a CLI tool used to install, update and publish it on npmjs.com registry.

//? Do not confuse npm CLI with npmjs.com, as it's a registry where most of the packages of Node.js are saved. 
    //* There are alternative Node.js package managers registry like JSR, which we will discuss in future. 

//? Fun facts :- 
    //* npm shouldn't be written in capitalized form unless you have everything as capital. 
    //* npm doesn't stand for Node Package Manager even though many people refer to it as that. It is a recursive acronymic abbreviation for "npm is not an acronym".







//! node_modules -> Stores all the packages we have installed
    //? node_modules is what stores all the installed packages, It's usually heavy, so make sure to include it in .gitignore so that it won't get pushed on version control and avoid it while sharing with others. 

//! package-lock.json -> Stores all the latest version of everything that we are using in our current project. 
    //? package-lock.json includes exact version of all packages that you install, It makes sure to prevent breaking changes in newer versions of package. 




//? npm install -> to install node_modules
 
//? npm list  -> list the installed dependencies 
    //* npm list -a    => To see in detail  

//? npm view <package-name> : To see the details of any package

//? npm view express version 

//? npm view nodemon versions