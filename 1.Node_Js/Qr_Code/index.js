/**
 -> Use the inquirer.js npm package to get user input.
 -> use the qr-image npm package to turn the user entered url into a qr image code.
 -> create a txt file to save the user input using the native fs node module: use fs.writeFile() to create new text file.
 */

import inquirer from 'inquirer';
// var qr = require('qr-image');
import qr from 'qr-image';
import fs from 'fs';
// importing fs object from fs module.

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        message: "Type in your URL: ",
        name: "URL",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_image.png'));

    //to create text file: use fs.writeFile() from file system module from node js documentation.
    fs.writeFile('URL.txt', url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    }); 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
