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


//! os.userInfo() :
//? To know about the user 


//! os.homedir() : 
//? Returns the home directory of the current user. 
//* Usage : Useful for locating user-specific files. 


//! os.hostname() :
//? Returns the hostname of the system.
//* Usage : Useful for logging or identifying machines in networks.


//! os.networkInterfaces() :
//? Returns an object with details about the network interfaces. 
//* Usage : Helps in network diagostics or configuration. 


//! os.cpus() :
//? Returns details about each logical CPU/core. 
//* Usage : Helps optimize code for multi-core processing. 


//! os.tmpdir() :
//? Returns the default directory for temporary files.  



const os = require("os");



console.log("Platform :", os.platform());
console.log("User :", os.userInfo());
console.log("CPU Architecture :", os.arch());
console.log("Free Memory :", os.freemem(), "bytes");
console.log("Total Memory:", os.totalmem(), "bytes");
console.log("System Uptime :", os.uptime(), "seconds");
console.log("Home Directory :", os.homedir());
console.log("Host Name :", os.hostname());
console.log("Network Interfaces :", os.networkInterfaces());
console.log("CPU Info :", os.cpus());
console.log("Temporary Directory :", os.tmpdir());
console.log("Operating System :", os.type());