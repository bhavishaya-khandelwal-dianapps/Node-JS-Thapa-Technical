//*================================================
//* npm Commands :- 
//*================================================
//! npm install <package-name>@<version> 
//? Example :- 
    //* npm install express@4.0.0 // ^4.0.0
    //* npm install express@4.0.0 --save-exact // To install exact version 
    //* npm install express@~4.0.0 
    //? You can use any symbol while specifying version. 


//! npm outdated
    //* It shows outdated packages in your project.
    //* Current : The version of the package currently installed in your project. 
    //* Wanted : The latest version that satisfies the version range defined in your package.json. it basically uses the symbols to get it.
    //* Latest : Absolute latest version of the package 


//! npm update / npm update <package-name>
//? This updates all the packages in your project, but it follows the range defined in package.json. It doesn't update to absolute latest version.



//! npm remove <package-name>
//? To remove any specific package



//! npm list 
//? To list all the installed packages  



//! npx npm-check-updates 
//? npm is a CLI tool that comes with npm.
//? It is used to execute a package without requiring you to install globally or locally.
//? It is useful for temporary usage of a package. 
//? npm-check-updates is a package which you can use to upgrade your pacjages to absolute lastest versions.
//? Use -u flag at the end to update the packages after reviewing.
//? This only updates package.json, then you can use npm install to update the packages. 
//* So if you want to update your package.json file then you can use this command