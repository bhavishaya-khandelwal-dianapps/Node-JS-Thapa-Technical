
//*================================================
//* GLobal Packages :- 
//*================================================
//! sudo npm install -g npm-check-updates

//? Up untill now, we have been installing packages locally, 
//? To install package globally, 
    //* sudo npm install -g npm-check-updates 
    //* On Linux, and macOS, you might have to prefix it with sudo 
    //* This package gets installed globally, and you can access from anywhere.
    //* You can try running npm-check-updates command anywhere in any projects without using npx 
//todo : FUN FACT : npm is itself a global package which means if you need to update npm, you will do : npm install -g npm 


//! npm install -g <package-name> 
//? To install any package globally 


//! npm outdated -g
//? To see outdated global packages 


//! npm update -g <package-name> 
//? To update any specific package 


//! npm remove -g <package-name>
//? To remove any specific package 







//*================================================
//* Development Dependency :- 
//*================================================
//? Development dependencies are the packages that aren't needed for functioning of your project in production.
//? This can be for formatting, linting, testing, and so on. 
//? If you use "npm install --production", those packages won't be installed, but they will be installed if you don't use production flag. 
//* npm install -D eslint 
    //todo --- This will install eslint as a development dependency. 
    //todo --- You will see it in seperate property inside package.json named "devDependencies".