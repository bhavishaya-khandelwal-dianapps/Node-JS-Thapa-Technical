//*================================================
//* OS Module - Node JS :-  
//*================================================

//! os.platform() :
//? Returns the OS platform (e.g., 'win32' for Windows, 'linux' for Linux, 'darwin' for macOS).
//* Usage : Useful for writing cross-platform applications. 


//! os.arch() :
//? Returns the CPU architecture (e.g. 'x64', 'arm').
//* Usage : Helps optimize code for specific architectures. 


//! os.freemem() :
//? Returns the amount of free system memory in bytes.
//* Usage : Useful for monitoring system performance. 


//! os.totalmem() :
//? Returns the total system memory in bytes. 
//* Usage : Provides insights into the machine's capacity.


//! os.uptime() :
//? Returns the system uptime in seconds. 
//* Usage : Commonly used in logging or monitoring tools || Useful for storing temporary data.





const os = require("os");



console.log("Platform :", os.platform());
console.log("User :", os.userInfo());