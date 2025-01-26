import express from "express";
const app = express();
const port = 3000;

/**
 * no. of times you make changes, you have to run the server again and again.
 * ctrl + c
 * node index.js
 
 -> To avoid everytime starting server again and again, we can use nodemon.
 -> nodemon is a tool that helps develop node.js based application when file changes in the directory are detected.`
 */

// app.get() method comes from express.
// "/" is home page i.e: localhost:3000
app.get("/", (req, res) => {
    // console.log(req.rawHeaders);
    // rawHeaders are set of key value pair get from where req originated.

    // res.send("hello port!");
    // instead of sending normal hello port, send html

    res.send("<h1>Hello raj kamal</h1>");
})

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1> <p>This is about me page.</p>")
})

app.get("/contact", (req, res) => {
    res.send("<h1>My Contact</h1> <p>+91 7050613872</p>")
})

app.listen(port, () => {
    console.log(`server started on port: ${port}`)
})