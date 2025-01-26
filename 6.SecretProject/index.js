import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var userIsAuthorised = false;

// body-parser middleware.
app.use(bodyParser.urlencoded({extended: true}));

// custom middleware
app.use(function passwordCheck(req, res, next) {
    const password = req.body["password"];
    if(password === "home801302") {
        userIsAuthorised = true;
    }
    next();
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/check", (req, res) => {
    if(userIsAuthorised == true) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.sendFile(__dirname + "/public/index.html");
    }
})

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})