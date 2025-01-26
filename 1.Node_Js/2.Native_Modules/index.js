/**
 * Q> what are native modules?
  -> native modules are some tool to create server side application.
  -> open node js documentation -> go to file system.

=> Q> what is file system?
ans- File system is native code modules that allows us to access the local storage.

*/

const fs = require("fs");

// fs.writeFile() -> This method is going to allow us to take a message from user input.
// syntax: fs.writeFile(file, data[, options], callback)
// see documentation for detail.

// fs.writeFile("message.txt", "Hello from node js!", (err) => {
//     if(err) throw err;
//     console.log("file has been saved");
// });

// Read File: Syntax : fs.readFile(path[, options], callback)
// This method read file from given file path.
// use encoding 'utf8' to get string output else you will get buffer output.
// If no encoding is specified, then the raw buffer is returned. If options is a string, then it specifies the encoding:

fs.readFile('./message.txt', 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
});