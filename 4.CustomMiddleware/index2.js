import express from "express";
const app = express();
const port = 3000;

// custom middleware, expect a callback fun in app.use() method.
app.use(function logger(req, res, next) {
    console.log("Request method: ", req.method);
    console.log("Request URL: ", req.url);
    next();
})

app.get("/", (req, res) => {
    res.send("Hello port!");
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})