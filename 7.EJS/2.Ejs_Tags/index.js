import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const data = {
        title: "EJS Tags",
        seconds: new Date().getSeconds(),
        items: ["apple", "banana", "cherry"],
        htmlContent: "<em>This is some em text</em>",
    }
    res.render("index.ejs", data);
    // what is data: data is an object of key:value pair which set corresponding value of index.ejs file.
})

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})