//*====================================================
//* Semantic Versioning System :- 
//*===================================================
//? 1.0.0 







//*====================================================
//* Symbol in dependency versions :- 
//*===================================================
//? Symbol          Meaning                                  Example 

//? ^(Caret)    -   Minor and patch updates allowed      -   ^4.17.1
//? ~(Tilde)    -   Only patch updates allowed 
//? Exact       -   Fixed Version 
//? >           -   Greater Than 
//? <           -   Less Than 
//? >=          -   Greater Than or Equal to 
//? <=          -   Less than or equal to 
//? *           -   Any version 
//? Range       -   Acceptable Range 
//? x           -   Wildcard for minor/patch versions 









//*====================================================
//* npm Commands :- 
//*===================================================
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


//! npm remove <package-name>
