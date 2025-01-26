/**
 => Passing data from server to client and client to server.
 -> we already seen passing data from to ejs file. We did this using res.rendor() method and along with that passing object.

 Q> what happens if there is no data on the EJS side? Means what will happen if we forgot to pass data, After res.render() method,
    which was supposed to pass in ejs file.
 -> In, js, we handle this type of situation using if(condn) method. If exist then only print. But here, it will not work.
    The reason is bec it's looking for a variable, but in EJS, it doesn't scope this variable. means it don't check, does this
    variable exist or not.
    It check the variable only after running the code like does it exist or not.

 -> we can use the variable called locals to avoid thid kind of error.
    locals is basically a way to access all of the variables that get sent over with a res.render() method.
 -> using locals, we can check the existence of variable that are passed over to EJS.

 */

import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.post("/submit", (req, res) => {
    const wordLength = req.body["fName"].length + req.body["lName"].length;
    // how to pass data to ejs:
    res.render("index.ejs", {numOfLetter: wordLength});
})

app.listen(port, () => {
    console.log(`server running on port: ${port}`);
})