/**
 => Custom Middleware:
 1> morgan: HTTP request logger middleware for node.js
 -> we use morgan middleware when we send a request to our server.
 */

 import express from "express";
 import morgan from "morgan";

 const app = express();
 const port = 3000;

 app.use(morgan("tiny"));

 app.get("/", (req, res) => {
    res.send("hello raj");
 })

 app.listen(port, () => {
    console.log(`listening on port ${port}`);
 })