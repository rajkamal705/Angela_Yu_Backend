/**
 * Express Middleware:
 
 Q> Try to render index.html page, to return from server.

 -> res.sendFile()
 -> res.sendFile() requires an exact path in order to know which file to send back.
 -> the file that we want to send back over to the client is our index.html.

 1> body-parser (middleware):
 -> when we will click submit button of the form, that form is going to make a post request to the path that we specified, which is "/submit".
 -> body parser will be used as middleware in order to parse the information that comes in from the form.
 -> then we will add that data to the request object so that we can actually console.log() that data under req.body.
 
 */

 import express from "express";
 import bodyParser from "body-parser";
 import {dirname} from "path";
 import { fileURLToPath } from "url";
 const __dirname = dirname(fileURLToPath(import.meta.url));

 const app = express();
 const port = 3000;

//  what kind of data we want to parse: urlencoded method for html form.
 app.use(bodyParser.urlencoded({extended: true}));

 app.get("/", (req, res) => {
    // console.log(__dirname + "/public/index.html");
    res.sendFile(__dirname + "/public/index.html");
 })

 app.post("/submit", (req, res) => {
    console.log(req.body);
 })

 app.listen(port, () => {
    console.log(`listening on port ${port}`);
 })