//*====================================================
//* Semantic Versioning System :- 
//*===================================================
//? 1.0.0 







//*===========================================================================
//* Symbol in dependency versions :- 
//*===========================================================================
//? Symbol          Meaning                                  Example          Resolve To

//? ^(Caret)    -   Minor and patch updates allowed      -   ^4.17.1          4.18.0, not 5.0.0  
//? ~(Tilde)    -   Only patch updates allowed           -   ~4.17.1          4.17.2, not 4.18.0
//? Exact       -   Fixed Version                        -   4.17.1           4.17.1 only 
//? >           -   Greater Than                         -   >4.17.1          4.18.0, 5.0.0 
//? <           -   Less Than                            -   <4.17.1          4.16.0, not 4.17.1
//? >=          -   Greater Than or Equal to             -   >=4.17.1         4.7.1, 5.0.0 
//? <=          -   Less than or equal to                -   <=4.17.1         4.17.1, 4.16.0
//? *           -   Any version                          -   *                4.0.0, 5.0.0, etc.
//? Range       -   Acceptable Range                     -   4.16.0 - 4.17.1  
//? x           -   Wildcard for minor/patch versions    -   4.x









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
